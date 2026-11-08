

// import { createContext, useContext, useState, useEffect } from 'react' ;
// import { trackVisitor as apiTrackVisitor  } from '../services/trackService' 
// import { GetSettingsWeb as apiSettings} from '../services/trackService' 

// const TrackContext = createContext();

// export const TrackProvider = ({ children }) => {
//     const [loading, setLoading] = useState(true);
//     const [settings, setSettings] = useState({});
//     const [visitor, setVisitor] = useState(null);
//     const [error, setError] = useState(null);

//     const initializeApp = () => {
//         setLoading(true);
        
//         try {
//             trackVisitor()
//             getSettings()
//             setError(null);         
//         } catch (err) {
//             setError('error for get data'); 
//         } finally {
//             setLoading(false);
//         }
//     };

//     const trackVisitor = async () => {
//         const visitorResponse = await apiTrackVisitor();
//         localStorage.setItem('visitor', JSON.stringify(visitorResponse));
//         if (visitorResponse) {
//             const cookie = document.cookie = `visitor_hash=${visitorResponse.visitor.key}`;
//         }
//         setVisitor(visitorResponse);
//     }

//     const getSettings = async () => {
//         const settingsResponse = await apiSettings();
//         setSettings(settingsResponse)      
//         document.title = settingsResponse.title 

//         const metaDescription = document.querySelector('meta[name="description"]')
//         metaDescription.setAttribute('content', settingsResponse.description)

//         const metaFavicon = document.querySelector('link[rel="icon"]')
//         metaFavicon.setAttribute('href', settingsResponse.favicon)
//     }





//     useEffect(() => {initializeApp();}, []);
//     const contextValue = {
//       loading, settings, visitor, 
//       error, retryInitialization: initializeApp};
//     return (
//         <TrackContext.Provider value={contextValue}>
//           {children}
//         </TrackContext.Provider>
//     );
// };

// export const useTrack = () => {
//   const context = useContext(TrackContext); 
//   return context;
// };



import {createContext,useContext,useState,useEffect,useCallback} from 'react';

import { trackVisitor as apiTrackVisitor, GetSettingsWeb as apiSettings} from '../services/trackService';

const TrackContext = createContext(null);


const safeSetStorage = (key, value) => {
    try {
        window.localStorage.setItem(key, value);
        return true;
    } catch (error) {
        console.warn('LocalStorage unavailable:', error);
        return false;
    }
};

export const TrackProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [settings, setSettings] = useState({});
    const [visitor, setVisitor] = useState(null);
    const [error, setError] = useState(null);

    const trackVisitor = async () => {
        try {
            const visitorResponse = await apiTrackVisitor();

            if (!visitorResponse) return;

            // Save visitor safely
            safeSetStorage(
                'visitor',
                JSON.stringify(visitorResponse)
            );

            // Set cookie safely
            try {
                if (visitorResponse.visitor?.key) {
                    document.cookie =
                        `visitor_hash=${encodeURIComponent(visitorResponse.visitor.key)}; path=/; SameSite=Lax`;
                }
            } catch (error) {
                console.warn('Cookie unavailable:', error);
            }

            setVisitor(visitorResponse);

        } catch (error) {
            console.error('Track visitor error:', error);
        }
    };

    const getSettings = async () => {
        try {
            const settingsResponse = await apiSettings();

            if (!settingsResponse) return;

            setSettings(settingsResponse);

            if (settingsResponse.title) {
                document.title = settingsResponse.title;
            }

            const metaDescription = document.querySelector(
                'meta[name="description"]'
            );

            if (metaDescription && settingsResponse.description) {
                metaDescription.setAttribute(
                    'content',
                    settingsResponse.description
                );
            }

            const metaFavicon = document.querySelector(
                'link[rel="icon"]'
            );

            if (metaFavicon && settingsResponse.favicon) {
                metaFavicon.setAttribute(
                    'href',
                    settingsResponse.favicon
                );
            }

        } catch (error) {
            console.error('Get settings error:', error);
            throw error;
        }
    };

    const initializeApp = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            await Promise.allSettled([
                trackVisitor(),
                getSettings()
            ]);

        } catch (error) {
            console.error('Initialization error:', error);
            setError('Error for get data');

        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        initializeApp();
    }, [initializeApp]);

    const contextValue = {
        loading,
        settings,
        visitor,
        error,
        retryInitialization: initializeApp
    };

    return (
        <TrackContext.Provider value={contextValue}>
            {children}
        </TrackContext.Provider>
    );
};

export const useTrack = () => {
    return useContext(TrackContext);
};

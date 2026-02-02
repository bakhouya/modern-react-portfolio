

import { createContext, useContext, useState, useEffect } from 'react' ;
import { trackVisitor as apiTrackVisitor  } from '../services/trackService' 
import { GetSettingsWeb as apiSettings} from '../services/trackService' 
import { GetUser as apiUser} from '../services/trackService' 
import { GetContent as apiContent} from '../services/trackService' 

const TrackContext = createContext();

export const TrackProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [settings, setSettings] = useState({});
    const [visitor, setVisitor] = useState(null);
    const [user, setUser] = useState(null);
    const [content, setContent] = useState(null);
    const [error, setError] = useState(null);

    const initializeApp = () => {
        setLoading(true);
        
        try {
            trackVisitor()
            getSettings()
            getUserInfo()
            getContentInfo()

            setError(null);
          
        } catch (err) {
            setError('حدث خطأ في تحميل البيانات');
            console.error('خطأ التهيئة:', err);  
        } finally {
            setLoading(false);
        }
    };

    const trackVisitor = async () => {
        const visitorResponse = await apiTrackVisitor();
        localStorage.setItem('visitor', JSON.stringify(visitorResponse));
        if (visitorResponse) {
            const cookie = document.cookie = `visitor_hash=${visitorResponse.visitor.key}`;
        }
        setVisitor(visitorResponse);
    }

    const getSettings = async () => {
        const settingsResponse = await apiSettings();
        setSettings(settingsResponse)      
        document.title = settingsResponse.title 

        const metaDescription = document.querySelector('meta[name="description"]')
        metaDescription.setAttribute('content', settingsResponse.description)

        const metaFavicon = document.querySelector('link[rel="icon"]')
        metaFavicon.setAttribute('href', settingsResponse.favicon)
    }

    const getUserInfo = async () => {
        const UserResponse = await apiUser();
        setUser(UserResponse) 
    }
    const getContentInfo = async () => {
        const ContentResponse = await apiContent();
        setContent(ContentResponse) 
    }











    useEffect(() => {initializeApp();}, []);
    const contextValue = {
      loading, settings, visitor, user,
      content ,
      error, retryInitialization: initializeApp};
    return (
        <TrackContext.Provider value={contextValue}>
          {children}
        </TrackContext.Provider>
    );
};

export const useTrack = () => {
  const context = useContext(TrackContext); 
  return context;
};



/* ----------------------------------------------------------------------------------------------------------- */
// Imports
/* ----------------------------------------------------------------------------------------------------------- */
import { useEffect } from "react";
/* ----------------------------------------------------------------------------------------------------------- */


/* ----------------------------------------------------------------------------------------------------------- */
/* Plays a sound when the user clicks on a clickable element */
/* soundPath: path to the sound file */
/* volume: sound volume, set to 0.2 by default */
/* ----------------------------------------------------------------------------------------------------------- */
export function useGlobalClickSound(soundPath, volume = 0.2) {


  useEffect(() => {
    // Create the audio object and set its volume
    const audio = new Audio(soundPath);
    audio.volume = volume;

    // List of elements that should play the click sound
    const CLICKABLE = "button, a, [role='button'], [onclick], input[type='button'], " + "input[type='submit'], input[type='reset'], label[for], " + "summary, [data-clickable]";

    // Handle clicks and check if the clicked element is clickable
    const handleClick = (e) => {
        const target = e.target;

        // Find the clickable element or one of its parents
        const clickable = target.closest(CLICKABLE);

        // Stop here if the clicked element is not clickable
        if (!clickable) return; 

        // Skip the sound if the element is disabled
        if (clickable.matches(":disabled") || clickable.getAttribute("aria-disabled") === "true") {
            return;
        }
        // Restart the sound so it can play on every click
        audio.currentTime = 0; 
        // Play the sound and ignore playback errors
        audio.play().catch(() => {}); 
    };

    // Listen for clicks on the whole page
    document.addEventListener("click", handleClick);

    // Run the effect again if the sound path or volume changes
    return () => {document.removeEventListener("click", handleClick);};

  }, [soundPath, volume]);


}
/* ----------------------------------------------------------------------------------------------------------- */

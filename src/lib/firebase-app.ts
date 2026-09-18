import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Public web config, not a secret — Firebase's access control is Security
// Rules + Cloud API-key restrictions, not hiding this. Single shared
// instance so every Firebase feature (Analytics, Remote Config, ...)
// initializes against the same app rather than double-calling
// initializeApp, which throws on a second [DEFAULT] app.
const firebaseConfig = {
  apiKey: "AIzaSyBC_TCiUTPRQp9NJudiDhYcBvRTI-GBu50",
  authDomain: "jerrylockard-me.firebaseapp.com",
  projectId: "jerrylockard-me",
  storageBucket: "jerrylockard-me.firebasestorage.app",
  messagingSenderId: "959932622957",
  appId: "1:959932622957:web:262b649cae038676e47764",
  measurementId: "G-WS9RQDECH3",
};

export const app = initializeApp(firebaseConfig);

// Analytics only works in a browser with the right APIs available — guard
// so this module stays importable during Astro's server-side build.
export const analytics =
  typeof window !== "undefined"
    ? isSupported().then((ok) => (ok ? getAnalytics(app) : null))
    : Promise.resolve(null);

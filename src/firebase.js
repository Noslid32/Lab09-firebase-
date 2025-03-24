import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHyCQ9_er-_g85X3_aewXNwt7rJj4q6bE",
  authDomain: "lab09-1dd4a.firebaseapp.com",
  projectId: "lab09-1dd4a",
  storageBucket: "lab09-1dd4a.appspot.com",
  messagingSenderId: "458707242458",
  appId: "1:458707242458:web:c1cfce3330e77f183d04e3",
  measurementId: "G-LF1SWM76G8"
};

// Evita inicializar Firebase más de una vez
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;

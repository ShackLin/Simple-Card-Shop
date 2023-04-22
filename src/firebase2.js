import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyA8v_8hR5xP5_0QXiQI_bGmWaRLxn621lA",
      authDomain: "auth-shack.firebaseapp.com",
      projectId: "auth-shack",
      storageBucket: "auth-shack.appspot.com",
      messagingSenderId: "1020196338877",
      appId: "1:1020196338877:web:a1f803da92fc6690928bd4"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app

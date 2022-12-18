import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyDP3v4BFicBAQdpaRvb1eLcsTP0g2ZI9_w",
  authDomain: "vue-auth-proje.firebaseapp.com",
  projectId: "vue-auth-proje",
  storageBucket: "vue-auth-proje.appspot.com",
  messagingSenderId: "808862097196",
  appId: "1:808862097196:web:6502ace24fadfebb9c5689",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBN57IFcxmRvIm5yGruiUQrv4si9gdVMQ4",
  authDomain: "login-b2275.firebaseapp.com",
  projectId: "login-b2275",
  storageBucket: "login-b2275.appspot.com",
  messagingSenderId: "221790748511",
  appId: "1:221790748511:web:d25c319dc2b7f5921b00ea"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
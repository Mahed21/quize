import { initializeApp } from "firebase/app";
const initializeAuthentication = () => {
  const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_messagingSenderId,
    apiKey: "AIzaSyCO7W8X-sHYXgUD8pJDq944r-GTVK0Hm64",
    authDomain: "medicare-21a29.firebaseapp.com",
    projectId: "medicare-21a29",
    storageBucket: "medicare-21a29.appspot.com",
    messagingSenderId: "777739868936",
    appId: "1:777739868936:web:792cd498a1878558adeabd",
  };
  const app = initializeApp(firebaseConfig);
};

export default initializeAuthentication;


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBC5PLX6XcXrfKcG_BS-tg5Z79FUkixnLA",
  authDomain: "la-tienda-139bf.firebaseapp.com",
  projectId: "la-tienda-139bf",
  storageBucket: "la-tienda-139bf.appspot.com",
  messagingSenderId: "412007356317",
  appId: "1:412007356317:web:b23a8c3e329edda09f0174"
}


const app = initializeApp(firebaseConfig);

export const initFirebase = ()  => app
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  getDatabase,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYwmUu00v5zSjAIh6HJojHiZdIg01QI1g",
  authDomain: "animestoreproject.firebaseapp.com",
  databaseURL: "https://animestoreproject-default-rtdb.firebaseio.com",
  projectId: "animestoreproject",
  storageBucket: "animestoreproject.appspot.com",
  messagingSenderId: "892481129620",
  appId: "1:892481129620:web:72ef605a2506174056f881",
  measurementId: "G-MRLNVHDWQ2",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

const colRef = collection(db, "products");
async function getData() {
  const querySnap = await getDocs(colRef);
  var product = [];
  querySnap.forEach((pr) => {
    console.log(pr.data());
  });
}

getData();

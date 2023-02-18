let initializeApp = require("firebase/app");

let getAnalytics = require("firebase/analytics");

let firestore = require("firebase/firestore");
let onSnapshot = require("firebase/firestore");
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

const app = initializeApp.initializeApp(firebaseConfig);

const db = firestore.getFirestore();

const colRef = firestore.collection(db, "products");

let documents = [];
async function getData() {
  const querySnap = await firestore.getDocs(colRef);
  var product = [];
  querySnap.forEach((pr) => {
    data.push(pr.data());
  });
}
let data = [];
async function dell() {
  data = [];
  const q = firestore.query(firestore.collection(db, "products"));
  const s = onSnapshot.onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push([doc.data(), doc.id]);
    });
  });
}

async function setData() {
  const queryadd = await firestore.setDocs(colRef);
}

const express = require("express");

const ex = express();

dell().then(() => {
  function tryH() {
    ex.get("/store", (req, res) => {
      console.log(data);
      res.json(data);
    });
    ex.listen(5000, () => {});
  }
  tryH();
});

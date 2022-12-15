// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsbikEn0nPI_UUIOxCGIZ8B5ODrEznZe4",
  authDomain: "vudqja2-65aa6.firebaseapp.com",
  projectId: "vudqja2-65aa6",
  storageBucket: "vudqja2-65aa6.appspot.com",
  messagingSenderId: "526157161064",
  appId: "1:526157161064:web:1f2bd1dc253570fd8bd1dd",
  measurementId: "G-QKSZ7NVEH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//firebase-----------------------------------------------------------------------------------------

//dom
const logobox = document.querySelector('#logobox');
const saybox = document.querySelector('#say');

//events
logobox.addEventListener('click', () => {
  logobox.classList.toggle('active');
})
saybox.addEventListener('click', () => {
  saybox.classList.remove('say')
})

//function
/**say message html*/
function say(message){
  saybox.classList.add('say');
  say.innerHTML = message;
}

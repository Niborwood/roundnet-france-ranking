// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// FIREBASE AUTH IMPORTS
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
} from 'firebase/auth';

// FIREBASE FIRESTORE DB IMPORTS
import {
  getFirestore,
  setDoc,
  doc,
  getDoc,
} from 'firebase/firestore';

// import { getAnalytics } from 'firebase/analytics';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB7iztvOGOxJNIjjVPiK-OiB4YM3uxxH44',
  authDomain: 'roundnet-france-ranking.firebaseapp.com',
  projectId: 'roundnet-france-ranking',
  storageBucket: 'roundnet-france-ranking.appspot.com',
  messagingSenderId: '923127357906',
  appId: '1:923127357906:web:9be96b1e0bef66bd7b680b',
  // measurementId: 'G-R5G890WRM4',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

// Add methods to the Firebase SDK
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    // Use the popup to sign in the user
    const { user } = await signInWithPopup(auth, googleProvider);

    // Check if user already exists in the database
    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    // If user does not exist, create a new user
    if (!userSnap.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
        createdAt: new Date(),
        status: 'pending',
        role: 'admin',
      });
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
  }
};
const signInLocal = async (email, password) => {
  try {
    signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err.code);
    alert(err.code);
  }
};
const registerLocal = async (name, email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      name,
      password,
      createdAt: new Date(),
      status: 'pending',
      role: 'admin',
    });
  } catch (err) {
    console.error(err);
    alert(err.code);
  }
};
const sendPasswordReset = async (email) => {
  try {
    sendPasswordResetEmail(email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const userLogout = () => {
  auth.signOut();
};
export {
  auth,
  db,
  signInWithGoogle,
  signInLocal,
  registerLocal,
  sendPasswordReset,
  signOut,
};

// const analytics = getAnalytics(app);

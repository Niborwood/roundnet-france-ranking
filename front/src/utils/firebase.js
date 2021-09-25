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

// IMPORT ERROR TEXTS
import errorTexts from './errorTexts';

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

// Try and sign in the user
const signInLocal = async (setErrors, errors, email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    // Handle Errors here
    switch (err.code) {
      case 'auth/invalid-email':
        setErrors({
          ...errors,
          global: errorTexts.failedSignIn,
        });
        break;

      case 'auth/user-not-found':
        setErrors({
          ...errors,
          global: errorTexts.failedSignIn,
        });
        break;

      case 'auth/wrong-password':
        setErrors({
          ...errors,
          global: errorTexts.failedSignIn,
        });
        break;

      default:
        setErrors({
          ...errors,
          global: 'Une erreur inconnue est survenue.',
        });
        break;
    }
  }
};

// Try and register the user
const registerLocal = async (setErrors, errors, email, password, name, club) => {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', user.uid), {
      uid: user.uid,
      email: user.email,
      name,
      club,
      createdAt: new Date(),
      status: 'pending',
      role: 'admin',
    });
  } catch (err) {
    switch (err.code) {
      case 'auth/email-already-in-use':
        setErrors({
          ...errors,
          email: 'Cette adresse email est déjà utilisée.',
        });
        break;

      case 'auth/invalid-email':
        setErrors({
          ...errors,
          email: 'Cette adresse email est invalide.',
        });
        break;

      case 'auth/weak-password':
        setErrors({
          ...errors,
          password: 'Le mot de passe doit faire plus de 6 charactères.',
        });
        break;

      default:
        setErrors({
          ...errors,
          email: 'Une erreur est survenue. Veuillez essayer avec un autre email.',
        });
    }
  }
};
const sendPasswordReset = async (email) => {
  try {
    sendPasswordResetEmail(auth, email);
    alert('Password reset link sent!');
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const userLogout = () => {
  signOut();
};
export {
  auth,
  db,
  signInWithGoogle,
  signInLocal,
  registerLocal,
  sendPasswordReset,
  userLogout,
};

// const analytics = getAnalytics(app);

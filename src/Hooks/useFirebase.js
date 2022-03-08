/* eslint-disable prettier/prettier */
import firebaseInit from '../Authentication/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {useEffect, useState} from 'react';

firebaseInit();
const UseFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [regSuccess, setRegSuccess] = useState(false);
  const [sendReset, setSendReset] = useState(false);
  const [isAdmin, setisAdmin] = useState(false);
  //auth.....
  const auth = getAuth();

  const createUserWithEmail = (
    email,
    password,
    name,
    number,
    role,
    location,
    address,
  ) => {
    //set user information for update user information to database
    const userInfo = {
      name: name,
      email: email,
      userName: name,
      number: number,
      location: location,
      address: address,
      status: 'pending',
      role: role,
    };
    // update user info into database
    fetch('https://www.alijahan.xyz/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        if (user.user) {
          setRegSuccess(true);

          //update user profile
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch(error => {
              // An error occurred
              // ...
            });
          setTimeout(window.location.assign('/login'), 6000); //
        }
      })
      .catch(error => setError(error.message.split('Firebase')[1]));
  };
  const signInWithEmail = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        if (user.user.email) {
          setUser(user.user);
        }
      })
      .catch(error => setError(error.message.split('Firebase')[1]));
  };
  //passwrod reset
  const passwordReset = email => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSendReset(true);
      })
      .catch(error => setError(error.message.split('Firebase')[1]));
  };
  //user logOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        // An error happened.
      });
  };
  // on auth state change
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);
  //for admin validate
  useEffect(() => {
    const url = `https://www.alijahan.xyz/singleuser?email=${user.email}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data?.role === 'admin') {
          setisAdmin(true);
        } else {
          // setisAdmin(false)
        }
      });
  }, [user]);

  return {
    signInWithEmail,
    createUserWithEmail,
    passwordReset,
    user,
    error,
    regSuccess,
    logOut,
    isAdmin,
    sendReset,
  };
};

export default UseFirebase;

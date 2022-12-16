import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { COUNTER_CONTEXT } from "../../App";
import initializeAuthentication from "../Firebase/Firebase.initial";

initializeAuthentication();
const UseFirebase = () => {
  const { user, setUser } = useContext(COUNTER_CONTEXT);
  const [error, setError] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  //google signIn
  // const googleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // The signed-in user info.
  //       setUser(result.user);

  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // };

  //email password sign in
  const emailPassSignIn = (email, pass, navigate) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setUser(result.user);
        //console.log(email, pass);

        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  // email password login
  const emailPassLogIn = (email, password, navigate) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        //console.log(user);
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
        alert(error.message);
      });
  };

  //logout;
  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return {
    //googleSignIn,
    user,
    Logout,
    emailPassSignIn,
    emailPassLogIn,
  };
};
export default UseFirebase;

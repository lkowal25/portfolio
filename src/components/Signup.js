import React, { useEffect } from 'react';

import { auth } from '../utils/firebase';
import {
  EmailAuthProvider,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  PhoneAuthProvider,
} from 'firebase/auth';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';

export default function Signup(props) {
  const uiConfig = {
    signInSuccessUrl: '/landing',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      GoogleAuthProvider.PROVIDER_ID,
      FacebookAuthProvider.PROVIDER_ID,
      TwitterAuthProvider.PROVIDER_ID,
      GithubAuthProvider.PROVIDER_ID,
      EmailAuthProvider.PROVIDER_ID,
      PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    //where the terms of service are
    tosUrl: 'www.google.com',
    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
      window.location.assign('www.google.com');
    },
  };

  const ui = new firebaseui.auth.AuthUI(auth);

  useEffect(() => {
    ui.start('#firebaseui-auth-container', uiConfig);
  }, []);

  return (
    <div id="firebaseui-auth-container">
      <div>
        <h1> This is the Signup Page</h1>
      </div>
    </div>
  );
}

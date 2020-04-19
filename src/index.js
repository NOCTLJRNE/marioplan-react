import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider, useSelector } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore
} from "redux-firestore";
import firebase from "firebase/app";
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded
} from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
// check https://react-redux-firebase.com/docs/v3-migration-guide.html
const store = createStore(
  rootReducer,
  compose(
    //compose multiple store enhancers
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })), // check https://www.npmjs.com/package/redux-thunk
    reduxFirestore(firebase, fbConfig)
  )
);

const rrfConfig = {
  // profile will be available under firebase.profile
  userProfile: "users",
  useFirestoreForProfile: true,
  attachAuthIsReady: true
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div>splash screen...</div>;
  return children;
}

// authIsReady(store, "firebase").then(() => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <ReactReduxFirebaseProvider {...rrfProps}>
//         <App />
//       </ReactReduxFirebaseProvider>
//     </Provider>,
//     document.getElementById("root")
//   );
//   registerServiceWorker();
// });
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

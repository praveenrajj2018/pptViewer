import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './routers/App';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/Course/AddCourse';
import { Provider } from 'react-redux';
// import { PersistGate} from 'redux-persist/integration/react';
// import { persistStore } from 'redux-persist';

const root = ReactDOM.createRoot(document.getElementById('root'));
//let persistor=persistStore(store);
root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <App />

    {/* </PersistGate> */}
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import store from './redux/store';
import { Provider } from 'react-redux';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Provider store={store}>
<App/>
</Provider>

</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import { createRoot } from 'react-dom/client';
// import App from './App';
// import { BrowserRouter as Router } from 'react-router-dom';

// const rootElement = document.getElementById('root');
// const root = createRoot(rootElement);

// // 👇️ wrap App in Router

// root.render(
//     <Router>
//         <App />
//     </Router>
// );


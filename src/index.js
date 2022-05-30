import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/store/rootReducers';
const store = createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = { store }>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path="/*" element={<App />} />
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
</React.StrictMode>
);



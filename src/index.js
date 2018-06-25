import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Multilanguage feature
import { I18nextProvider } from "react-i18next";
import i18n from "./components/i18n";

//Redux stuff
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import './index.css';
import App from './components/App';

const store = createStore(rootReducer);

render((
        
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>        
        </I18nextProvider>        
        ), document.getElementById('root'));

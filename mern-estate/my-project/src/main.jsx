import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // <--- THIS LINE IS THE BRIDGE
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
console.log(store.getState());
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
) 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import todoStore from './REDUX/todoStore.js'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<Provider store={todoStore}>

      <App />
      </Provider>  

  
</BrowserRouter>
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-7fsldjrgw16yyfvp.us.auth0.com"
    clientId="JEwgsJiw9TUBxHOS62m7m7N4S0wYQwr9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Auth0Provider>,
)

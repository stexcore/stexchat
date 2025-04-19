import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import keyPairUtils from './utils/key-pair.utils.ts'
import httpUtil from './utils/http.util.ts'

// Request to example
keyPairUtils.getKeyPair()
  .then((keyPair) => {
    console.log("keyPair:", keyPair);

    httpUtil.fetch("/info", {
      method: "GET",
      headers: {

      },
    })
  })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

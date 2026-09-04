import { createRoot } from 'react-dom/client'
import { ConfigProvider } from './context/ConfigContext'
import { loadPublicConfig } from './lib/configIO'
import App from './App.jsx'
import './index.css'

const config = loadPublicConfig()

createRoot(document.getElementById('root')).render(
  <ConfigProvider config={config}>
    <App />
  </ConfigProvider>
)

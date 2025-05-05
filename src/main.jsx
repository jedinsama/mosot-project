import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init("DXHQ1zdb64uoWhWVl") // Replace with your actual public key

// Disable React.StrictMode to avoid double rendering issues with animations
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

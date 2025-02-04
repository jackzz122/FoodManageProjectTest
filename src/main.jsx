import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
const start = performance.now();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Khi ứng dụng đã sẵn sàng
window.addEventListener('load', () => {
  const end = performance.now();
  console.log(`Cold start duration: ${end - start} ms`);
});
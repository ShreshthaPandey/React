import React, { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google'
)

createRoot(document.getElementById('root'))
.render(
    
   
    reactElement
    
 )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  App, Car, Myobj, Expattributes, StyleAtrribute, 
  Fruit, Components, ReactProps, MultipleProps, StudentCard
} from './App'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App dev='developer'/>
    <Car info='My car is Black BMW M5' />
    < Myobj/>
    < Expattributes/>
    < StyleAtrribute />
    < Fruit />
    < Components />
    < ReactProps user='Zakaria' />
    < MultipleProps color='Black' brand='Buggati' model='Chiron'/>
    < StudentCard name= 'Zakaria Mohamud Omar' department='IT' age={20} />
    < StudentCard name= 'Ali Farah Bare' department='CS' age={23} />
    < StudentCard name= 'Hassan Jamac Farax' department='Sharia' age={24} />
  
  </StrictMode> ,

 
)

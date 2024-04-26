import './index.css'
import bgImg from './assets/images/background.jpg' 
    
export default function App() {
  return(
<>
    <div className='relative bg-cover bg-center h-screen'>
      <img src={bgImg} className='absolute inset-0 w-full h-full object-cover'/>
    </div>
</>
    
  )
}



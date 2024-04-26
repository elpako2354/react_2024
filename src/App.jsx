import './index.css'
import bgImg from './assets/images/background.jpg' 
    
export default function App() {
  return(
<>
    <div className='relative bg-cover bg-center h-screen'>
      <img src={bgImg} className='absolute inset-0 w-full h-full object-cover'/>
    </div>
  <div className='absolute inset-0 flex justify-content items-center'>
    <h1 className='text-center text-4xl text-white font-bold'>Webundle</h1>
    <p className='mt-2 text-white'>More content here</p>
  </div>
</>
    
  )
}



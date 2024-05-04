import './index.css'
import bgImg from './assets/images/background.jpg' 
import Navbar from './components/Navbar/Navbar'


export default function App() {
  return(
<>
    <div className='relative bg-cover bg-center h-screen bg-black'>
      <img src={bgImg} className='absolute inset-0 w-full h-full object-cover bg-black'/>
    </div>
   <Navbar />
</>
  )
}



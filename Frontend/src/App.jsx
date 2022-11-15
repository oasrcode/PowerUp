import { Header } from './components/Header'
import { Home } from './Pages/Home'
import { Signin } from './Pages/Signin'
import { Signup } from './Pages/Signup'

function App() {
 

  return (
    <div className='bg-gradient-to-tr from-gray-900 via-slate-900 to-[#4b0c24] font-candice'>
    <Header/>
    <Home/>
   
    <Signin/>
    <Signup/>
    </div>
  )
}

export default App

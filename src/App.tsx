import './App.css'
import Header from './components/header'
import Perfil from './components/perfil'
import Proyects from './components/proyects'
import Tecnologies from './components/tecnologies'


function App() {

  return (
    <>
      <Header />
      <div className='flex flex-row'>
        <div className='basis-1/3'>
          <Perfil/>
        </div>
        <div className='basis-1/3'>
          <Proyects/>
        </div>
        <div className='basis-1/3'>
        <Tecnologies/>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default App

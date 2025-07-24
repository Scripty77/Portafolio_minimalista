import './App.css'
import Header from './components/header'
import Perfil from './components/perfil'
import Proyects from './components/proyects'
import Tecnologies from './components/tecnologies'


function App() {

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row w-full">
        <div className="md:basis-1/3 w-full">
          <Perfil/>
        </div>
        <div className="md:basis-1/3 w-full">
          <Proyects/>
        </div>
        <div className="md:basis-1/3 w-full">
          <Tecnologies/>
        </div>
      </div>
      <div>

      </div>
    </>
  )
}

export default App

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Login from './pages/Login/Login'
import { appConfig } from './config/appConfig'

function App() {

  return (
    <>


    <div className='page'>

    <header>
      <Header title={appConfig.name}/>
    </header>

    <main className='main'>
    <Login />
    </main>

    <footer className='footer'>
      <Footer footer={appConfig.version} title={appConfig.name} />
    </footer>

    </div>

    </>
  )
}

export default App

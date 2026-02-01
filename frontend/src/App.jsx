import Header from './components/Header'
import Footer from './components/Footer'
import { appConfig } from './config/appConfig'

function App() {

  return (
    <>


    <header>
      <Header title={appConfig.name}/>
    </header>

    <main>
      <h2>Dashboard coming soon...</h2>
    </main>

    <footer>
      <Footer footer={appConfig.version} title={appConfig.name} />
    </footer>

    </>
  )
}

export default App

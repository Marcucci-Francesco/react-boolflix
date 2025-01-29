import 'bootstrap/dist/css/bootstrap.css';
import { GlobalProvider } from './context/GlobalContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Main />
      <Footer />
    </GlobalProvider>
  )
}

export default App

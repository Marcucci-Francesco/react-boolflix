import 'bootstrap/dist/css/bootstrap.css';
import { GlobalProvider } from './context/GlobalContext';
import Header from './components/Header';
import Main from './components/Main';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Main />
    </GlobalProvider>
  )
}

export default App

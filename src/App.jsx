import './App.css';
import Header from './components/Header/Header';

import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App;

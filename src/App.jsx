import './App.css';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;

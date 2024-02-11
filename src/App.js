import { BrowserRouter, Route, Routes } from 'react-router-dom';
import cute_pusheen from './cute_pusheen.avif'
import { Link } from 'react-router-dom'
import InitialPage from './Pages/InitialPage/InitialPage';
import SecondPage from './Pages/SecondPage/SecondPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<InitialPage/>}/>
      <Route path='/love' element={<SecondPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

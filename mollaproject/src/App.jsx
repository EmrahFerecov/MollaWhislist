import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Details from './components/detailsPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <Header/>
     <BrowserRouter>
     <Routes>
      <Route  path="/" element={<Main/>} />
      <Route  path="/details/:id" element={<Details/>} />
      </Routes>
     </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;

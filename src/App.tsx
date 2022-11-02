import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header';
import ProductList from './pages/products/list';
import ProductDetail from './pages/products/detail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ProductList />} /> 
          <Route path="/:productId" element={<ProductDetail />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

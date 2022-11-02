import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/"></Route>
          <Route path="/:productId">Product details</Route>
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

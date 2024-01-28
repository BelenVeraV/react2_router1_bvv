import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './views/HomePage';
import ContactPage from './views/ContactPage';
import NotFound from './views/NotFound';
import Navigation from './components/Navigation';

function App() {


  return (
    <>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/Contacto"
            element={<ContactPage />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </>
  )
}

export default App

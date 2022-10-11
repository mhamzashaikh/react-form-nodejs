import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './components/Form.css';
import Form from './components/Form';
import FormData from './components/FormData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (


      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />}></Route>
          <Route path="/list" element={<FormData />} />
          <Route path='*' element = {<h1>404 error</h1>} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Create from './Pages/Create';
import Subs from './Pages/Subs';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/create" element={<Create />} />
        <Route path="/subs" element={<Subs />} />
      </Routes>
    </>
  );
}

export default App;

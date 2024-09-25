import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Subs from './Pages/Subs';
import CreateGroup from './Pages/CreateGroup';
import CreateSub from './Pages/CreateSub';

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/create-group" element={<CreateGroup />} />
        <Route path="/create-sub" element={<CreateSub />} />
        <Route path="/subs" element={<Subs />} />
      </Routes>
    </>
  );
}

export default App;

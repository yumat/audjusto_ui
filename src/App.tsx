import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import New from './pages/New';
import Group from './pages/Group';

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/group/:id" element={<Group />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
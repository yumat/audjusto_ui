import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import New from './pages/New';
import Group from './pages/Group';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_group" element={<New />} />
        <Route path="/group/:id" element={<Group />} />
        <Route path="/not_found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import New from './pages/New';
import Group from './pages/Group';
import AddPay from './pages/AddPay';
// import ModifyPay from './pages/ModifyPay';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_group" element={<New />} />
        <Route path="/group/:id" element={<Group />} />
        <Route path="/add_pay/:id" element={<AddPay />} />
        {/* <Route path="/modify_pay/:id/:day" element={<ModifyPay />} /> */}
        <Route path="/group_detail/:id" element={<Detail />} />
        <Route path="/not_found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
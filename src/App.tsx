import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import New from './pages/New';
import Group from './pages/Group';
import AddPay from './pages/AddPay';
// import ModifyPay from './pages/ModifyPay';
import Detail from './pages/Detail';
import NewSchedule from './pages/NewSchedule';
import ScheduleGroup from './pages/ScheduleGroup';
import AddMember from './pages/AddMember';
import ModifyAttendance from './pages/ModifyAtendance';
import HowToUse from "./pages/HowToUse"
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
        <Route path="/new_schedule" element={<NewSchedule />} />
        <Route path="/schedule/:id" element={<ScheduleGroup />} />
        <Route path="/add_member/:id" element={<AddMember />} />
        <Route path="/modify_attendance/:id/:member_id" element={<ModifyAttendance />} />
        <Route path="/how_to_use" element={<HowToUse />} />
        <Route path="/not_found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import New from './pages/New';
import Group from './pages/Group';
import EditGroupName from './pages/EditGroupName'
import AddPay from './pages/AddPay';
// import ModifyPay from './pages/ModifyPay';
import Detail from './pages/Detail';
import NewSchedule from './pages/NewSchedule';
import ScheduleGroup from './pages/ScheduleGroup';
import AddVote from './pages/AddVote';
import AddMember from './pages/AddMember';
import AddSchedule from './pages/AddSchedule';
import ModifyAttendance from './pages/ModifyAtendance';
import ModifyMember from './pages/ModifyMember';
import HowToUse from "./pages/HowToUse"
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import NotFound from './pages/NotFound';

const App: React.FC = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_group" element={<New />} />
        <Route path="/group/:id" element={<Group />} />
        <Route path="/edit_groupname/:id" element={<EditGroupName />} />
        <Route path="/add_pay/:id" element={<AddPay />} />
        {/* <Route path="/modify_pay/:id/:day" element={<ModifyPay />} /> */}
        <Route path="/group_detail/:id" element={<Detail />} />
        <Route path="/new_schedule" element={<NewSchedule />} />
        <Route path="/schedule/:id" element={<ScheduleGroup />} />
        <Route path="/add_schedule/:id" element={<AddSchedule />} />
        <Route path="/add_vote/:id" element={<AddVote />} />
        <Route path="/add_member/:id" element={<AddMember />} />
        <Route path="/modify_attendance/:id/:member_id" element={<ModifyAttendance />} />
        <Route path="/modify_member/:id/:member_id" element={<ModifyMember />} />
        <Route path="/how_to_use" element={<HowToUse />} />
        <Route path="/privacy_policy" element={<PrivacyPolicy />} />
        <Route path="/terms_of_use" element={<TermsOfUse />} />
        <Route path="/not_found" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
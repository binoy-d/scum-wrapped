import './App.css';
import Sidebar from './components/Sidebar';
import MainPage from './pages/main/MainPage';
import LandingPage from './pages/landing/LandingPage';
import ChannelPage from './pages/channel/ChannelPage';
import MemberPage from './pages/member/MemberPage';
import ChannelStatsPage from './pages/channelstats/ChannelStatsPage';
import MemberStatsPage from './pages/memberstats/MemberStatsPage';
import { Routes, Route, Outlet} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout/>}>
        <Route index element={<LandingPage />} />
        <Route path="/home" element={<MainPage  />}></Route>
        <Route path="/channels/:id" element={<ChannelPage  />} />
        <Route path="/members/:id" element={<MemberPage  />} />
        <Route path="channels" element={<ChannelStatsPage  />} />
        <Route path="members" element={<MemberStatsPage  />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}


function PageLayout(props) {
  return (
    <div className="page-root">
      <Sidebar />
      <Outlet {...props}/>
    </div>
  );
}


function PageNotFound() {
  return (
    <h1>Page Not Found!! Fuck off.</h1>
  );
}
export default App;

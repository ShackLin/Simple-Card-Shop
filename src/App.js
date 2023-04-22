import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import TaiwanPage from "./Pages/TaiwanPage";
import GermanyPage from "./Pages/GermanyPage";
import Cart from "./Pages/Cart";
import TotalContextProvider from "./ContextComponent/TotalContext";
import { AuthProvider } from "./ContextComponent/MemberContext";
import Default from "./Layout/Default";
import SignupPage from "./Pages/SignupPage";
import LoginPage from './Pages/LoginPage';
import AccountPage from "./Pages/AccountPage";
import ProtectPage from './Pages/ProtectPage';
import AustriaPage from './Pages/AustriaPage';
import JapanPage from './Pages/JapanPage';
import MorePage from "./Pages/MorePage";


function App() {
  return (
    <TotalContextProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Default />}>
              <Route path="" element={<Home />} />
              <Route path="/tw" element={<TaiwanPage />} />
              <Route path="/de" element={<GermanyPage />} />
              <Route path="/aus" element={<AustriaPage />} />
              <Route path="/jp" element={<JapanPage />} />
              <Route path="/more" element={< MorePage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path='/account' element={
                <ProtectPage >
                  <AccountPage />
                </ProtectPage >} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TotalContextProvider>
  );
}

export default App;

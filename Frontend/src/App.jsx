import { Home } from "./Pages/Home";
import { Signup } from "./Pages/Signup";
import { Signin } from "./Pages/Signin";
import { Routes, Route } from "react-router-dom";

import { Lifts } from "./Pages/Lifts";
import { Profile } from "./Pages/Profile";
import { BodyFat } from "./Pages/BodyFat";
import { DailyCals } from "./Pages/DailyCals";
import { Protected } from "./Context/Protected";
import { Landing } from "./Pages/Landing";
import { DashBoard } from "./Pages/Dashboard";
import { RedirectToDashboard } from "./Context/RedirectToDashboard";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <RedirectToDashboard>
              <Home />
            </RedirectToDashboard>
          }
        />
        <Route
          path="/signin"
          element={
            <RedirectToDashboard>
              <Signin />
            </RedirectToDashboard>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashBoard />
            </Protected>
          }
        >
          <Route index element={<Landing />} />
          <Route path="lifts" element={<Lifts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="bodyfat" element={<BodyFat />} />
          <Route path="dailycals" element={<DailyCals />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

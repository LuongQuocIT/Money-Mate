import { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AccountPage from "./pages/account-page";
import SignIn from "./pages/auth/sign-in";
import SignUp from "./pages/auth/sign-up";
import Transactions from "./pages/transactions";
import useStore from "./store";
import Dashboard from "./pages/dashboard";
import Settings from "./pages/settings";
import { setAuthToken } from "./libs/apiCall";
import { Toaster } from "react-hot-toast";
const RootLayout = () => {
  const user = useStore((state) => state);
  setAuthToken(user?.token || "");
  console.log(user);
  return !user ? (
    <Navigate to="/sign-in" replace={true} />
  ) : (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
function App() {
  return (
    <>
      <main>
        <div className="w-full">
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Navigate to="/overview" />} />
              <Route path="/overview" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/account" element={<AccountPage />} />
            </Route>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
        <Toaster richColors position="top-center" />
      </main>
    </>
  );
}

export default App;

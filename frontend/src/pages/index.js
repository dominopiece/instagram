import { Route, Routes } from "react-router-dom";
import AppLayout from "components/AppLayout";
import Home from "./Home";
import About from "./About";
import AccountsRoutes from "./accounts";
import Login from "./accounts/Login";
import Signup from "./accounts/Signup";

function Root() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accounts" element={<AccountsRoutes />} />
        <Route path="/accounts/login" element={<Login />} />
        <Route path="/accounts/signup" element={<Signup />} />
      </Routes>
    </AppLayout>
  );
}

export default Root;
import { Route, Routes } from "react-router-dom";
import AppLayout from "components/AppLayout";
import Home from "./Home";
import About from "./About";
import AccountsRoutes from "./accounts";

function Root() {
  return (
    <AppLayout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="/accounts" element={<AccountsRoutes />} />
      </Routes>
    </AppLayout>
  );
}

export default Root;
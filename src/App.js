import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Banana } from "@rize-labs/banana-wallet-sdk/dist/BananaProvider";
import { Chains } from "@rize-labs/banana-wallet-sdk/dist/Constants";
import { useEffect, useState } from "react";
import SigninOrg from "./components/Signup/SigninOrg";
import SigninEmp from "./components/Signup/SigninEmp";
import Landing from "./components/Navbar/Landing";
import Dashboard from "./components/Dashboard/Dashboard";
import Employees from "./components/Employees/Employees";

function App() {
  useEffect(() => {
    getBananaInstance();
  }, []);

  const [bananaSdkInstance, setBananSdkInstance] = useState(null);

  const getBananaInstance = () => {
    const jsonRpcMumbaiUrl =
      "https://polygon-mumbai.g.alchemy.com/v2/cNkdRWeB8oylSQJSA2V3Xev2PYh5YGr4";
    const bananaInstance = new Banana(Chains.mumbai, jsonRpcMumbaiUrl);
    setBananSdkInstance(bananaInstance);
  };

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple via-purple-900 to-black">
      <Routes>
        <Route
          path="/"
          element={<Landing bananaSdkInstance={bananaSdkInstance} />}
        />
        <Route
          path="/SigninOrg"
          element={<SigninOrg bananaSdkInstance={bananaSdkInstance} />}
        />
        <Route
          path="/SigninEmp"
          element={<SigninEmp bananaSdkInstance={bananaSdkInstance} />}
        />
        <Route
          path="/Dashboard"
          element={<Dashboard bananaSdkInstance={bananaSdkInstance} />}
        />
        <Route
          path="/Employees"
          element={<Employees bananaSdkInstance={bananaSdkInstance} />}
        />
      </Routes>
    </div>
  );
}

export default App;

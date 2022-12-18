import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Logout from "../Components/Logout/Logout";
import CreateClaim from "../Page/CreateClaim/CreateClaim";
import DashLoading from "../Fallback/DashLOading/DashLoading";
import ClaimResultsFallback from "../Fallback/ClaimResultFallback/ClaimResultFallback";
// import Loading from "../Fallback/Loading/Loading";

const ClaimResults = lazy(() =>
  import("../Components/ClaimResult/ClaimResult")
);
const Dashboard = lazy(() => import("../Components/Dashboard/Dashboard"));

const ProtectedRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/create-claim" exact element={<CreateClaim />} />
      </Routes>

      <Suspense fallback={<ClaimResultsFallback />}>
        <Routes>
          <Route path="/claim-results/:id" exact element={<ClaimResults />} />
        </Routes>
      </Suspense>
      <Suspense fallback={<DashLoading />}>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default ProtectedRoute;

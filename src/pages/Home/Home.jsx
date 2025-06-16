import React, { Suspense } from "react";
import Banner from "./Shared/Banner";
import Courses from "./Shared/Courses";
import LoadingState from "../../LoadingState/LoadingState";

const Home = () => {
  const coursePromise = fetch("http://localhost:3000/courses?latest=true").then((res) =>
    res.json()
  );
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12 mx-auto my-8">
        <Suspense fallback={<LoadingState></LoadingState>}>
          <Courses coursePromise={coursePromise}></Courses>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;

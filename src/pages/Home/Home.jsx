import React, { Suspense } from "react";
import Banner from "./Shared/Banner";
import Courses from "./Shared/Courses";
import LoadingState from "../../LoadingState/LoadingState";
import { Helmet } from "react-helmet-async";
import Faq from "./Shared/Faq";
import Stats from "./Shared/Stats";
import PopularCourses from "./Shared/PopularCourses";

const Home = () => {
  const coursePromise = fetch("https://assignment-11-server-tau-eight.vercel.app/courses?latest=true").then(
    (res) => res.json()
  );
  return (
    <div>
      <Helmet>
        <title>PHA Course</title>
      </Helmet>
      <Banner></Banner>
      <div className="w-11/12 mx-auto my-8">
        <Suspense fallback={<LoadingState></LoadingState>}>
          <Courses coursePromise={coursePromise}></Courses>
        </Suspense>
      </div>
      <div className="w-11/12 mx-auto my-8">
        <PopularCourses></PopularCourses>
      </div>
      <div className="w-11/12 mx-auto my-8">
        <Stats></Stats>
      </div>
      <div className="w-11/12 mx-auto my-8">
        <Faq></Faq>
      </div>
    </div>
  );
};

export default Home;

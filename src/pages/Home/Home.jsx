import React, { Suspense } from "react";
import Banner from "./Shared/Banner";
import Courses from "./Shared/Courses";
import LoadingState from "../../LoadingState/LoadingState";
import { Helmet } from "react-helmet-async";
import Faq from "./Shared/Faq";
import Stats from "./Shared/Stats";
import PopularCourses from "./Shared/PopularCourses";
import Newsletter from "./Shared/NewsLetter";

const Home = () => {
  const coursePromise = fetch(
    "https://assignment-11-server-tau-eight.vercel.app/courses?latest=true"
  ).then((res) => res.json());
  return (
    <div>
      <Helmet>
        <title>PHA Course</title>
      </Helmet>
      <Banner></Banner>
      <div className="space-y-8 my-8">
        <div className="w-11/12 mx-auto">
          <Suspense fallback={<LoadingState></LoadingState>}>
            <Courses coursePromise={coursePromise}></Courses>
          </Suspense>
        </div>
        <div className="w-11/12 mx-auto">
          <PopularCourses></PopularCourses>
        </div>
        <div className="w-11/12 mx-auto">
          <Stats></Stats>
        </div>
        <div className="w-11/12 mx-auto">
          <Faq></Faq>
        </div>
      </div>
      <div>
        <Newsletter></Newsletter>
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import CourseCard from "../Home/Shared/CourseCard";
import { Helmet } from "react-helmet-async";
import LoadingState from "../../LoadingState/LoadingState";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showLatest, setShowLatest] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const url = showLatest
          ? `https://assignment-11-server-tau-eight.vercel.app/courses?latest=true&page=${page}`
          : `https://assignment-11-server-tau-eight.vercel.app/courses?page=${page}`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch courses");
        }

        setCourses(data.courses);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [page, showLatest]);

  const toggleLatest = () => {
    setShowLatest(!showLatest);
    setPage(1); // Reset to first page when toggling
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="space-y-5 w-11/12 mx-auto my-8">
      <Helmet>
        <title>All Courses | PHA Course</title>
      </Helmet>

      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">
          {showLatest ? "Latest Courses" : "All Courses"} ({courses?.length})
        </h2>
        <button
          onClick={toggleLatest}
          className="btn bg-[#023A62] hover:bg-[#022a4a] dark:bg-[#09A3D0] dark:hover:bg-[#0789b3] text-white"
        >
          {showLatest ? "Show All" : "Show Latest"}
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center my-12">
          <LoadingState></LoadingState>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses?.map((course) => (
              <CourseCard key={course?._id} course={course} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <div className="join flex gap-2">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="join-item btn bg-[#023A62] hover:bg-[#022a4a] dark:bg-[#09A3D0] dark:hover:bg-[#0789b3] text-white"
              >
                <FaArrowLeft />
              </button>
              {Array?.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`join-item btn ${
                      page === pageNum ? "bg-[#09A3D0] text-white" : ""
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="join-item btn bg-[#023A62] hover:bg-[#022a4a] dark:bg-[#09A3D0] dark:hover:bg-[#0789b3] text-white"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllCourses;

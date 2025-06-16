import React from "react";

const Faq = () => {
  return (
    <section className="bg-[#CEEDF6] rounded-xl">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 mb-8 dark:text-gray-600">
          In Our course students have many kinds of question is this course site is good or bad. So that's why have written some question with answer.
        </p>
        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              How to create an account?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
            Click the "Register" button in the top right corner and follow the registration process.
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Can login with google or github?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Yes you can. Just click on the Register or login button there you will find the google and github login button
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">
              Can I add course?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
              Yes you can just create an account or login to account then go to add course page there you will find a course form. You just have to fill up the form.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;

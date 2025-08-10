import React from "react";
import { Helmet } from "react-helmet-async";
import { FaShieldAlt, FaUserLock, FaDatabase, FaCookie } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen my-8">
      <Helmet>
        <title>Privacy Policy | PHA Course</title>
        <meta
          name="description"
          content="Our Privacy Policy explains how we collect, use, and protect your information."
        />
      </Helmet>

      <div className="w-11/12 mx-auto rounded-xl shadow-lg overflow-hidden p-5">
        {/* Header */}
        <div className="bg-[#023A62] dark:bg-[#09A3D0] text-center py-5 mb-5
        rounded-t-xl">
          <div className="flex justify-center mb-4">
            <FaShieldAlt className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-white/90">
            Last Updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0] flex items-center gap-2">
              <FaUserLock /> Introduction
            </h2>
            <p>
              At PHA Course, we are committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website or use our
              services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0] flex items-center gap-2">
              <FaDatabase /> Information We Collect
            </h2>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you register on the site, place an order, subscribe to
              our newsletter, or otherwise contact us. The types of personal
              information collected may include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Your name and contact information (email address, phone number)
              </li>
              <li>Demographic information (age, gender, location)</li>
              <li>Payment information for purchases</li>
              <li>Course preferences and progress</li>
              <li>Other information relevant to customer surveys and offers</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0] flex items-center gap-2">
              <FaCookie /> How We Use Cookies
            </h2>
            <p>
              We use cookies to enhance your experience on our site. Cookies are
              small files that ask permission to be placed on your computer's
              hard drive. Once you agree, the file is added and the cookie helps
              analyze web traffic or lets you know when you visit a particular
              site.
            </p>
            <p>
              We use traffic log cookies to identify which pages are being used.
              This helps us analyze data about web page traffic and improve our
              website to tailor it to customer needs. We only use this
              information for statistical analysis purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>Process your transactions and manage your orders</li>
              <li>Send you emails and other communications</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
              Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              maintain the safety of your personal information. All
              sensitive/credit information you supply is encrypted via Secure
              Socket Layer (SSL) technology.
            </p>
            <p>
              We follow generally accepted industry standards to protect the
              personal information submitted to us, both during transmission and
              once we receive it. However, no method of transmission over the
              Internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
              Changes to This Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date at the top of this Privacy
              Policy.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p>
              Email: parvez.alif.dev@gmail.com
              <br />
              Address: Gazipur, Dhaka, Bangladesh
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

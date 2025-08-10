import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBalanceScale,
  FaBook,
  FaExclamationTriangle,
  FaGavel,
  FaHandshake,
  FaUserEdit,
} from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="min-h-screen my-8">
      <Helmet>
        <title>Terms of Service | PHA Course</title>
        <meta
          name="description"
          content="Terms governing the use of PHA Course services and website"
        />
      </Helmet>

      <div className="w-11/12 mx-auto rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#023A62] dark:bg-[#09A3D0] p-6 sm:p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaBalanceScale className="text-white text-4xl" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Terms of Service
          </h1>
          <p className="mt-2 text-white/90">
            Effective Date: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0] flex items-center gap-2">
              <FaBook /> Introduction
            </h2>
            <p>
              Welcome to PHA Course. These Terms of Service ("Terms") govern
              your access to and use of our website, services, and applications
              (collectively, the "Service"). By accessing or using the Service,
              you agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0] flex items-center gap-2">
              <FaUserEdit /> Account Registration
            </h2>
            <p>
              To access certain features of the Service, you may be required to
              create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>
                Maintain the security of your password and accept all risks of
                unauthorized access
              </li>
              <li>
                Notify us immediately if you discover or suspect any security
                breaches
              </li>
              <li>
                Take responsibility for all activities that occur under your
                account
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0] flex items-center gap-2">
              <FaGavel /> Intellectual Property
            </h2>
            <p>
              All content included on the Service, such as text, graphics,
              logos, images, course materials, and software, is the property of
              PHA Course or its content suppliers and protected by copyright
              laws.
            </p>
            <p>
              You may not modify, publish, transmit, participate in the transfer
              or sale of, reproduce, create derivative works based on, or
              distribute any of the content without our express written
              permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0] flex items-center gap-2">
              <FaExclamationTriangle /> Prohibited Conduct
            </h2>
            <p>
              When using the Service, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the intellectual property rights of others</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Transmit viruses or other harmful computer code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>
                Interfere with or disrupt the integrity or performance of the
                Service
              </li>
              <li>Use the Service for any illegal or unauthorized purpose</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
              Payments and Refunds
            </h2>
            <p>
              All fees for courses and services are non-refundable except as
              required by law or as expressly stated in our Refund Policy. We
              reserve the right to change our fees at any time.
            </p>
            <p>
              You are responsible for providing complete and accurate billing
              information. Failure to do so may result in suspension or
              termination of your access to paid services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0] flex items-center gap-2">
              <FaHandshake /> Termination
            </h2>
            <p>
              We may terminate or suspend your account immediately, without
              prior notice or liability, for any reason whatsoever, including
              without limitation if you breach these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately
              cease. If you wish to terminate your account, you may simply
              discontinue using the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
              Limitation of Liability
            </h2>
            <p>
              In no event shall PHA Course, nor its directors, employees,
              partners, agents, suppliers, or affiliates, be liable for any
              indirect, incidental, special, consequential or punitive damages,
              including without limitation, loss of profits, data, use,
              goodwill, or other intangible losses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
              Changes to Terms
            </h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. We will provide notice of any changes by
              posting the new Terms on this page and updating the "Effective
              Date" at the top.
            </p>
            <p>
              Your continued use of the Service after any such changes
              constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#023A62] dark:text-[#09A3D0]">
              Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@phacourse.com
              <br />
              Address: 123 Legal Street, Dhaka, Bangladesh
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

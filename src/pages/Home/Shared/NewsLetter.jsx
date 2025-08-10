// Newsletter.jsx
import { useState } from "react";
import { toast } from "react-toastify";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      toast.success("You have successfully subscribed to our newsletter!");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="bg-[#0AA5D1] py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white">
          Stay Updated
        </h2>
        <p className="mt-3 text-white">
          Subscribe to our newsletter and never miss out on our latest news and updates.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mt-6 flex flex-col sm:flex-row items-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-[#023A62] text-white rounded-lg cursor-pointer"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

        <p className="mt-4 text-sm text-white">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "https://assignment-11-server-tau-eight.vercel.app/subscribe",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        toast.success("You have successfully subscribed to our newsletter!");
        setEmail("");
      } else if (response.status === 409) {
        toast.info("This email is already subscribed.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      
      if (error.response) {
        // Server responded with an error status code
        const { status, data } = error.response;
        
        if (status === 400) {
          toast.error(data.error || "Invalid email format");
        } else if (status === 409) {
          toast.info(data.error || "Email already subscribed");
        } else {
          toast.error(data.error || "Subscription failed");
        }
      } else if (error.request) {
        // Request was made but no response received
        toast.error("Network error. Please try again.");
      } else {
        // Something else happened
        toast.error("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-3 bg-[#023A62] text-white rounded-lg cursor-pointer ${
              loading ? "opacity-75" : "hover:bg-[#022a4a]"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : "Subscribe"}
          </button>
        </form>

        <p className="mt-4 text-sm text-white">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
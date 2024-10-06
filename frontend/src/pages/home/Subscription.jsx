import React from "react";

const Subscription = () => {
  return (
    <div className="bg-white py-16 rounded-t-md">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 mb-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-20">
          {/* left text */}
          <div className="md:w-1/2">
            <h3
              className="text-3xl font-bold tracking-tight text-secondary
                    sm:text-4xl"
            >
              Subscribe to our newsletter
            </h3>
            <p className="mt-4 text-lg leading-8">
              Get the benefits of subscribing to the newsletter.
            </p>
          </div>

          <div className="sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4">
            <label htmlFor="email-addresss" className="sr-only">
              Email Address
            </label>

            <input
              className="flex-auto rounded-md bg-primary px-3.5 py-4 text-white shadow-md
              sm:text-sm sm:leading-6 focus:outline-btnColor
            placeholder:text-[#1b2629]"
              type="email"
              name="email"
              autoComplete="email"
              required
              id=""
              placeholder="Enter your email"
            />

            <button
            type="submit"
              className=" rounded-md py-4 px-8 bg-btnColor text-white hover:bg-white hover:text-btnColor
              shadow-sm w-1/3 transition ease-in duration-200 text-center text-base font-semibold hover:border">
                Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <hr />
    </div>
  );
};

export default Subscription;

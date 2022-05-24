import React from "react";

const SetForm = () => {
  return (
    <div className="">
      {/* form design start */}
      <form
        action="/"
        className="w-full max-w-sm block mx-auto mt-16 border-2 border-blue-400 py-6 px-8 rounded-2xl"
      >
        <div className="md:items-center mb-6">
          <div className="md:w-2/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Email Address
            </label>
            <br />
          </div>
          <div className="md:w-3/3">
            <input
              required
              placeholder="Email Address"
              className="bg-transparent border-b-2 border-blue-600 bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="email"
            />
          </div>
        </div>
        <div className="md:items-center mb-6">
          <div className="md:w-2/3">
            <label
              className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
            <br />
          </div>
          <div className="md:w-3/3">
            <input
              required
              className="bg-transparent border-b-2 border-blue-600 bg-gray-200 appearance-none rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              placeholder="******************"
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3"></div>
          <label className="md: block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Send me your newsletter!</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
                Comfirm Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SetForm;
import React from "react";

const SearchInput = () => {
  return (
    <form className="flex items-center w-full mb-7 relative" action="/search">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-primary-purple dark:text-primary-purple"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        id="simple-search"
        name="q"
        className="bg-neutral-200 text-primary-purple-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:outline-1 focus:outline-double"
        placeholder="Search"
        required
      />
    </form>
  );
};

export default SearchInput;

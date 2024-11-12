import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-grow items-center justify-center bg-[var(--bg-color)]">
      <div className="rounded-lg p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="text-gray-600">
          Oops! The page you are looking for could not be found.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block rounded bg-[var(--brand-color-500)] px-4 py-2 font-semibold text-white transition-colors hover:bg-[var(--brand-color-600)]"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

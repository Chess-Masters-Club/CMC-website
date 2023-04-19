// react component for the arrow button that sends the user to the top of the page
// using tailwindcss for styling
// make it only visible when the user scrolls down
import React from "react";

export default function Arrow() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <button
        onClick={scrollToTop}
        className="bg-primary text-white p-2 rounded-full hover:scale-110 transition-all duration-200 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}

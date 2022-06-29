import React from "react";

export const Favorite = () => {
  return (
    <button onClick={() => console.log("Favorite")}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g
            fillRule="nonzero"
            stroke="red"
            strokeWidth="2"
            transform="translate(-231 -828)"
          >
            <path d="M248.429 839.053l-7.16 7.832a.358.358 0 01-.267.115c-.101 0-.198-.04-.267-.115l-7.16-7.832c-2.1-2.293-2.1-6.022 0-8.315 1.023-1.122 2.388-1.738 3.843-1.738 1.333 0 2.593.516 3.584 1.465.99-.95 2.247-1.465 3.58-1.465 1.455 0 2.824.616 3.85 1.738 2.093 2.293 2.09 6.022-.003 8.315z"></path>
          </g>
        </g>
      </svg>
    </button>
  );
};

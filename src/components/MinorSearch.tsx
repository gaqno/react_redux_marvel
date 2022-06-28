import React from "react";

type MinorSearch = {
  height: number | string;
  width: number | string;
  marginY?: number | string;
};
export const MinorSearch = (props: MinorSearch) => {
  const { height, width, marginY } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        height: height,
        width: width,
        marginTop: marginY,
        marginBottom: marginY,
        marginLeft: "3%",
      }}
      viewBox="0 0 19 19"
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="red" fillRule="nonzero" transform="translate(-90 -634)">
          <path d="M108.684 651.202l-4.66-4.666a7.777 7.777 0 00-.702-10.242A7.74 7.74 0 0097.803 634a7.74 7.74 0 00-5.519 2.294 7.825 7.825 0 000 11.05 7.74 7.74 0 005.519 2.294 7.672 7.672 0 004.712-1.59l4.685 4.64c.209.208.469.312.755.312.26 0 .547-.104.755-.313.39-.39.39-1.068-.026-1.485zm-11.034-4.008c-1.494 0-2.861-.582-3.925-1.619-2.152-2.15-2.152-5.668 0-7.844a5.516 5.516 0 013.925-1.62c1.493 0 2.86.582 3.924 1.62 1.063 1.037 1.62 2.429 1.62 3.922 0 1.493-.582 2.86-1.62 3.922-1.038 1.063-2.456 1.62-3.924 1.62z"></path>
        </g>
      </g>
    </svg>
  );
};

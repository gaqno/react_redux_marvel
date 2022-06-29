import React from "react";

export const ToogleOn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="75"
      height="41"
      viewBox="0 0 75 41"
    >
      <defs>
        <circle id="path-1" cx="55.5" cy="19.5" r="10.5"></circle>
        <filter
          id="filter-2"
          width="228.6%"
          height="228.6%"
          x="-64.3%"
          y="-50%"
          filterUnits="objectBoundingBox"
        >
          <feOffset
            dy="3"
            in="SourceAlpha"
            result="shadowOffsetOuter1"
          ></feOffset>
          <feGaussianBlur
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
            stdDeviation="4"
          ></feGaussianBlur>
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.881029212 0 0 0 0 0 0 0 0 0 0 0 0 0 0.603747815 0"
          ></feColorMatrix>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-80 -1126)">
          <g transform="translate(80 1126)">
            <rect
              width="75"
              height="39"
              x="0"
              y="0"
              fill="#E4E5E9"
              rx="19.5"
            ></rect>
            <g>
              <use
                fill="#000"
                filter="url(#filter-2)"
                xlinkHref="#path-1"
              ></use>
              <use fill="red" xlinkHref="#path-1"></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

import React from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectMoreSwitcher } from "../../redux/app/appSlice";

function ArrowUpIcon() {
  const isMoreOpen = useAppSelector(selectMoreSwitcher);
  return (
    <svg
      style={{
        transition: "500ms",
        transitionProperty: "transform",
        transform: isMoreOpen ? "rotate(3.142rad)" : "none",
      }}
      className="arrow-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="20" fill="#303030" />
      <path d="M14 23L20 17L26 23" stroke="white" strokeWidth="2" />
    </svg>
  );
}

export default ArrowUpIcon;

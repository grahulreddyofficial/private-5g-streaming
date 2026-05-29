import React from "react";
import Icon from "@ant-design/icons";

const DroneSvg = () => (
  <svg
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.84 8.18A3.34 3.34 0 1 1 8.18 4.84" />
    <path d="M8.18 19.16a3.34 3.34 0 1 1-3.34-3.34" />
    <path d="M15.82 4.84a3.34 3.34 0 1 1 3.34 3.34" />
    <path d="M19.16 15.82a3.34 3.34 0 1 1-3.34 3.34" />

    <line x1="19.64" y1="19.64" x2="14.86" y2="14.86" />
    <line x1="9.14" y1="9.14" x2="4.36" y2="4.36" />
    <line x1="9.14" y1="14.86" x2="4.36" y2="19.64" />
    <line x1="19.64" y1="4.36" x2="14.86" y2="9.14" />

    <path d="M14.86 9.14v5.72a2.86 2.86 0 1 1-5.72 0V9.14a2.86 2.86 0 1 1 5.72 0Z" />
  </svg>
);

const Drone = React.forwardRef((props, ref) => (
  <Icon component={DroneSvg} ref={ref} {...props} />
));

Drone.displayName = "Drone";

export default Drone;
import React from "react";

export default ({ size = 24, fill = "currentColor" }) => (
<svg xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    role="presentation"
  viewBox="0 0 24 24" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
);

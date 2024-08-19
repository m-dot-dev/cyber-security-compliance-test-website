import React from "react";

const ComingSoonWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`coming-soon-wrapper ${className}`}>
    <div className="h-full pointer-events-none">{children}</div>
  </div>
);
export default ComingSoonWrapper;

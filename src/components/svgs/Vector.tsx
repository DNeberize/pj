// Vector.tsx
import React from "react";

interface VectorProps {
  className?: string;
}

const Vector: React.FC<VectorProps> = ({ className = "" }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="var(--color-text-light)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Vector;

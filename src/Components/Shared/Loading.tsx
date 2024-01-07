import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="animate-spin rounded-full   w-12 h-12  border-t-4 border-b-4 border-green-500 shadow-lg "></div>
    </div>
  );
};

export default LoadingSpinner;

import React from "react";

const GlobalLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
        <p className="text-white text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default GlobalLoading;

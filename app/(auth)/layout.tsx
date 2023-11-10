import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center  min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {children}
    </div>
  );
};

export default layout;

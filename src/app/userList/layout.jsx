import React from "react";

const layout = ({ children }) => {
  return (
    <div className="container min-h-screen mx-auto flex flex-col gap-4 justify-center items-center">
      {children}
      <h2 className="font-bold text-5xl">This is user list component</h2>
    </div>
  );
};

export default layout;

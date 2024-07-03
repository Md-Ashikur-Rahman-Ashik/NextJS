import React from "react";

const page = ({ params }) => {
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-center text-5xl">
        User Information is: {params.userId}
      </h2>
    </div>
  );
};

export default page;

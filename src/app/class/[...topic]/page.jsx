import React from "react";

const page = ({ params }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center font-bold text-5xl">
        This is catch all segment page, and the topic is {params.topic}
      </h2>
    </div>
  );
};

export default page;

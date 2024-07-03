import React from "react";

const page = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-center text-5xl">This is user list page</h2>
      <div className="flex justify-center mt-10">
        <ul>
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
          <li>User 4</li>
          <li>User 5</li>
          <li>User 6</li>
        </ul>
      </div>
    </div>
  );
};

export default page;

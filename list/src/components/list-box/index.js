import React from "react";

const ListBox = () => {
  return (
    <div>
      <form className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          className="text-sm rounded-lg block focus:ring-blue-500  w-full p-2.5 border-gray-600 placeholder-gray-400 text-white bg-gray-700"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          className="h-24 text-sm rounded-lg block focus:ring-blue-500  w-full p-2.5 border-gray-600 placeholder-gray-400 text-white bg-gray-700"
        />
        <button className="px-6 my-4 text-sm rounded-lg block focus:ring-blue-500  w-full p-2.5 border-gray-600 placeholder-gray-400 text-white bg-gray-900">
          Create
        </button>
      </form>
    </div>
  );
};

export default ListBox;

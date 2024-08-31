"use client";
import { useState } from "react";

const ListBox = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  async function handleSubmit() {
    // fetch API: POST
    try {
      const apiResponse = await fetch("/api/list", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    } catch (error) {}
    // body data = formData
  }
  return (
    <div>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          value={formData.title}
          type="text"
          name="title"
          className="text-sm rounded-lg block focus:ring-blue-500  w-full p-2.5 border-gray-600 placeholder-gray-400 text-white bg-gray-700"
        />
        <label htmlFor="description">Description</label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          value={formData.description}
          type="text"
          name="description"
          className="h-24 text-sm rounded-lg block focus:ring-blue-500  w-full p-2.5 border-gray-600 placeholder-gray-400 text-white bg-gray-700"
        />
        <button
          type="submit"
          className="px-6 my-4 text-sm rounded-lg block focus:ring-blue-500  w-full p-2.5 border-gray-600 placeholder-gray-400 text-white bg-gray-900"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default ListBox;

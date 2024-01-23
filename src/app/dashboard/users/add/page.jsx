"use client";

import { addUser } from "@/lib/actions";

const AddUserPage = () => {
  return (
    <div>
      <form action={addUser} className="grid grid-cols-2 gap-3 p-2">
        <input
          type="text"
          placeholder="username"
          name="username"
          className="bg-slate-600 rounded-md  border-gray-500 p-2"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="bg-slate-600 rounded-md  border-gray-500 p-2"
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          className="bg-slate-600 rounded-md  border-gray-500 p-2"
        />
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="bg-slate-600 rounded-md  border-gray-500 p-2"
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="bg-slate-600 rounded-md  p-2"
        >
          <option value={false}>Is Admin</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="bg-slate-600 rounded-md  p-2"
        >
          <option value={true}>Is Active</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="Address"
          className="col-span-2 bg-slate-600 rounded-md p-2"
        ></textarea>
        <button type="submit" className="col-span-2 bg-blue-600 p-1 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;

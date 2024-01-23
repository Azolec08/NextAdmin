import { updateUser } from "@/lib/actions";
import { fetchUser } from "@/lib/data";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  console.log(user);

  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col gap-y-3 items-center">
        <figure className="relative w-48 h-48 col-span-1 mt-2">
          <Image
            src={user.image || "/noneImage.jpg"}
            alt="singleImg"
            fill
            sizes="max-width:600px"
            className="rounded-md"
          />
        </figure>
        <h1>{user.username}</h1>
      </div>
      <form
        action={updateUser}
        className="col-span-2 p-2 flex flex-col gap-y-2 text-xs bg-slate-800"
      >
        <input type="hidden" name="id" value={user.id} readOnly />
        <label>Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Image</label>
        <input
          type="text"
          placeholder="image"
          name="image"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Phone</label>
        <input
          type="phone"
          placeholder="phone"
          name="phone"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Address</label>
        <textarea
          name="address"
          id="address"
          rows="3"
          placeholder="Address"
          className="p-3 bg-slate-900 outline-none "
        ></textarea>
        <label>Is Admin</label>
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-3 bg-slate-900 outline-none "
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-3 bg-slate-900 outline-none "
        >
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button
          type="submit"
          className="p-3 bg-blue-600 outline-none rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SingleUserPage;

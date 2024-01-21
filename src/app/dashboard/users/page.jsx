import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import { fetchUsers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Users",
  description: "Users description",
};

const Userspage = async ({ searchParams }) => {
  const q = searchParams?.q || "";

  const users = await fetchUsers(q);

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-700 p-2  ">
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/add">
          <button className="p-2 bg-blue-600 rounded-md">Add Row</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>CreatedAt</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userData) => {
            return (
              <tr className="h-10" key={userData.id}>
                <td>
                  <div className="flex items-center h-full gap-x-1">
                    <Image
                      src={userData.image ? userData.image : "/noneImage.jpg"}
                      width={30}
                      height={30}
                      alt="userImg"
                      className="rounded-full"
                    />
                    {userData.username}
                  </div>
                </td>
                <td>{userData.email}</td>
                <td>{userData.createdAt.toString().slice(4, 16)}</td>
                <td>{userData.isAdmin ? "Admin" : "client"}</td>
                <td>{userData.isActive ? "Active" : "Passive"}</td>
                <td className=" text-xs">
                  <Link href="/dashboard/users/test ">
                    <button className="p-1 bg-green-500 mr-2 rounded-md">
                      View
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="p-1 bg-red-500 rounded-md">
                      Delete
                    </button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Userspage;

import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import { deleteUser } from "@/lib/actions";
import { fetchUsers } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Users",
  description: "Users description",
};

const Userspage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, users } = await fetchUsers(q, page);

  return (
    <div>
      <div className="flex justify-between items-center bg-slate-700 p-2  ">
        <Search placeholder="Search for a user.." />
        <Link href="/dashboard/users/add">
          <button className="p-2 bg-blue-600 rounded-md">Add Row</button>
        </Link>
      </div>
      <table className="w-full">
        <thead className="font-bold">
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>CreatedAt</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
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
                      width={40}
                      height={50}
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
                <td className="text-xs">
                  <div className="flex">
                    <Link href={`/dashboard/users/${userData.id} `}>
                      <button className="p-1 bg-green-500 mr-2 rounded-md">
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input
                        type="hidden"
                        value={userData.id}
                        name="id"
                        readOnly
                      />
                      <button className="p-1 bg-red-500 rounded-md">
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default Userspage;

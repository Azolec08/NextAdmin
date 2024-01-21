import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Next Products",
  description: "Dashboard description",
};

const ProductsPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-slate-700 p-2  ">
        <Search placeholder="Product search..." />
        <Link href="/dashboard/products/add">
          <button className="p-2 bg-blue-600 rounded-md">Add Row</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="h-16">
          <tr className=" ">
            <td>
              <div className="flex items-center h-full gap-x-1">
                <Image
                  src="/productnone.jpg"
                  width={40}
                  height={40}
                  alt="userImg"
                  className="rounded-full"
                />
                Iphone 10
              </div>
            </td>
            <td>Desc</td>
            <td>Php15000</td>
            <td>19.01.2024</td>
            <td>57</td>
            <td className=" text-xs">
              <Link href="/dashboard/products/test">
                <button className="p-1 bg-green-500 mr-2 rounded-md">
                  View
                </button>
              </Link>
              <Link href="/">
                <button className="p-1 bg-red-500 rounded-md">Delete</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;

import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Search from "@/app/ui/dashboard/search/Search";
import { deleteProducts } from "@/lib/actions";
import { fetchProducts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(q, page);

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
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id} className="h-10">
                <td>
                  <div className="flex items-center h-full gap-x-1">
                    <Image
                      src={product.image || "/productnone.jpg"}
                      width={40}
                      height={40}
                      alt="userImg"
                      className="rounded-full p-1"
                    />
                    {product.title}
                  </div>
                </td>
                <td>{product.desc}</td>
                <td>{product.price}</td>
                <td>{product.createdAt.toString().slice(4, 16)}</td>
                <td>{product.stock}</td>
                <td className=" text-xs">
                  <div className="flex">
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className="p-1 bg-green-500 mr-2 rounded-md">
                        View
                      </button>
                    </Link>
                    <form action={deleteProducts}>
                      <input
                        type="hidden"
                        value={product.id}
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

export default ProductsPage;

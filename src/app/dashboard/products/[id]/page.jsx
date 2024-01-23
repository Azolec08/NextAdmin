import { fetchProduct } from "@/lib/data";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col items-center gap-y-3">
        <figure className="relative w-48 h-48 col-span-1 mt-2">
          <Image
            src={product.image || "/productnone.jpg"}
            alt="singleImg"
            fill
            sizes="max-width:600px"
            className="rounded-md"
          />
        </figure>

        {product.title}
      </div>
      <form
        action=""
        className="col-span-2 p-2 flex flex-col gap-y-2 text-xs bg-slate-800"
      >
        <label>Title</label>
        <input
          type="text"
          placeholder="title"
          name="title"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Price</label>
        <input
          type="number"
          placeholder="123456"
          name="price"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Stock</label>
        <input
          type="number"
          placeholder="123"
          name="stock"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Color</label>
        <input
          type="text"
          placeholder="color"
          name="color"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Size</label>
        <input
          type="text"
          placeholder="size"
          name="size"
          className="p-3 bg-slate-900 outline-none "
        />
        <label>Category</label>
        <select name="cat" id="cat" className="p-3 bg-slate-900 outline-none ">
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="Euippment">Equipment</option>
        </select>
        <textarea
          name="desc"
          id="desc"
          rows="10"
          placeholder="Description"
          className="p-3 bg-slate-900 outline-none "
        ></textarea>
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

export default SingleProductPage;

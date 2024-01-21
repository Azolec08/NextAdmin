const AddProductPage = () => {
  return (
    <div>
      <form action="" className="grid grid-cols-2 gap-3 p-2">
        <input
          type="text"
          placeholder="Title"
          name="title"
          reuired
          className="bg-slate-600 rounded-md  border-gray-500 p-2"
        />
        <select name="cat" id="cat" className="bg-slate-600 rounded-md  p-2">
          <option value="general">Choose Category</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
          <option value="Equipment">Equipment</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          className="bg-slate-600 rounded-md  p-2"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          className="bg-slate-600 rounded-md  p-2"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="bg-slate-600 rounded-md  p-2"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="bg-slate-600 rounded-md  p-2"
        />
        <textarea
          name="desc"
          id="desc"
          rows="16"
          placeholder="description"
          className="col-span-2 bg-slate-600 rounded-md p-2"
        ></textarea>
        <button type="submit" className="col-span-2 bg-blue-600 p-1 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;

import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import Navbar from "../ui/dashboard/navbar/Navbar";
import Footer from "../ui/dashboard/footer/Footer";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-6 grid-flow-col  ">
      <div className="col-span-1 bg-slate-800  ">
        <Sidebar />
      </div>
      <div className="col-span-5 flex flex-col px-3 py-4 gap-y-2">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default layout;

import Image from "next/image";
import style from "./transactions.module.scss";

const Transactions = () => {
  return (
    <div className="bg-slate-700 p-3 rounded-md">
      <h2>Latest Tranactions</h2>
      <table className="w-full h ">
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody className="h-10">
          <tr>
            <td>
              <div className="flex items-center h-full gap-x-1">
                <Image
                  src="/noneImage.jpg"
                  width={30}
                  height={30}
                  alt="userImg"
                  className="rounded-full"
                />
                Mark Celoza
              </div>
            </td>
            <td className={style.pending}>Pending</td>
            <td>18.02.2024</td>
            <td>Php550</td>
          </tr>
        </tbody>

        {/* Sample #2 */}
        <tbody className="h-10">
          <tr>
            <td>
              <div className="flex items-center h-full gap-x-1">
                <Image
                  src="/noneImage.jpg"
                  width={30}
                  height={30}
                  alt="userImg"
                  className="rounded-full"
                />
                Mark Celoza
              </div>
            </td>
            <td className={style.pending}>Pending</td>
            <td>18.02.2024</td>
            <td>Php550</td>
          </tr>
        </tbody>
        {/* Sample #3 */}

        <tbody className="h-10">
          <tr>
            <td>
              <div className="flex items-center h-full gap-x-1">
                <Image
                  src="/noneImage.jpg"
                  width={30}
                  height={30}
                  alt="userImg"
                  className="rounded-full"
                />
                Mark Celoza
              </div>
            </td>
            <td className={style.done}>Done</td>
            <td>18.02.2024</td>
            <td>Php550</td>
          </tr>
        </tbody>
        {/* Sample #3 */}

        <tbody className="h-10">
          <tr>
            <td>
              <div className="flex items-center h-full gap-x-1">
                <Image
                  src="/noneImage.jpg"
                  width={30}
                  height={30}
                  alt="userImg"
                  className="rounded-full"
                />
                Mark Celoza
              </div>
            </td>
            <td className={style.cancel}>Canceled</td>
            <td>18.02.2024</td>
            <td>Php550</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;

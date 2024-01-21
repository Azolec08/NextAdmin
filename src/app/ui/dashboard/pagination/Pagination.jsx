import style from "./pagination.module.scss";

const Pagination = () => {
  return (
    <div className="w-full p-2">
      <div className="flex justify-between">
        <button className={style.button} disabled>
          Previous
        </button>
        <button className={style.button}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;

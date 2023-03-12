import { DownLine } from "../SvgIcons";

const Category = (props: { onDown: boolean; setOnDown: any }) => {
  const { onDown, setOnDown } = props;
  return (
    <button
      onClick={() => setOnDown(!onDown)}
      className="flex justify-between items-center text-light-gray"
    >
      <DownLine style={{ transform: `rotate(${onDown ? 0 : 180}deg)` }} />
      <h3 className="font-semibold">
        {onDown ? "Up Category" : "Down Category"}
      </h3>
    </button>
  );
};

export default Category;

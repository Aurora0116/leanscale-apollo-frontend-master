const FilterSelect = ({ title }: { title: string }) => {
  const handleChange = (e: any) => {};
  return (
    <div className="pt-4 mb-[10px]">
      <h1 className="font-bold text-dark-gray text-headline">{title}</h1>
      <div className="block">
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              defaultChecked
              checked
              onChange={handleChange}
            />
            <span className="ml-2">Simple Checkbox</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterSelect;

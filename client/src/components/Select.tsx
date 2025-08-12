const Select = ({
  isChangeOption,
  setIsChangeOption,
  setInputValue,
  setData
}: {
  isChangeOption: string;
  setIsChangeOption: (value: string) => void;
  setInputValue: (value: string) => void;
  setData: (value: string) => void;
}) => {
  const handleChangeSelectOption = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setIsChangeOption(e.target.value);
    setInputValue("");
    setData("");
  };

  return (
    <select
      value={isChangeOption}
      onChange={handleChangeSelectOption}
      className="bg-gray-700 text-white border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
    >
      <option value="Encode Input">Encode Input</option>
      <option value="Decode Token">Decode Token</option>
    </select>
  );
};

export default Select;

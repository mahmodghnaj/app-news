import { ChangeEvent, useState } from "react";
import Collapse from "../../../../components/collapse";
import { useStoreArticles } from "../../../../providers/articles";

const Filter = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const { setFilter, setSource, sources } = useStoreArticles();
  const handleFromDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setToDate(event.target.value);
  };

  const handleApplyClick = () => {
    setFilter({
      from: fromDate,
      to: toDate,
    });
    setSource("");
  };
  const handleSourceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedSource(event.target.value);
    setSource(event.target.value);
  };

  return (
    <>
      <Collapse>
        <div className="flex space-x-3">
          <div>
            From:{" "}
            <input
              type="date"
              value={fromDate}
              onChange={handleFromDateChange}
              className={`h-8 rounded-lg ${
                fromDate ? "text-black" : "text-gray-300"
              } `}
            />
          </div>
          <div>
            To:{" "}
            <input
              type="date"
              value={toDate}
              onChange={handleToDateChange}
              className={`h-8 rounded-lg ${
                toDate ? "text-black" : "text-gray-300"
              } `}
            />
          </div>
          <div>
            Source:{" "}
            <select
              value={selectedSource}
              onChange={handleSourceChange}
              className="h-8 rounded-lg"
            >
              <option value="">Select Source</option>
              {sources.map((source) => (
                <option key={source} value={source}>
                  {source}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleApplyClick}
            className="mt-2 h-8 w-16 bg-blue-500 rounded-lg p-1 text-center"
          >
            Apply
          </button>
        </div>
      </Collapse>
    </>
  );
};

export default Filter;

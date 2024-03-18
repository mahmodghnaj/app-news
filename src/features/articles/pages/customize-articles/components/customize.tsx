import { useNavigate } from "react-router-dom";
import { useStoreArticles } from "../../../../../providers/articles";
import Close from "../../../../../components/icons/Close";

const Customize = () => {
  const { feed, deleteCategory, deleteSource } = useStoreArticles();
  const navigate = useNavigate();
  const category = feed.category;
  //@ts-ignore
  const sources = feed.source.map((item) => item.value);
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex">
            <div className="text-xl text-gray-500 mr-4"> category: </div>
            {category.map((item) => (
              <>
                <div className="px-[10px] bg-slate-400 text-white rounded-2xl flex items-center gap-2">
                  <span> {item}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => deleteCategory(item)}
                  >
                    <Close />
                  </span>
                </div>
              </>
            ))}
          </div>
          <div className="flex my-2">
            <div className="text-xl text-gray-500 mr-4"> Sources: </div>
            {sources.map((item) => (
              <>
                <div className="px-[10px] bg-slate-400 text-white rounded-2xl flex items-center gap-2">
                  <span> {item}</span>
                  <span
                    className="cursor-pointer"
                    onClick={() => deleteSource(item)}
                  >
                    <Close />
                  </span>
                </div>
              </>
            ))}
          </div>
          <div
            onClick={() => navigate("/")}
            className="text-center my-4 underline text-3xl text-blue-500 cursor-pointer"
          >
            Add More Articles
          </div>
        </div>
      </div>
    </>
  );
};
export default Customize;

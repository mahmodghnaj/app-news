import { FC } from "react";
import { PropsComponents } from "./types";

const Collapse: FC<PropsComponents> = ({ children }) => {
  return (
    <>
      <section className="grid place-items-center bg-gray-100 ">
        <label>
          <input className="peer/showLabel absolute scale-0 " type="checkbox" />
          <span className="block max-h-14  text-center overflow-hidden rounded-lg bg-emerald-100 px-4 py-0 text-cyan-800 shadow-lg transition-all duration-300 peer-checked/showLabel:max-h-52">
            <h3 className="flex  h-14 cursor-pointer items-center justify-center font-bold">
              Filter
            </h3>
            <p className="mb-2">{children}</p>
          </span>
        </label>
      </section>
    </>
  );
};
export default Collapse;

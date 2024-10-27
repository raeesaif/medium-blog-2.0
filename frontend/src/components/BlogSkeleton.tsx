import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div>
      <div role="status" className="animate-pulse">
        <div className=" p-4 border-b border-x-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer ">
          <div className="flex">
            <div className="h-4 w-4 bg-gray-200 rounded-full  mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            <div className="flex justify-center flex-col pl-2 ">
              <Circle />
            </div>
            <div className="pl-2 font-thin text-sm text-slate-400 flex justify-center flex-col ">
              <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
            </div>
          </div>
          <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
          <div className="text-sm font-thin pt-4 text-slate-500">
            <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
          </div>
        </div>

        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

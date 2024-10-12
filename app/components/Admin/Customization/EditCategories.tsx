import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "@/redux/features/layout/layoutApi";
import React, { useEffect, useState } from "react";
import Loader from "../../Loader/Loader";
import { styles } from "@/app/styles/style";
import { AiOutlineDelete } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-hot-toast";

type Props = {};

const EditCategories = (props: Props) => {
  const { data, isLoading, refetch } = useGetHeroDataQuery("Categories", {
    refetchOnMountOrArgChange: true,
  });
  const [editLayout, { isSuccess: layoutSuccess, error }] =
    useEditLayoutMutation();
  const [categories, setCategories] = useState<any>([]);

  const [hover, setHover] = useState(false)

  useEffect(() => {
    if (data) {
      setCategories(data.layout?.categories);
    }
    if (layoutSuccess) {
      refetch();
      toast.success("Categories updated successfully");
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
      }
    }
  }, [data, layoutSuccess, error, refetch]);

  const handleCategoriesAdd = (id: any, value: string) => {
    setCategories((prevCategory: any) =>
      prevCategory.map((i: any) => (i._id === id ? { ...i, title: value } : i))
    );
  };

  const newCategoriesHandler = () => {
    if (categories[categories.length - 1].title === "") {
      toast.error("Category title cannot be empty");
    } else {
      setCategories((prevCategory: any) => [...prevCategory, { title: "" }]);
    }
  };

  const areCategoriesUnchanged = (
    originalCategories: any[],
    newCategories: any[]
  ) => {
    return JSON.stringify(originalCategories) === JSON.stringify(newCategories);
  };

  const isAnyCategoryTitleEmpty = (categories: any[]) => {
    return categories.some((q) => q.title === "");
  };

  const editCategoriesHandler = async () => {
    if (
      !areCategoriesUnchanged(data.layout?.categories, categories) &&
      !isAnyCategoryTitleEmpty(categories)
    ) {
      await editLayout({
        type: "Categories",
        categories,
      });
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="mt-[120px] text-center">
          <div className="w-1/3 mx-auto rounded-[10px] p-5 dark:bg-zinc-900 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:shadow-zinc-950">
            <h1 className={`${styles.title}`}>All Categories</h1>
            {categories &&
              categories.map((item: any, index: number) => {
                return (
                  <div className="p-3" key={index}>
                    <div className="flex items-center w-full justify-center">
                      <input
                        className={`${styles.input} !w-[unset] !border-none !text-[20px]`}
                        value={item.title}
                        onChange={(e) =>
                          handleCategoriesAdd(item._id, e.target.value)
                        }
                        placeholder="Enter category title..."
                      />
                      <AiOutlineDelete
                        className="text-red-600 text-[28px] cursor-pointer hover:animate-pulse"
                        onClick={() => {
                          setCategories((prevCategory: any) =>
                            prevCategory.filter((i: any) => i._id !== item._id)
                          );
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <br />
          <br />
          <div className="w-full flex justify-center">
            <div
              className="dark:text-white text-black text-[25px] cursor-pointer border-2 border-emerald-400 hover:bg-emerald-400 rounded-full px-8"
              onClick={newCategoriesHandler}
            >
              ADD
            </div>
          </div>
          <div
            className={`${styles.button
              } !w-[100px] !min-h-[40px] !h-[40px] dark:text-white text-black bg-[#cccccc34] 
              ${areCategoriesUnchanged(data.layout?.categories, categories) ||
                isAnyCategoryTitleEmpty(categories)
                ? "!cursor-not-allowed"
                : "!cursor-pointer !bg-[#42d383]"
              }
              !rounded absolute bottom-12 right-12`}
            onClick={
              areCategoriesUnchanged(data.layout?.categories, categories) ||
                isAnyCategoryTitleEmpty(categories)
                ? () => null
                : editCategoriesHandler
            }
          >
            Save
          </div>
          <br />
          <br />
          <br />
        </div>
      )}
    </>
  );
};

export default EditCategories;
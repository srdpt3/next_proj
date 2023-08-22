import { Category } from "@/types";
import { log } from "console";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);
  console.log(res);
  return res.json();
};

export default getCategories;

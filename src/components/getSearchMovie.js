import Axios from "axios";
import { headers, NAVER_END_POINT } from "../config";

const getSearchMovie = async ({ searchName, display = 10 }) => {
  try {
    const { data: { items } } = await Axios.get(NAVER_END_POINT, {
      params: { query: searchName, display },
      headers
    });
    return items;
  } catch (error) {
    return error;
  }
};

export default getSearchMovie;

import Axios from "axios";
import { KOBIS_API_KEY, KOBIS_MOVIECD_END_POINT } from "../config";

const getMovieCode = async ({ searchName: name }) => {
  const searchName = decodeURI(name);
  try {
    const { data: { movieListResult: { movieList } } } = await Axios.get(
      `${KOBIS_MOVIECD_END_POINT}?key=${KOBIS_API_KEY}&movieNm=${searchName}`
    );
    return movieList;
  } catch (error) {
    return error;
  }
};

export default getMovieCode;

import Axios from "axios";
import { KOBIS_API_KEY, KOBIS_DETAIL_END_POINT } from "../config";

const getDetailMovie = async ({ movieCd }) => {
  try {
    const { data: { movieInfoResult } } = await Axios.get(
      `${KOBIS_DETAIL_END_POINT}?key=${KOBIS_API_KEY}&movieCd=${movieCd}`
    );
    return movieInfoResult;
  } catch (error) {
    return error;
  }
};

export default getDetailMovie;

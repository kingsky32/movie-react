import Axios from "axios";
import moment from "moment";
import { KOBIS_API_KEY, KOBIS_END_POINT } from "../config";

const getMovie = async ({ targetDate }) => {
  const targetDt = moment(targetDate).subtract(1, "days").format("YYYYMMDD");
  try {
    const { data: { boxOfficeResult } } = await Axios.get(
      `${KOBIS_END_POINT}?key=${KOBIS_API_KEY}&targetDt=${targetDt}`
    );
    return boxOfficeResult;
  } catch (error) {
    return error;
  }
};

export default getMovie;

import Axios from "axios";
import moment from "moment";

const API_KEY = "0a692913bfb07ea3dd1bc75bd46dc55e";
const END_POINT =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";

const getDailyBoxOfficeList = async ({ targetDate }) => {
  const targetDt = moment(targetDate).subtract(1, "days").format("YYYYMMDD");
  try {
    const { data: { boxOfficeResult } } = await Axios.get(
      `${END_POINT}?key=${API_KEY}&targetDt=${targetDt}`
    );
    return boxOfficeResult;
  } catch (error) {
    return error;
  }
};

export default getDailyBoxOfficeList;

import { AppNetworkHandler } from "../util/network/NetworkHandler";
import { NEWS_APP_API_KEY } from "../util/NetworkConstant";

export const fetchNewsDataApi = async (newsType) => {
  let endPoint = '';
  if (newsType == 'allNews') {
    endPoint = `everything?q=bitcoin&apiKey=${NEWS_APP_API_KEY}`
  } else if (newsType == 'topNews') {
    endPoint = `top-headlines?country=in&apiKey=${NEWS_APP_API_KEY}`
  }
  const newsDataResponse = await AppNetworkHandler.get(endPoint);
  if (newsDataResponse) {
    return newsDataResponse.data;
  } else return null;
}
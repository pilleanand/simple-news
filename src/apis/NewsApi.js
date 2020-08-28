import { AppNetworkHandler } from "../util/network/NetworkHandler";
import { NEWS_APP_API_KEY } from "../util/NetworkConstant";

export const fetchNewsDataApi = async (newsType) => {
  let endPoint = '';
  if (newsType == 'allNews') {
    endPoint = `top-headlines?category=technology&apiKey=${NEWS_APP_API_KEY}`
  } else if (newsType == 'topNews') {
    endPoint = `top-headlines?country=in&apiKey=${NEWS_APP_API_KEY}`
  }
  try {
    const newsDataResponse = await AppNetworkHandler.getFromCache(endPoint);
    if (newsDataResponse.data) {
      return newsDataResponse.data;
    } else return null;
  } catch (error) {
    return null;
  }
}
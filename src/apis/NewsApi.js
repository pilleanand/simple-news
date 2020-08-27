import { AppNetworkHandler } from "../util/network/NetworkHandler";

export const fetchNewsDataApi = async () => {
  const endPoint = '?q=bitcoin&from=2020-07-27&sortBy=publishedAt&apiKey=4bfaf264ed8e4fba8c1f15bc1c46844c';
  const newsDataResponse = await AppNetworkHandler.get(endPoint);
  return newsDataResponse.data;
}
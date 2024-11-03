import { sellerRequestModel } from "./seller.model";

const postSellerRequest = async (data: any) => {
  const result = await sellerRequestModel.create(data);
  return result;
};
export const sellerService = {
  postSellerRequest,
};

import { Types } from "mongoose";

export interface TSeller {
  userId: Types.ObjectId;
  productsCategories: string[];
  block: boolean;
}

export interface TBecomeSellerRequest {
  userId: Types.ObjectId;
  productsCategories: string[];
  approved: boolean;
}

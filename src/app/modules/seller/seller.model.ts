import { model, Schema } from "mongoose";
import { TBecomeSellerRequest, TSeller } from "./seller.interface";

const sellerSchema = new Schema<TSeller>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    productsCategories: { type: [String], required: true },
    block: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const sellerREquestSchema = new Schema<TBecomeSellerRequest>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
    productsCategories: { type: [String], required: true },
    approved: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const sellerModel = model("seller", sellerSchema);
export const sellerRequestModel = model("sellerRequest", sellerREquestSchema);

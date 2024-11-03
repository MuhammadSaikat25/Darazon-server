import { RequestHandler } from "express";
import { sellerService } from "./seller.service";
import AppError from "../../error/AppError";
import httpStatus from "http-status";

const postSellerRequest: RequestHandler = async (req, res, next) => {
  const data = {
    userId: req.body.userId,
    productsCategories: req.body.productsCategories,
  };
  try {
    const result = await sellerService.postSellerRequest(data);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    next(new AppError(httpStatus.BAD_REQUEST, error.message));
  }
};
export const sellerController = {
  postSellerRequest,
};

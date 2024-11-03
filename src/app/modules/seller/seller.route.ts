import { Router } from "express";
import { sellerController } from "./seller.controller";

const route = Router();
route.post("/become-seller", sellerController.postSellerRequest);
export const sellerRoute = route;

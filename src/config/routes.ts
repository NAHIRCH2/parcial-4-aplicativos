import { Application } from "express";
import userRoutes from "../routes/user.route";


export const register = async (app: Application) => {
  app.use("/users", userRoutes);
 
  console.log("🟢 Routes registered");
};

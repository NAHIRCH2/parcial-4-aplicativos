import { model, Schema } from "mongoose";
import IUser from "../interfaces/user.interface";


const UserSchema = new Schema<IUser>(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "El email es obligatorio y único"],
      lowercase: true,
      trim: true,
    },
    contraseña: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      select: false,
    },
    rol: {
      type: String,
      lowercase: true,
      default: "usuario",
      enum: ["admin", "usuario"],
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);


export default model<IUser>("User", UserSchema);
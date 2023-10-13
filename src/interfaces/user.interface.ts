import { Document } from "mongoose";


interface IUser extends Document {
  nombre: string;
  email: string;
  contraseña: string;
  rol: string;
}


export default IUser; 
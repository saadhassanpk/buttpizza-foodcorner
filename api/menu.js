import { restaurant } from "../lib/restaurant.js";
export default function handler(req,res){res.status(200).json({categories:restaurant.menuCategories,featured:restaurant.signature,pricesAvailable:false,confirmationRequired:true});}

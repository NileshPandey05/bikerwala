import { allbikeslist } from "../data/all_bikes";
import { Prodcuts } from "../data/data";

export function getAllBikesFlat():Prodcuts[]{
  return Object.values(allbikeslist).flatMap((bikebrand:any) => bikebrand.bikes ?? [])
}
console.log(getAllBikesFlat())

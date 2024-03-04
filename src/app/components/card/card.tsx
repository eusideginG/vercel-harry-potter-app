"use client"; // <style jsx> need to be rendered on client to work
import type Card from "@/src/models/cart_type";
import gradient from "./gradient";

/**
 *
 * @param param0
 * id = string value of the id (from the api)
 * houseName = string value of the name (from the api)
 * houseAnimal = string value of the animal (from the api)
 * houseColors = array of string values of the houseColours (from the api)
 * houseFounder = string value of the founder (from the api)
 * @returns a card component with above data
 */
export default async function Card({
  id,
  houseName,
  houseAnimal,
  houseColors,
  houseFounder,
}: Card) {
  return (
    <>
      <div
        key={id}
        className="flex flex-col items-center bg-[rgb(var(--main-color))] w-3/12 min-w-64 p-2 px-4 mb-2 rounded-md drop-shadow-md"
      >
        <div className="flex items-center w-full my-2">
          <span className="width-50-p font-bold text-lg">
            <h3>{houseName}</h3>
          </span>
          <span className="width-50-p text-right text-sm">{houseAnimal}</span>
        </div>
        {/* import gradient component for cleaner code */}
        {gradient(houseColors[0], houseColors[1])}
        <div className="flex items-center w-full text-sm my-2">
          <p className="text-left">
            Founder:
            <span className="font-bold"> {houseFounder}</span>
          </p>
        </div>
      </div>
    </>
  );
}

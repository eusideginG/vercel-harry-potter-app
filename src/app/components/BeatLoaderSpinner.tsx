"use client"
import { BeatLoader } from "react-spinners";

/**
 *
 * @returns a custom BeatLoader spinner from react-spinners
 */
export default function NestedSpinner() {
  return (
    <div className="flex items-center justify-center m-4">
      <BeatLoader color="rgb(var(--spinner-color))" speedMultiplier={0.75} />
    </div>
  );
}

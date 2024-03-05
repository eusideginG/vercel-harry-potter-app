"use client"
import { CircleLoader } from "react-spinners";

/**
 *
 * @returns a custom CircleLoader spinner from react-spinners
 */
export default function MainSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CircleLoader color="rgb(var(--spinner-color))" speedMultiplier={0.7} />
    </div>
  );
}

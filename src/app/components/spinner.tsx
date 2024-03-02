"use client"
import { CircleLoader } from "react-spinners";

/**
 * 
 * @returns a custom CircleLoader spinner from react-spinners
 */
export default function Spinner() {
    return(
        <div className="flex items-center justify-center min-h-screen">
            <CircleLoader
            color="#9510b8"
            loading
            speedMultiplier={0.7} />
        </div>
    )
}
import { Suspense } from "react";
import TestComp from "./TestComp";



export default function Test() {


    return(
        <>
            <h1>Test page</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <TestComp/>
            </Suspense>
        </>
    )
}
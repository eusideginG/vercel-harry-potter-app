import { resolve } from "path";



export default async function TestComp() {
    await new Promise(resolve => setTimeout(resolve, 4000));
    return <div>Finaly here</div>
}
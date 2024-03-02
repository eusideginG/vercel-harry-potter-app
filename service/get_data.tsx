
/**
 * handles the fetching
 * @returns json data from the REST Api
 */
export const getData = async () => {
    // a timeoute for the spinner 
    await new Promise(resolve => setTimeout(resolve, 30000));

    try {
        const url: string | undefined = process.env.API_URL;
    
    if (url === undefined) { return "bad url" }

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Faild to fetch the data");
    }
    
    return res.json()
    } catch (error) {
        console.error(error);
    }

};
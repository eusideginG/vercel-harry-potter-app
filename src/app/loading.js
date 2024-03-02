import Spinner from "./components/spinner";

/**
 * wraps the page and handles the loading until the data is ready to be displayed to the client
 * @returns a spinner component
 */
export default function Loading() {
    return <Spinner />
}
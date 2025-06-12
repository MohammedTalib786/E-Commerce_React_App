import { useEffect, useState } from "react"


const useFetch = (fetchURL) => {
    let [loader, setLoader] = useState(true);
    let [data, setData] = useState([])
    let [error, setError] = useState(null)

    useEffect(() => {
        try {
            const fetchingData = async () => {
                setLoader(true);
                let getData = await fetch(fetchURL);
                let res = await getData.json();
                setData(res)
                setLoader(false);
            }

            fetchingData();
            // console.log('inside custom hook | Data', data)

        }
        catch (err) {
            setError(err.message)
            // console.log('inside custom hook | Error msg', err.message)
        }

    }, [fetchURL])

    return { data, loader, error }
}

export default useFetch;
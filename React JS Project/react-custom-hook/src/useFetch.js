const { useState, useEffect } = require("react")

let useFetch = (url)=> {
    let [data,setData]=useState(null);            // hold the data 
    let [loading,setLoading]=useState(true);        // check the status 
    let [error,setError]=useState("")               // hold the error message 

    useEffect(()=>{

        let fetchData = async() => {
            try {
                let response = await fetch(url);
                if(!response.ok){
                    throw new Error("Failed to load the data")
                }
                let result = await response.json();
                setData(result)
            } catch (error) {
                setError(error.message)
            }finally{
                setLoading(false);
            }
        }

        fetchData();

    },[url])

    return {data,loading,error}
}

export default useFetch;
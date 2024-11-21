import useFetch from "./useFetch";

function FakeInformation() {
let {data,loading,error} = useFetch("https://fakestoreapi.com/products")

    if(loading){
        return <h2>Data Loading.....</h2>
    }
    if(error){
        return <div>Error : {error}</div>
    }

    return(
        <div>
            {
                data && data.map(d=> 
                    <p key={d.id}>{d.id} {d.title}</p>
                )
            }
        </div>
    )
}

export default FakeInformation;
import { useLoaderData  } from "react-router-dom"

export const loader = async ({params})=>{
    return params.id
}

const BlueLayout = ()=>{

    const loaderData = useLoaderData()

    return(
        <div style={{width : "100%" , height : "500px" , backgroundColor : "blue"}}>
            <p style={{color:"red" , fontSize : "80px"}}>{loaderData}</p>
        </div>
    )
}

export default BlueLayout
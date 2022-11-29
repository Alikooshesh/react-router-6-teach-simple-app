import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const Layout = ()=>{

    const [inputVal , setInputVal] = useState("")

    return(
        <div className="container">
            <header className="header">
                <Link to="/green">
                    <button>green</button>
                </Link>
                <Link to="/blue">
                    <button>blue</button>
                </Link>
                <Link to="/red">
                    <button>red</button>
                </Link>

                <input value={inputVal} onChange={(e)=> setInputVal(e.target.value)}/>
                <Link to={`/blue/${inputVal}`}>
                    <button>dynamic blue</button>
                </Link>
            </header>

            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default Layout
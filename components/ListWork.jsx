import img from "../img/work.svg"
import arrowL from "../img/arrowL.svg"
import arrowR from "../img/arrowR.svg"
import arrowLActive from "../img/arrowLActive.svg"
import arrowRActive from "../img/arrowRActive.svg"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { WorkContext } from "../context/WorkContext"

function ListWork({page, setPage, list}){
    const {setWork} = useContext(WorkContext);

    const div = list.map((item) => 
            <div className="cardWork" key={item.id}>
                <img src={img}/>
                <Link to={'/pageWork'} onClick={()=> setWork(item)}>{item.title}</Link>
                <p>{item.lastName + " " + item.name + " " + item.age + " лет"}</p>
            </div>
        )

    return(
        <>
        <div className="listWork">
            {div}
        </div>
        <div className="arrows">
            <div className="arrowL" src={arrowL} onClick={()=>page==1? setPage(page) : setPage(page-1)}/>
            <p>{page}</p>
            <div className="arrowR" src={arrowR} onClick={()=>list.length < 9? setPage(page) : setPage(page+1)}/>
        </div>
        </>
        
    )
}

export default ListWork;
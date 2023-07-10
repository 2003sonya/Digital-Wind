import thematicSite from "../img/thematicSite.svg"
import thematicSiteA from "../img/thematicSiteActive.svg"
import animation2D from "../img/d2Animation.svg"
import animation2DA from "../img/d2AnimationActive.svg"
import graphics2D from "../img/d2Graphics.svg"
import graphics2DA from "../img/d2GraphicsActive.svg"
import graphics3D from "../img/d3Graphics.svg"
import graphics3DA from "../img/d3GraphicsActive.svg"
import computerGames from "../img/computerGames.svg"
import computerGamesA from "../img/computerGamesActive.svg"
import dataScience from "../img/dataScience.svg"
import dataScienceA from "../img/dataScienceActive.svg"
import photoSketch from "../img/photoSketch.svg"
import photoSketchA from "../img/photoSketchActive.svg"
//переименовать фотки


function FilterNomination({nomination, setNomination, setPage}){
    const arrNomination = [
        {nomination: "thematicSite", img: thematicSite, imgA: thematicSiteA, title: "Тематический сайт"},
        {nomination: "2dGraphics", img: graphics2D, imgA: graphics2DA, title: "Двумерная статичная графика"},
        {nomination: "2dAnimation", img: animation2D, imgA: animation2DA, title: "Двумерная анимация"},
        {nomination: "3dGraphics", img: graphics3D, imgA: graphics3DA, title: "Трехмерная статичная графика"},
        {nomination: "computerGames", img: computerGames, imgA: computerGamesA, title: "Компьютерные игры"},
        {nomination: "dataScience", img: dataScience, imgA: dataScienceA, title: "Специальная номинация «Data Science»"},
        {nomination: "photoSketch", img: photoSketch, imgA: photoSketchA, title: "Специальная номинация «Фотозарисовка”"}
    ]

    const n = arrNomination.map((item, index)=>
    //если уже выбрана эта номинация, то мы её убираем если выбрана другая, то запоминаем
        <div key={index} className={"nomination " + item.nomination} onClick={()=> nomination == item.nomination ? setNomination("all") : setNomination(item.nomination)}>
            <img src={nomination == item.nomination ? item.imgA: item.img}/>
            <p>{item.title}</p>
        </div>
    )

    return(
       <div className="filterNomination">
            {n}
       </div>
    )
}

export default FilterNomination;
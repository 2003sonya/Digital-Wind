function FilterAge({age, setAge, setPage}){
    const arrAge = ["до 12 лет", "13-17 лет", "18-25 лет", "Все возраста"];

    const filter = arrAge.map((item, index)=>
        <a href="#" className={"ageButton "+ (age == item ? "active": "")} key={index} onClick={(e)=>
            {e.preventDefault(); age == item ? setAge("Все возраста") : setAge(item)}
        }>{item}</a>
    )

    return(
       <div className="filterAge">
            {filter}
       </div>
    )
}

export default FilterAge;
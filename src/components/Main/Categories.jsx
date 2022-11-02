
const Categories = (props) => {

    const categories = [
        "Все",
        "Мясные",
        "Вегетарианская",
        "Гриль",
        "Острые",
        "Закрытые"
    ]
    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) =>
                    (
                        <li onClick={() => {props.setActiveCategory(index)}} key={category} className={props.activeCategory === index ? "active" : ""}>{category}</li>
                    )
                )
                }
            </ul>
        </div>
    )
}

export default Categories
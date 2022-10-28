import {useState} from "react";

const Categories = () => {
    const [active, setActive] = useState(0)

    const setActiveCategory = (index) => {
        setActive(index)
    }

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
                        <li onClick={() => {setActiveCategory(index)}} className={active === index ? "active" : ""}>{category}</li>
                    )
                )
                }
            </ul>
        </div>
    )
}

export default Categories
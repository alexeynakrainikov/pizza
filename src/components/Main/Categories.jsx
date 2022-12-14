import {useDispatch, useSelector} from "react-redux";
import {setCategoryValue} from "../../redux/redusers/sortSlice";;

const Categories = () => {
    const activeCategory = useSelector((state) => state.sort.activeCategory)
    const dispatch = useDispatch()
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
                        <li onClick={() => {dispatch(setCategoryValue(index))}} key={category} className={activeCategory === index ? "active" : ""}>{category}</li>
                    )
                )
                }
            </ul>
        </div>
    )
}

export default Categories
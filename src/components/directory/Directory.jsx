import { categories } from "../categories-db/CategoriesDb"
import CategoryItem from "../category-item/CategoryItem"
import './categories.styles.scss'


const Directory = () => {

      
      return(
        <div className="categories-container">
        {
          categories.map(category => {
           return <CategoryItem key={category.id} category={category} />
          })
        }

        </div>
      )
 
    
      
}

export default Directory
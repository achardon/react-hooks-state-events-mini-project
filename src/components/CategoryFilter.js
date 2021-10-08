import React from "react";

function CategoryFilter({categories, selectedCategory, setCategory}) {
  
  function handleCategoryClick(category) {
    setCategory(category)
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => {        
        return (
          <button 
          key={category}
          className={category===selectedCategory? 'selected' : null}
          onClick={e => 
            handleCategoryClick(category)
          }
          >{category}
          </button>
        )
      })}
      
    </div>
  );
}

export default CategoryFilter;

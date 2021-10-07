import React from "react";

function CategoryFilter({categories}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.forEach(category => {
        console.log(category)
        return <p>{category}</p>
          
        
      })}
    </div>
  );
}

export default CategoryFilter;

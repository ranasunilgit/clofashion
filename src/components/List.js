import React from "react";
const priceOption = Object.freeze({
    PAID: 0,
    FREE: 1,
    VIEW_ONLY: 2,
});
function getPriceLable(p){

 if(p==priceOption.FREE){
    return 'FREE'
}
if(p==priceOption.VIEW_ONLY){
    return 'VIEW ONLY'
}
   
}
const List = ({list})=>{
    
    const {id,pricingOption,creator,title,imagePath,price} = list
       //const option = { pricingOption == priceOption.PAID ? price : pricingOption == priceOption.FREE ? 'FREE' : 'VIEW ONLY'}
       let option = getPriceLable(pricingOption)
        
       return (
             <div className="card">
                    <img src={imagePath} />
                    <div className="card-content">
                    <h2>{creator}</h2>   
                    <h2>{title}</h2>
                    <p>{pricingOption ==0 ? '$'+`${price}`: option}</p>
                 </div>
             </div>
               
        )
}

export default List;
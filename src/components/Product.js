import List from "./List";
const Product = (props) =>{
   const products = props.clo
    
    return(
         <div> 

             <div className="card-grid"> 
                 {products && products .map( (currentElem)=>{
                    return <List key={currentElem.id} list={currentElem}/>
                 })}
                  
             </div>
         </div>
    )
}

export default Product;
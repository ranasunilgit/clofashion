import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchcloData,paidCloProducts,freeCloProducts,viewOnlyCloProducts } from "./redux/slice/clo";

import Product from './components/Product'

function App() {
  const dispatch = useDispatch();
  
  
  console.log('----redux--store---')
  const cloObject = useSelector(state =>state.clo)
  console.log(cloObject.data)
  let cloData = cloObject.data
  console.log('----redux--store cloObject---')  
  
  useEffect( ()=>{
     dispatch(fetchcloData())
  },[])
const handleCheckBox =(e)=>{
  debugger;
  console.log('--under handleCHkBox--')
  console.log(cloData)
  console.log('--under handleCHkBox--')
  alert(e.target.checked)
  alert(Number(e.target.value))
  if(e.target.checked && Number(e.target.value) == 0){
     let paidData = dispatch(paidCloProducts())
     console.log('--under paid --2nd--')
  console.log(paidData)
  console.log('--under paid--2nd')
  } 
  if(Number(e.target.value) == 1){
      dispatch(freeCloProducts())
  } 
  if(Number(e.target.value) == 2){
   dispatch(viewOnlyCloProducts())
  }
  
  console.log('--under handleCHkBox --2nd--')
  console.log(cloData)
  console.log('--under handleCHkBox--2nd')
  //dispatch(paidCloProducts())
  //dispatch(freeCloProducts())
  //dispatch(viewOnlyCloProducts())

}
  return (
    <div className="App">
         <div className="maincontainer">
             <div className="info-head">
             
                  <div className="label-head">Find the items you are looking for </div>
                  <div className="label-head"> Keyword search </div> 
             </div>
             <div>
                 <div className=''>Content Filter</div>
                 <div className="label-head"> 
                        <span> <input type="checkbox" value='0' onClick={handleCheckBox }/> Paid </span>
                        <span> <input type="checkbox" value='1' onClick={handleCheckBox }/>Free</span>
                        <span> <input type="checkbox" value='2' onClick={handleCheckBox }/> View Only</span>
                        <span> <button > Reset </button></span>

                 </div>
             </div>
            
             <Product clo={cloData}/>
         </div>
    </div>
  );
}

export default App;

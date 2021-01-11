
import React, {useState,useEffect} from 'react';




function Todo() {
  
    const [txt,setTxt]=useState('');
    const [names,setNames]=useState([])
     const [message, setMessage] = useState('')

       const showTxt=()=>{
       setNames( names=>[...names,txt])
    }
     
   

    return (
         
          
         <div className="App">
      
           <header className="App-header">
           <div>
           <div>
           <h1 style ={{color:'black'}}>Names:</h1>
           <ul>
          {names.map((name)=> {
            return <li key={name} style={{color:'black'}}>{name}</li>})}
           </ul>
           </div>
         

           </div>
              
          
            
      
                 <input type="text" onChange={(event) => {
                    console.log(event.currentTarget.value);
           
                    
                   //setTxt(event.currentTarget.value.toUpperCase());
                   setTxt(event.currentTarget.value);
                }}/>

              <div>
                <button onClick={showTxt}>Add me</button>
               
             
            
                
              </div>
                 
               

              
                 <br/>
             
                 
            </header>
           </div>
           
        );

    
    
}


export default Todo;
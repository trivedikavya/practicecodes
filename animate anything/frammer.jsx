{/*If u want to create Reactjs From - Create or starting 
Npm craeet vite
project name 
- reactjs
- javascript 
cd .....
npm i 
*/}

import React from 'react'
import {motion} from 'framer-motion';

const App = () => {
  return (
    <div>
      {/* reactjs ma -- framer motion ma -- Motion components Hoye means Look below  */}
      {/* animate namm na attibute ma Lakhvanu apde - ani ander Khai animation biju kayi nahi  */}
      {/* and transition namm no attribute bi hoye jeni ander apde a vastu o nakhi su je time na related che */}
      {/* inital attribute bi hoye jema apde initial Postion bi declare karnakhvau hoye  */}
      {/* whiledrag , whiletap , while .. etx attributes Bi hoye So u can Undranstad and can Do more things */}
      <motion.div 
      inital={{
        
      }}
      animate={{
        x:1000,
        y:500 , 
        rotate:360 ,
         
        
      }}
      transition={{
        duration:2,
          delay:2 , 
          ease:"anticipate" ,
          
        
      }}
      drag
      dragConstraints= {{
        top:0 , 
        right: 1000 , 
        left: 0 ,
        bottom: 0
      }}
      whileHover={{
        backgroundColor:"White",
      }}
      whileTap={{}}
      whileDrag={{
       
        scale:0.9 
      }}
      id="box">

      </motion.div>
      
      

     
    </div>
  )
}

export default App
{/* CSS - Hai Yahase  */}

{/* CSS -   

html , body {
  background-color: #000000;
  color: aliceblue;
  margin: 0;
  padding: 0;
  font-family: 'Times New Roman', Times, serif;
}
#box{
  background: #0018a0;
  padding: 48px;
  height: 40px;
  width: 40px;
  margin: 10px;
  border-radius: 20px;
}

*/}

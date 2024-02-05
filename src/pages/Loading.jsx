// import * as React from "react";
// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 0, scale: 1 }, // Change scale to 1 for hidden state
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// };

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1
//   }
// };

// const Loading = () => (
//   <motion.ul
//     className="container"
//     variants={container}
//     initial="hidden"
//     animate="visible"
//   >
//     {[0, 1, 2, 3].map((index) => (
//       <motion.li key={index} className="item" variants={item} />
//     ))}
//   </motion.ul>
// );

// export default Loading;


import React from 'react'

const Loading = () => {
  return (
    <div className='loader-container'>
    <div className='loader'></div>
    </div>
  )
}

export default Loading


/* HTML: <div class="loader"></div> */

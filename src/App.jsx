// import React, { useState } from "react";

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [num, setNum] = useState(0);
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log(username);
//     setUsername('')
//   };
//   return (
//     <div>
//       <h3 className="text-color text-2xl bg-red-600"> Number is {num} </h3>
//       {/* <h1> Color change is</h1> */}
//       <button onClick={() => setNum(num + 10)}>Increment</button>
//       <button onClick={() => setNum(num - 15)}>Decrement</button>

//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//           className="px-4 rounded py-3 text-xl m-5 text-black"
//           type="text"
//           placeholder="Youtube"
//         ></input>

//         <button className="px-4 text-white py-3 text-xl font-semibold bg-emerald-600 rounded">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

// Adding Css in this code

// Components in React
import React from 'react'
const App = ()=>{
  return (
    <>
     <nav>
       <h2>Amazon</h2>
       <div>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Services</h4>
        <h4>Your Account</h4>
       </div>
     </nav>
    </>
  );
};
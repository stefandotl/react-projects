import React, { useState } from "react";

const Loading = () => {
  return (
    <div>
      <h2>Loading...</h2>
    </div>
  );
};

export default Loading;

// const Loading = () => {
//   const [word, setWord] = useState("");
//   const [show, setShow] = useState(false);

//   const onClick = () => {
//     setShow(true);
//   };

//   const onChange = (e) => {
//     setWord(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Your Word: {word}</h2>
//       <label for="fname">Word: </label>
//       <input
//         type="text"
//         id="fname"
//         name="fname"
//         placeholder="Type"
//         onChange={onChange}
//       />
//       <button onClick={onClick} type="button">
//         Click Me
//       </button>
//     </div>
//   );
// };

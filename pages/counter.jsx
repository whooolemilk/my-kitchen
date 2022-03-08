import { useState } from "react";
export default function Counter() {
  //const [count, setCount] = useState(0);
  let count = 0;
  return (
    <>
      <div>カウンターページです</div>
      <p>{count}</p>
      <button
        className="bg-red-100 p-4 m-1"
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        +1
      </button>
      <button className="bg-blue-100 p-4 m-1" onClick={() => count--}>
        -1
      </button>
    </>
  );
}

import * as React from "react";

export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add Count</button>
    </div>
  );
}

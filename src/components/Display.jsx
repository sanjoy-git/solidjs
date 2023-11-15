import { count, setCount } from "./Count";

export default function Display() {
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count() + 1);
        }}
      >
        increment
      </button>
    </div>
  );
}

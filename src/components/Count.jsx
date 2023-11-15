import { createEffect, createSignal } from "solid-js";

export const [count, setCount] = createSignal(0);
export default function Count() {
  const [count1, setCount1] = createSignal(0);
  createEffect(() => {
    console.log(`count :${count()}`);
    console.log(`count1 :${count1()}`);
  });
  createEffect(() => {
    console.log(`count1 :${count1()}`);
  });
  return (
    <div className=" text-2xl font-bold text-center">
      <p className="bg bg-red-400">{count()}</p>
      <p className="bg bg-red-400">{count1()}</p>
      <button
        onClick={() => {
          setCount(count() + 1);
        }}
      >
        Inc
      </button>
      |
      <button
        onClick={() => {
          setCount(count() - 1);
        }}
      >
        Dec
      </button>
      <br />
      <button
        onClick={() => {
          setCount1(count1() + 1);
        }}
      >
        Inc1
      </button>
      |
      <button
        onClick={() => {
          setCount1(count1() - 1);
        }}
      >
        Dec1
      </button>
    </div>
  );
}

import { ReactNode } from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode,
}

const Counter = ({setCount, children}: CounterProps) => {
  return (
    <>
      <h3>{children}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>+</button>
      <button onClick={() => setCount((prev: number) => {
        if(prev > 0){
          return prev - 1
        }
        return prev;
        }
        )}
        >-</button>
    </>
  )
}

export default Counter

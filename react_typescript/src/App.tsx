import Heading from "./components/Heading"
import Section from "./components/Section"
import Counter from "./components/Counter"
import List from "./components/List";
import { MyList } from "./utils/store";

import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(1)

  return (
    <>
      <Heading title={"Hello, Pedro!"}/>
      <Section title={"Different title"}>This is my section!</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={MyList} render={(item: string) => <span className="gold bold">{item}</span>}/>
    </>
  )
}

export default App
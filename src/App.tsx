import React, { Children, ReactElement, ReactNode, useState } from "react";

import "./App.css";

// default props

function Heading({ title }: { title: string }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({ children }: { children: ReactNode }) {
  return <h2> {children} </h2>;
}

const defaultContainerProps = {
  heading: <strong> This is the heading </strong>,
};
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      {" "}
      <h1>{heading} </h1> {children}{" "}
    </div>
  );
}
Container.defaultProps = defaultContainerProps;
// functional props

function TextWithNumber() {
  const [arr, arrSet] = useState<number[]>([]);
  const [name, nameSet] = useState<string | null>(null);

  return (
    <div>
      <div>
        <button onClick={() => arrSet([...arr, arr.length + 1])}>
          Add to array
        </button>
        {JSON.stringify(arr)}
      </div>
      <div>
        <button onClick={() => nameSet("Mel")}>Set name</button>
        {JSON.stringify(name)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Heading title="Mel Incögnito" />
      <HeadingWithContent>
        {" "}
        <strong>Hello Meli </strong>{" "}
      </HeadingWithContent>
      <Container> This is the content </Container>
      <TextWithNumber></TextWithNumber>
    </div>
  );
}

export default App;

import React from 'react'

const FunctionalComponent = () => {
  const [count, setCount] = React.useState(0);

  const incCount = () => {
    setCount(count + 1);
  }

  React.useEffect(() => {
    console.log("before updating to DOM");

    return () => {
      console.log("componentWillUnmount");
    }
  }, []);

  React.useLayoutEffect(() => {
    console.log("componentDidMount");
  }, []);

  React.useEffect(() => {
    console.log("componentDidUpdate it shouldComponentUpdate alternatyva");

    return () => {
      console.log("Skirta pašalinti efektui");
    }
  }, [count]);

  
  console.log("render");
  return (
    <div>
      <button onClick={incCount}>Inc</button>
      <p>Functional, count: {count}</p>
    </div>
  )
}

export default FunctionalComponent
import { useState } from 'react';
import './App.css';


function App() {
  const products = [
    { name: 'Laptop', company: "Apple" },
    { name: 'Keyboard', company: "keychrone" },
    { name: 'Mouse', company: "Corsair" },
    { name: 'Phone', company: "iPhone" },
    { name: 'watch', company: "Rolex" }
  ]


  return (
    <div className="App">
      <h2 className='simpleComponentText'>Simple components</h2>
      <div className="simple-component">
        <Container name="Tom Hanks" job="Film"></Container>
        <Container name="Tim Cook" job='Apple'></Container>
        <Container name="Steve JObs" job='apple'></Container>
        <Container name="Sheik Hasina" job='BD'></Container>
      </div>

      <h2 className='obj-component'>Component Load Data from object</h2>
      <div className="object-component">
        {
          products.map(product => <Container name={product.name} job={product.company}></Container>)
        }
      </div>

      <h2 className='state'>State in react</h2>
      <Counter></Counter>
    </div>
  );
}

function Container(props) {
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      <h2>Company: {props.job}</h2>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(10);

  const IncreaseCount = () => setCount(count + 1);
  const DecreaseCount = () => setCount(count - 1);
  return (
    <div className="btn-container">
      <button onClick={DecreaseCount}>Decrease</button>
      <h2>{count}</h2>
      <button onClick={IncreaseCount}>Increase</button>
    </div>
  )
}


export default App;

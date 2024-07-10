import React, { ChangeEvent } from 'react'
import { Button } from '../../components/ux/button';

export const UseStatePage = () => {
  const [count, setCount] = React.useState(0);
  const [age, setAge] = React.useState(12);
  const [name, setName] = React.useState('');

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    setCount(count - 1);
  }

  const increaseAge = () => {
    setAge(age + 1);
  }

  const decreaseAge = () => {
    setAge(age - 1);
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  return (
    <div>
      <article>
        <h2>Text input</h2>
        <label htmlFor="name">Name</label>
        <br />
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
      </article>
      <h1>My component</h1>
      <article>
        <h2>Count</h2>
        <Button onClick={increaseCount}>increase</Button>
        <Button onClick={decreaseCount}>decrease</Button>
        <p>Count: {count}</p>
      </article>
      <article>
        <h2>Age</h2>
        <Button onClick={increaseAge}>increase</Button>
        <Button onClick={decreaseAge}>decrease</Button>
        <p>Age: {age}</p>
      </article>

    </div>)
}

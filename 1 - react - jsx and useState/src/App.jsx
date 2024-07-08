import { useEffect, useState } from "react"
import { MyButton } from "./Button";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const [age, setAge] = useState(12);
  const [name, setName] = useState('');

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

  const handleNameChange = (event) => {
    setName(event.target.value)
  }


  // useEffect(funkcijaKuriVykdosiKuometKeiciasiKintamieji, [kintamiejiKurieStebimi])
  useEffect(function onFirstRender() {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_per_page=10`)
      .then(response => response.json())
      .then(setTodos)
  }, [page])

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
        <MyButton onClick={increaseCount}>increase</MyButton>
        <MyButton onClick={decreaseCount}>decrease</MyButton>
        <p>Count: {count}</p>
      </article>
      <article>
        <h2>Age</h2>
        <MyButton onClick={increaseAge}>increase</MyButton>
        <MyButton onClick={decreaseAge}>decrease</MyButton>
        <p>Age: {age}</p>
      </article>
      <article>
        <h2>Todos</h2>
        <MyButton onClick={() => setPage(1)}>1</MyButton>
        <MyButton onClick={() => setPage(2)}>2</MyButton>
        <MyButton onClick={() => setPage(3)}>3</MyButton>
        <MyButton onClick={() => setPage(4)}>4</MyButton>
        <MyButton onClick={() => setPage(5)}>5</MyButton>
        {todos.length === 0 ? <p>Loading...</p> : (
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        )}

      </article>
    </div>
  )
}


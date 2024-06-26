import React from 'react';
import { MyButton } from '../../components/my-button';

export const UseEffectPage = () => {

  const [todos, setTodos] = React.useState([]);
  const [page, setPage] = React.useState(1);

  // useEffect(funkcijaKuriVykdosiKuometKeiciasiKintamieji, [kintamiejiKurieStebimi])
  React.useEffect(function onFirstRender() {
    fetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_per_page=10`)
      .then(response => response.json())
      .then(setTodos)
  }, [page]);


  return (
    <div>
      <h1>UseEffectPage</h1>
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

import React from 'react';
import { MyButton } from '../../components/my-button';
import { useLocalStorage } from '../../hooks/use-local-storage';
import { useFetch } from '../../hooks/use-fetch';

export const UseEffectPage = () => {
  const [page, setPage] = React.useState(1);
  const [todos, { isLoading }] = useFetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_per_page=10`);
  const [name, setName] = useLocalStorage('name', undefined);

  React.useEffect(() => {
    if(name === undefined) {
      const newName = window.prompt('Enter your name');
      setName(newName);
    }
  }, []);

  return (
    <div>
      <h1>UseEffectPage</h1>
      { name && (
        <p>Hello {name}</p>
      )}
      <article>
        <h2>Todos</h2>
        <MyButton onClick={() => setPage(1)}>1</MyButton>
        <MyButton onClick={() => setPage(2)}>2</MyButton>
        <MyButton onClick={() => setPage(3)}>3</MyButton>
        <MyButton onClick={() => setPage(4)}>4</MyButton>
        <MyButton onClick={() => setPage(5)}>5</MyButton>
        {isLoading ? <p>Loading...</p> : (
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

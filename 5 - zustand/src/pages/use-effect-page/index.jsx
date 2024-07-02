import { Button } from "src/components/ux/button";
import { useFetch } from "src/hooks/use-fetch";
import { useUrlState } from "src/hooks/use-url-state";


const  pageNumbers = [1, 2, 3, 4, 5];

export const UseEffectPage = () => {
  const [page, setPage] = useUrlState('page', 1);
  const [todos, { isLoading }] = useFetch(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_per_page=10`);


  return (
    <div>
      <h1>UseEffectPage</h1>
      <article>
        <h2>Todos</h2>
        {pageNumbers.map(pageNumber => (
          <Button key={pageNumber} onClick={() => setPage(pageNumber)} isActive={pageNumber === page}>{pageNumber}</Button>

        ))}
    
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

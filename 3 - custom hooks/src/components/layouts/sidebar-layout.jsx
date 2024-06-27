import { routes } from '../../navigation/router'
import { Link, Outlet } from 'react-router-dom'

const SidebarLayout = () => {
  return (
    <div>
      <aside>
        <nav>
          <ul>
            {Object.entries(routes).map(([name, url]) => (
              <li key={name}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default SidebarLayout
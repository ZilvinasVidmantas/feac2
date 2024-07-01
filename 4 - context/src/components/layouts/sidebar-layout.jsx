import { routes } from '../../navigation/router'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './sidebar-layout.module.scss'
import clsx from 'clsx';
import { Navbar } from './navbar';

const SidebarLayout = () => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <nav>
          <ul>
            {Object.values(routes).map(({ name, link }) => (
              <li key={name}>
                <NavLink to={link} className={({ isActive }) => clsx(
                  styles.link,
                  isActive && styles.active
                )} >{name}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div>
        <Navbar />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default SidebarLayout
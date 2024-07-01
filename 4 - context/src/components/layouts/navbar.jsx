import styles from './navbar.module.scss';
import { useAuth } from '../../store/auth';

export const Navbar = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className={styles.navbar}>{
      user !== null ?
        <div>
          <span>{user.email}</span>
        </div> :
        <div>
          <span>Not logged in</span>
        </div>
    }</div>
  )
}
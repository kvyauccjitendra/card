import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.contain}>
      <h2 className={styles.logo}>Hello! Kavya</h2>
      <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header

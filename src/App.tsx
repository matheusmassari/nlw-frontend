import styles from "./App.module.scss"
import LoginBox from "./components/LoginBox/LoginBox"
import MessageList from "./components/MessageList/MessageList"

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <LoginBox />
      <MessageList />
    </main>
  )
}

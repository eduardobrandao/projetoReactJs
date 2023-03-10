import { Header } from "./components/Header";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import { Post } from "./components/Post";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}

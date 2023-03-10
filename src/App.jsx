import { Header } from "./components/Header";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h1>
            Hello Word Hello WordHello WordHello WordHello WordHello WordHello
            WordHello WordHello WordHello WordHello WordHello WordHello
            WordHello WordHello WordHello WordHello WordHello WordHello
            WordHello WordHello WordHello WordHello WordHello WordHello
            WordHello WordHello WordHello WordHello WordHello WordHello
            WordHello WordHello WordHello WordHello WordHello WordHello
            WordHello WordHello WordHello WordHello WordHello WordHello Word !!!
          </h1>
        </main>
      </div>
    </div>
  );
}

import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/eduardobrandao.png"
          />
          <div className={styles.authorInfo}>
            <strong>Carlos Eduardo Brandão</strong>
            <span>Enginner Software</span>
          </div>
        </div>
        <time title="11 de Março às 12:22h" dateTime="2023-03-11 12:22:3">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é Ignite
          Feed 🚀
        </p>
        <p>
          👉 <a href="/"> https://github.com/eduardobrandao/projetoReactJs</a>
        </p>
        <p>
          <a href="">#novoprojeto #nlw #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}

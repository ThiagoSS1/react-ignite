import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/thiagoss1.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Thiago De Seta</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de maio às 8:13h' dateTime='2023-05-11'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>fala galera, beleza?

          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p> <a href="#"> jane.design/doctorcare</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong> Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe seu comentario'
        />
        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>

    </article>
  )
}
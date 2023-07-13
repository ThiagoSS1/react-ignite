import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment () {
  return (
    <div className={styles.comment}>
      <Avatar  hasBorder={false} src="https://github.com/thiagoss1.png" alt="" />

      <div className={styles.commentBox}>
         <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Thiago De Seta</strong>
                 <time title='11 de maio as 8:13' dateTime='2023-05-11 08:13:30'> Publicado ha 1h</time>
              </div>

              <button title='Deletar comentario'>
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom Devon, parabens!! </p>
         </div>

         <footer>
          <button>
            <ThumbsUp size={20} />
             Aplaudir <span> 20</span>
          </button>
         
          </footer>
      </div>
    </div>
  )
}
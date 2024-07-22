import style from '../../layouts/empty-theme/counter-task.module.css'

export function CounterTask({ createdTasks, finishedTasks }) {
  return (
    <div>
        <div className={style.topList}>

            <div className={style.counter1}>
                <p>
                    Tarefas Criadas
                </p>
                <span>{createdTasks}</span>
            </div>

            <div className={style.counter2}>
                <p>
                    Concluídas
                </p>
                <span>{finishedTasks} de {createdTasks}</span>
            </div>

        </div>
    </div>
  )
}
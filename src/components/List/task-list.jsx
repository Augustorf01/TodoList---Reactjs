// import { useState } from 'react'
import style from '../../layouts/task-list.module.css'
import { Trash2 } from 'lucide-react'
// import PropTypes from 'prop-types';

export function TaskList({ task, removeTask, IsCompleted }) {

    return (
        <div className={style.divList}>
            {task.map((t) => (
                <div key={t.id} className={style.divTask}>
                    <input onClick={() => IsCompleted(t.id, t.IsCompleted)} id={t.id} type="checkbox" placeholder='status' />
                    <label htmlFor={t.id}>{t.Title}</label>

                    <button onClick={() => removeTask(t.id)} className={style.buttonTrash} title='Deletar' alt='' >
                        <Trash2 className={style.trash} size={20} alt='' />
                    </button>

                </div>
            ))}
        </div>
    )
}

// Tipagem da função tasklist em js --> melhor tipar com typeScript depois
// TaskList.propTypes = {
//     task: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         Title: PropTypes.string.isRequired,
//     })).isRequired,
//     removeTask: PropTypes.func.isRequired,
// };
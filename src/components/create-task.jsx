import styles from '../layouts/create-task.module.css'
import plus from '../assets/plus.svg'
import { useState } from 'react'

export function CreateTask({ handleList }) {

    const [input, setInput] = useState('')

    const handleAddTask = () => {
        if (input.length > 0) {
            handleList(input);
            setInput('');
        }
      };

    return (
        <div className={styles.div}>

            <input
                className={styles.input} 
                type="text" 
                placeholder="  Adicione uma nova tarefa"
                value={input} // usar o state para controlar o input do usuario.
                onChange={(e) => setInput(e.target.value)} // usar o onChange para atualizar o state quando o usuario digita.
            />
            <button type='submit' className={styles.button} onClick={handleAddTask}>
                Criar 
                <img src={plus} alt=''/>
            </button>

        </div>
    )
}
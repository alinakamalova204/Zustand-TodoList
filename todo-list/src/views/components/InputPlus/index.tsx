import React, {useCallback, useState} from "react";
import styles from './index.module.scss'
interface InputPlusProps {
    onAdd: (title: string) => void;
}

export const InputPlus: React.FC<InputPlusProps> = ({
    onAdd,
}) => {
    const [input, setValue] = useState('');
    const addTask = useCallback(() => {
        onAdd(input);
        setValue('')
    }, [input])
    return (
        <div className={styles.inputPlus}>
            <input
                type={"text"}
                className={styles.inputPlusValue}
                value={input}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={event => {
                    if (event.key === 'Enter') {
                        addTask()
                    }
                }}
                placeholder="Type here"
            />
            <button
                onClick={addTask}
                aria-label="Add"
                className={styles.inputPlusButton}
            >Add</button>
        </div>
    )
}
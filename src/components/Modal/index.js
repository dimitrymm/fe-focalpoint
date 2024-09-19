import PropTypes, { func } from 'prop-types';
import styles from './Modal.module.scss';
import { useState } from 'react';

export default function Modal({ isDeleted, onClose, onSubmit, onClick }) {
    const [taskName, setTaskName] = useState('');

    function handleTaskNameChange(event) {
        setTaskName(event.target.value);
    }

    function createTask() {
        onSubmit(taskName);
        onClose();
    }

    if (isDeleted) {
        return (
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <h1>Deletar tarefa</h1>
                    <div className={styles.itemInput}>
                        <span>
                            Tem certeza que você deseja deletar essa tarefa?
                        </span>
                    </div>

                    <div className={styles.wrapButtons}>
                        <button onClick={onClose} className={styles.cancel}>
                            Cancelar
                        </button>
                        <button
                            value={taskName}
                            onClick={onClick}
                            className={styles.delete}
                        >
                            Deletar
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <h1>Nova Tarefa</h1>
                    <div className={styles.itemInput}>
                        <span>Titulo</span>
                        <input
                            type="text"
                            value={taskName}
                            placeholder="Digite"
                            onChange={handleTaskNameChange}
                        />
                    </div>

                    <div className={styles.wrapButtons}>
                        <button onClick={onClose} className={styles.cancel}>
                            Cancelar
                        </button>
                        <button className={styles.add} onClick={createTask}>
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
Modal.propTypes = {
    danger: PropTypes.bool,
    onClose: PropTypes.func,
};

import ToDoItem from '../ToDoItem';
import styles from './CompleteTasksList.module.scss';

export default function CompleteTasksList({
    completedTasks,
    handleOpenDeleteModal,
    handleToggleTask,
}) {
    return (
        <main className={styles.main}>
            <div>
                <h1>Tarefas Finalizadas</h1>
                {completedTasks.map((task) => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        onClick={handleOpenDeleteModal}
                        onToggle={handleToggleTask}
                    />
                ))}
            </div>
        </main>
    );
}

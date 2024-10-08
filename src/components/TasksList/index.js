import ToDoItem from '../ToDoItem';
import styles from './TasksList.module.scss';

export default function TasksList({
    tasks,

    handleOpenDeleteModal,
    handleToggleTask,
}) {
    return (
        <main className={styles.main}>
            <h1>Suas Tarefas de Hoje</h1>
            <div>
                {tasks.map((task) => (
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

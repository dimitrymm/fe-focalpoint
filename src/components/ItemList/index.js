import ToDoItem from '../ToDoItem';
import styles from './ItemList.module.scss';

export default function ItemList({
    tasks,
    completedTasks,
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

            <div>
                <h1>Tarefas Finalizadas</h1>
                {completedTasks.map((task) => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        onClick={handleOpenDeleteModal}
                    />
                ))}
            </div>
        </main>
    );
}

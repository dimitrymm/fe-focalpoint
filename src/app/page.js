'use client';
import Image from 'next/image';
import styles from './page.module.scss';
import logo from '../assets/images/logo.png';
import trash from '../assets/icons/trash.png';
import Button from '@/components/Button';
import ToDoItem from '@/components/ToDoItem';
import Header from '@/components/Header';
import { useState } from 'react';
import Modal from '@/components/Modal';
import { func } from 'prop-types';
import ItemList from '@/components/ItemList';

export default function Home() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Lavar as mãos', isChecked: false },
        { id: 2, text: 'Fazer um Bolo', isChecked: false },
        { id: 3, text: 'Lavar a louça', isChecked: false },
        { id: 4, text: 'Levar o lixo para fora', isChecked: false },
    ]);
    const [completedTasks, setCompletedTasks] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    function handleToggleTask(taskId) {
        const task = tasks.find((task) => task.id === taskId);
        if (task) {
            setTasks(tasks.filter((task) => task.id !== taskId));
            setCompletedTasks([...completedTasks, task]);
        }
    }
    function handleToggleRemoveTask(taskId) {
        const task = completedTasks.find((task) => task.id === taskId);
        if (task) {
            setCompletedTasks(
                completedTasks.filter((task) => task.id !== taskId),
            );
            setTasks([...tasks, task]);
        }
    }
    function handleOpenModal() {
        setIsModalOpen(true);
    }
    function handleCloseModal() {
        setIsModalOpen(false);
    }
    function handleOpenDeleteModal(id) {
        setSelectedTaskId(id);
        setIsDeleteModalOpen(true);
    }
    function handleCloseDeleteModal() {
        setIsDeleteModalOpen(false);
    }

    function handleAddTask(taskName) {
        if (!taskName) {
            alert('Digite uma Tarefa!');
        } else {
            const task = {
                id: tasks.length + 1,
                text: taskName,
                isChecked: false,
            };
            setTasks([...tasks, task]);
        }
    }

    function handleRemoveTask() {
        setTasks(tasks.filter((task) => task.id !== selectedTaskId));
        setCompletedTasks(
            completedTasks.filter((task) => task.id !== selectedTaskId),
        );

        handleCloseDeleteModal();
    }

    return (
        <>
            <Header />
            {isModalOpen && (
                <Modal onSubmit={handleAddTask} onClose={handleCloseModal} />
            )}
            {isDeleteModalOpen && (
                <Modal
                    onClick={handleRemoveTask}
                    isDeleted={isDeleteModalOpen}
                    onClose={handleCloseDeleteModal}
                />
            )}
            <div className={styles.block}>
                <ItemList
                    completedTasks={completedTasks}
                    handleOpenDeleteModal={handleOpenDeleteModal}
                    handleToggleTask={handleToggleTask}
                    tasks={tasks}
                />

                <button onClick={handleOpenModal} className={styles.button}>
                    Adicionar nova Tarefa
                </button>
            </div>
        </>
    );
}
{
    /* <main className={styles.main}>
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
</main> */
}

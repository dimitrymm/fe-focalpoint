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

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }

    return (
        <>
            <Header />
            {isModalOpen && <Modal onClose={handleCloseModal} />}

            <div className={styles.block}>
                <main className={styles.main}>
                    <div className={styles.mainContainer}>
                        <h1>Suas Tarefas de Hoje</h1>
                        <div>
                            <ToDoItem onClick={handleOpenModal} />
                            <ToDoItem />
                            <ToDoItem />
                            <ToDoItem />
                            <ToDoItem />
                            <ToDoItem />
                            <ToDoItem />

                            <h1>Tarefas Finalizadas</h1>
                            <ToDoItem />
                        </div>
                    </div>
                </main>

                <Button onClick={handleOpenModal}>Adicionar nova tarefa</Button>
            </div>
        </>
    );
}

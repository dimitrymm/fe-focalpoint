'use client';
import Image from 'next/image';
import trash from '@/assets/icons/trash.png';
import styles from './ToDoItem.module.scss';
import { useState } from 'react';
import chbase from '@/assets/icons/chbase.png';
import check from '@/assets/icons/check.png';
import Modal from '../Modal';

export default function ToDoItem({ onClick, task, onToggle, onRestore }) {
    const [isChecked, setIsChecked] = useState(task.isChecked);

    function handleVerifyToDo() {
        setIsChecked(!isChecked);
        task.isChecked = !isChecked;

        if (onToggle) {
            onToggle(task.id);
        } else if (onRestore) {
            onRestore(task.id);
        }
    }

    return (
        <div className={styles.toList}>
            <label className={styles.itemToDo} onClick={handleVerifyToDo}>
                <Image
                    src={isChecked ? check : chbase}
                    alt="checkbox"
                    className={styles.checkbox}
                />

                <span className={isChecked ? styles.checked : ''}>
                    {task.text}
                </span>
            </label>
            <Image
                onClick={() => onClick(task.id)}
                className={styles.imageTrash}
                src={trash}
                alt="trash"
            />
        </div>
    );
}

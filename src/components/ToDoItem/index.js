'use client';
import Image from 'next/image';
import trash from '@/assets/icons/trash.png';
import styles from './ToDoItem.module.scss';
import { useState } from 'react';
import chbase from '@/assets/icons/chbase.png';
import check from '@/assets/icons/check.png';

export default function ToDoItem({ onClick }) {
    const [isChecked, setIsChecked] = useState(false);

    function handleCheckToDo() {
        setIsChecked(!isChecked);
    }

    return (
        <div className={styles.toList}>
            <label className={styles.itemToDo} onClick={handleCheckToDo}>
                <Image
                    src={isChecked ? check : chbase}
                    alt="checkbox"
                    className={styles.checkbox}
                />

                <span className={isChecked ? styles.checked : ''}>
                    Lavar as mãos
                </span>
            </label>
            <Image
                onClick={onClick}
                className={styles.imageTrash}
                src={trash}
                alt="trash"
            />
        </div>
    );
}

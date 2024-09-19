import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <div className={styles.container}>
            <Image src={logo} alt="logotipo" />
            <h1>Bem-vindo de volta , Dimitry</h1>
            <span>Segunda, 01 de Dezembro de 2025</span>
        </div>
    );
}

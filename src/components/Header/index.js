import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import styles from './Header.module.scss';

export default function Header() {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const dateObj = new Date(`${year}-${month}-${day}`);
    const dataString = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    };
    const outputDataString = dateObj.toLocaleString('pt-BR', dataString);
    const capitalizedOutput = outputDataString.replace(
        /(^\w{1})|(\s\w{1})/g,
        (match) => match.toUpperCase(),
    );

    return (
        <div className={styles.container}>
            <Image className={styles.logo} src={logo} alt="logotipo" />

            <h1>Bem-vindo de volta , Dimitry</h1>

            <span>{capitalizedOutput}</span>
        </div>
    );
}

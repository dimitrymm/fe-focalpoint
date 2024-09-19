import Button from '../Button';
import PropTypes, { func } from 'prop-types';
import styles from './Modal.module.scss';

export default function Modal({ danger, onClose }) {
    function handleCloseModal(event) {}
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <h1>Nova Tarefa</h1>
                <div className={styles.itemInput}>
                    <span>Titulo</span>
                    <input type="text" placeholder="Digite" />
                </div>

                <div className={styles.wrapButtons}>
                    <Button onClick={onClose}>Cancelar</Button>
                    <Button>Adicionar</Button>
                </div>
            </div>
        </div>
    );
}
Modal.propTypes = {
    danger: PropTypes.bool,
    onClose: PropTypes.func,
};

import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export default function Button({ type, children, onClick }) {
    return (
        <button onClick={onClick} className={styles.button}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

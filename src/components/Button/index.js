import styles from './Button.module.scss';
import PropTypes from 'prop-types';

export default function Button({ type, children, onClick }) {
    const className = `styles.button`;
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import styles from './button.module.scss';
import clsx from 'clsx';

export function Button({
  onClick,
  children,
  variant = 'primary',
  isActive = false,
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styles[variant], isActive && styles.active)}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool,
  variant: PropTypes.oneOf(['primary'])
};
import styles from './button.module.scss';
import clsx from 'clsx';

export interface ButtonProps{
  onClick: JSX.IntrinsicElements['button']['onClick'];
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  isActive?: boolean;
}

export function Button({
  onClick,
  children,
  variant = 'primary',
  isActive = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(styles.button, styles[variant], isActive && styles.active)}
    >
      {children}
    </button>
  )
}



import styles from "../../styles/button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;

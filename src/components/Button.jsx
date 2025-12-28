import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick,
  className = '',
  ...props 
}) {
  return (
    <button 
      className={`btn btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
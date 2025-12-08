const Button = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-medium transition-all duration-300 rounded-lg inline-flex items-center justify-center";

  const variants = {
    primary: "bg-secondary text-white hover:bg-opacity-90",
    secondary: "bg-primary text-white hover:bg-opacity-90",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
    "outline-light":
      "border-2 border-white text-white hover:bg-white hover:text-primary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

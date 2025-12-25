import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white' | 'dark';
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-primary-500/30",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    white: "bg-white text-primary-900 hover:bg-gray-100 shadow-lg",
    dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/20"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </motion.button>
  );
};

export default Button;
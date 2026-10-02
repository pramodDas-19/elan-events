import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'large';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className = '',
  onClick,
  href,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300';
  
  const variants = {
    primary: 'bg-accent-burgundy text-white hover:bg-accent-burgundy/90',
    secondary: 'bg-accent-gold text-primary-text hover:bg-accent-gold/90',
    outline: 'border-2 border-accent-burgundy text-accent-burgundy hover:bg-accent-burgundy hover:text-white'
  };
  
  const sizes = {
    default: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base'
  };

  const buttonContent = (
    <>
      {children}
      {variant !== 'outline' && <ArrowRight className="ml-2 w-4 h-4" />}
    </>
  );

  const MotionButton = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {buttonContent}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </MotionButton>
  );
}

import * as React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit',
  variant?: 'primary' | 'facebook';
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary'
}) => {
  const getButtonStyle = () => {
    switch(variant) {
      case 'facebook':
        return 'bg-blue-500 text-white';
      case 'primary':
      default:
        return 'bg-[#0095f6] text-white';
    }
  };
  return (
    <div></div>
  );
}
 
export default Button;
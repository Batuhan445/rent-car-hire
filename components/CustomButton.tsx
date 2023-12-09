import Image from 'next/image';
import React from 'react';

interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handleClick?: () => void;
  btnType?: 'button' | 'submit' | 'reset';
  rightIcon: string; // Add the rightIcon prop here
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, containerStyles, handleClick, btnType, rightIcon }) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className="flex-1">{title}</span>

      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image src={rightIcon} alt="Right Arrow" fill className='object-contain' />
        </div>)}

    </button>
  );
}

export default CustomButton;

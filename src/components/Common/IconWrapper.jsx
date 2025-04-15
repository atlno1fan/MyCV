// src/components/common/IconWrapper.jsx
export const IconWrapper = ({ 
    icon: Icon, 
    size = "default",
    className = '' 
  }) => {
    const sizeClasses = {
      small: 'w-4 h-4',
      default: 'w-6 h-6',
      large: 'w-8 h-8'
    };
  
    return (
      <Icon className={`text-violet-400 ${sizeClasses[size]} ${className}`} />
    );
  };
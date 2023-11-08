import { useRef } from 'react';

const useBackdropMenu = () => {
  const backdropRef = useRef(null);

  const handleMouseEnter = (element) => {
    const { left, top, width, height } = element.target.getBoundingClientRect();
    const backdropStyle = backdropRef.current.style;

    backdropStyle.setProperty('--top', `${top}px`);
    backdropStyle.setProperty('--left', `${left}px`);
    backdropStyle.setProperty('--width', `${width}px`);
    backdropStyle.setProperty('--height', `${height}px`);
    backdropStyle.opacity = '1';
    backdropStyle.visibility = 'visible';
  };

  const handleMouseLeave = () => {
    const backdropStyle = backdropRef.current.style;
    backdropStyle.opacity = '0';
    backdropStyle.visibility = 'hidden';
  };

  return { handleMouseEnter, handleMouseLeave, backdropRef };
};

export default useBackdropMenu;

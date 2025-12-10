import React, { useRef } from 'react';

const HoverBox = () => {
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    const rect = box.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) - 0.5;
    const yPercent = (y / rect.height) - 0.5;

    const rotateX = yPercent * 50; 
    const rotateY = -xPercent * 50;

    box.style.transform = `
      perspective(600px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(0.95)
    `;
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    box.style.transform = `
      perspective(600px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={boxRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: 'lightblue',
        borderRadius: '12px',
        transition: 'transform 0.15s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      3D Box
    </div>
  );
};

export default HoverBox;

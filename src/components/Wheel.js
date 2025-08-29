import React, {useEffect, useRef } from 'react';
import './Wheel.css';

// Helper function to generate colors
const getColor = (index, total) => {
  return `hsl(${(index * (360 / total)) % 360}, 70%, 50%)`;
};

function Wheel({ options, isSpinning, winner }) {
  const wheelRef = useRef(null);

  useEffect(() => {
    if (isSpinning) {
      const winnerIndex = options.indexOf(winner);
      const segmentAngle = 360 / options.length;
      // Calculate a random degree within the winner's segment
      const randomOffset = Math.random() * segmentAngle - (segmentAngle / 2);
      const finalAngle = (360 - winnerIndex * segmentAngle) + randomOffset;
      
      // Add multiple rotations for visual effect
      const totalRotation = 360 * 10 + finalAngle;

      // Apply the rotation via a CSS variable
      if (wheelRef.current) {
        wheelRef.current.style.setProperty('--rotation', `${totalRotation}deg`);
        wheelRef.current.classList.add('spinning');
      }
    } else {
        if (wheelRef.current) {
            wheelRef.current.classList.remove('spinning');
        }
    }
  }, [isSpinning, winner, options]);

  const segmentAngle = 360 / options.length;

  return (
    <div className="wheel-container">
      <div className="wheel-pointer"></div>
      <div ref={wheelRef} className="wheel">
        {options.map((option, index) => (
          <div
            key={index}
            className="wheel-segment"
            style={{
              '--angle': `${segmentAngle}deg`,
              '--rotation': `${index * segmentAngle}deg`,
              '--bg-color': getColor(index, options.length),
            }}
          >
            <span>{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wheel;
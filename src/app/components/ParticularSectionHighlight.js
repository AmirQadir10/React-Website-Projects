'use client'

import { useEffect } from 'react';

function ParticularSectionHighlight() {
  useEffect(() => {
    const addEventListeners = (elementId, mouseOverFn, mouseOutFn) => {
      const element = document.getElementById(elementId);

      if (element) {
        element.addEventListener('mouseover', mouseOverFn);
        element.addEventListener('mouseout', mouseOutFn);
      }
    };

    const mouseOver = (id) => {
      return () => {
        const bar = document.getElementById(`barchangebyhover${id}`);
        
        
        
        if (bar) {
          bar.style.display = 'block';
        }
        
      };
    };

    const mouseOut = (id) => {
      return () => {
        const bar = document.getElementById(`barchangebyhover${id}`);
        
        
        
        if (bar) {
          bar.style.display = 'none';
        }
        
          };
    };

    // Add event listeners for each section
    for (let i = 1; i <= 9; i++) {
      addEventListeners(`barchangebyhover${i}-section`, mouseOver(i), mouseOut(i));
    
    }
  }, []);

  return (
    <div>
      {/* Your HTML content here */}
    </div>
  );
}

export default ParticularSectionHighlight;
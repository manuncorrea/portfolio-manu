import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
}

const TypingEffect = ({ text }: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (!reverse) {
        setDisplayedText(prev => text.slice(0, index + 1));
        index += 1;
        if (index === text.length) {
          setReverse(true);
          index -= 1;
        }
      } else {
        if (index < 1) {
          setReverse(false);
          index = 0;
        } else {
          setDisplayedText(prev => text.slice(0, index));
          index -= 1;
        }
      }
    }, 150);  

    return () => clearInterval(intervalId);
  }, [reverse, text]);

  return <span className='text-3xl text-purple-500'>{displayedText}</span>;
};

export default TypingEffect;

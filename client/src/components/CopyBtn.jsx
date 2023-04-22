import React, { useState } from 'react';

function CopyButton(props) {
  const [isCopied, setIsCopied] = useState(false);

  function handleClick() {
    const targetElement = document.getElementById(props.targetElementId);
    if (targetElement) {
      navigator.clipboard.writeText(targetElement.innerText);
      setIsCopied(true);
    }
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <button onClick={handleClick}>
      {isCopied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default CopyButton;

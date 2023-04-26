import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <FontAwesomeIcon icon="fa-regular fa-clipboard" onClick={handleClick}/>
  );
}

export default CopyButton;

import React, { useState } from 'react';
import Button from "react-bootstrap"

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
    <Button onClick={handleClick}>
      {isCopied ? 'Copied!' : 'Copy'}
    </Button>
  );
}

export default CopyButton;
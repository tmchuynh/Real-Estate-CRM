import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@mui/material';

function CopyButton(props) {
  const [isCopied, setIsCopied] = useState(false);
  const {target} = props;
  
  function handleCopy() {
    const targetElement = document.getElementById(target);
    if (targetElement) {
      navigator.clipboard.writeText(targetElement.innerText);
      setIsCopied(true);
    }
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Tooltip title="Copy" >
      <FontAwesomeIcon icon={faClipboard} onClick={handleCopy} />
    </Tooltip>
  );
}

export default CopyButton;
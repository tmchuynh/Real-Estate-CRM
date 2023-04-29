import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from '@mui/material';

function CopyButton(props) {
  const [setIsCopied] = useState(false);
  const {target} = props;
  
  function handleCopy() {
    //check if email or ph# was clicked
    // let target;
    // email ? target = email : target = phoneNumber;
    //copy the text from target elem
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
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@mui/material'

function CopyButton(props) {
  const [isCopied, setIsCopied] = useState(false);
  

  function handleCopy() {
    //check if email or ph# was clicked
    let target;
    if (props.email) {
      target = props.email
    } else target = props.phoneNumber;
    //copy the text from target elem
    const targetElement = document.getElementById(target);
    console.log(props);
    if (targetElement) {
      navigator.clipboard.writeText(targetElement.innerText);
      setIsCopied(true);
    }

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <Tooltip title="Copy">
      <FontAwesomeIcon icon={faClipboard} onClick={handleCopy} />
    </Tooltip>
  );
}

export default CopyButton;
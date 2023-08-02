
import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Button } from '@mui/material';

interface CopyButtonProps {
  textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    clipboardCopy(textToCopy)
      .then(() => setCopied(true))
      .catch(() => setCopied(false));
  };

  return (
    <Button
    variant="contained"
    onClick={handleCopyClick}
    style={{ width: '120px' }} 
    >
      {copied ? 'コピー完了' : 'URLコピー'}
    </Button>
  );
};

export default CopyButton;
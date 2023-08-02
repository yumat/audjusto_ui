
import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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
    <Chip icon={<ContentCopyIcon />} sx={{ minWidth: '30%' }} label="URLコピー" onClick={handleCopyClick} />
  );
};

export default CopyButton;
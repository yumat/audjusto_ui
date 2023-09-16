
import React, { useState } from 'react';
import clipboardCopy from 'clipboard-copy';
import { Button } from "@mui/material";
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
    <Button
      sx={{ width: '35%', margin: 1 }}
      variant="outlined"
      color="inherit"
      onClick={handleCopyClick}
      startIcon={<ContentCopyIcon />}
    >
      URLコピー
    </Button>
  );
};

export default CopyButton;
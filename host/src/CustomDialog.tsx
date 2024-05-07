import { css, SerializedStyles } from '@emotion/react';
import { Box } from '@mui/material';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const customCSS: Record<string, SerializedStyles> = {
  dialog: css({
    '.MuiDialog-paper': {
      minWidth: 480,
    },
    '.MuiDialogContent-root': {
      padding: '20px 24px !important',
    },
  }),
  contentContainer: css({
    display: 'flex',
    fontSize: 14,
    justifyContent: 'center',
    whiteSpace: 'pre-line',
    textAlign: 'center',
  }),
  actionContainer: css({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 8,
  }),
};

interface CustomDialogProps extends DialogProps {
  actions?: {
    label: string;
    onClick: () => void;
  }[];
}

export default function CustomDialog(props: CustomDialogProps) {
  const { open, content, title, actions } = props;

  return (
    <Dialog open={open} maxWidth={false} css={customCSS.dialog}>
      <DialogTitle id="message-dialog-title">
        <Box>
          <Typography fontWeight="bolder" fontSize={20}>
            {title}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent
        id="message-dialog-content"
        css={customCSS.contentContainer}
      >
        {content}
      </DialogContent>
      {actions && (
        <DialogActions
          id="message-dialog-footer"
          css={customCSS.actionContainer}
        >
          {actions.map((action, idx) => (
            <Button
              variant={idx ? 'outlined' : 'contained'}
              onClick={action.onClick}
              key={action.label}
            >
              {action.label}
            </Button>
          ))}
        </DialogActions>
      )}
    </Dialog>
  );
}

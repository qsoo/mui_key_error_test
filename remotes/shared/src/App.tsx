import { MouseEvent, useCallback, useState } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { Box, Button, Typography } from '@mui/material';
import CustomDialog from './CustomDialog';
import CustomPopover from './CustomPopover';

const customCSS: Record<string, SerializedStyles> = {
  appContainer: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
};

function App() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState<HTMLElement | null>(
    null,
  );

  const onOpenPopover = useCallback((event: MouseEvent<HTMLButtonElement>) => {
    setPopoverAnchorEl(event.currentTarget);
  }, []);

  const onClosePopover = useCallback(() => {
    setPopoverAnchorEl(null);
  }, []);

  return (
    <>
      <Box css={customCSS.appContainer}>
        <Typography variant="h6">Shared</Typography>
        <br />
        <br />
        <Box css={customCSS.appContainer}>
          <Typography>1. Dialog</Typography>
          <Button
            onClick={() => {
              setDialogOpen(true);
            }}
            variant="contained"
          >
            Open Dialog
          </Button>
        </Box>
        <br />
        <br />
        <Box css={customCSS.appContainer}>
          <Typography>2. Popover</Typography>
          <Button onClick={onOpenPopover} variant="contained">
            Open Popover
          </Button>
          <CustomPopover
            anchorEl={popoverAnchorEl}
            onClose={onClosePopover}
            key="shared-custom-popover"
          />
        </Box>
      </Box>
      <CustomDialog
        open={dialogOpen}
        title="shared dialog"
        content="shared dialog not occured key warning"
        actions={[
          {
            label: 'close',
            onClick: () => {
              setDialogOpen(false);
            },
          },
        ]}
        key="shared-custom-dialog"
      />
    </>
  );
}

export default App;

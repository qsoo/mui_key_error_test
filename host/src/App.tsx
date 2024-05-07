/* eslint-disable @typescript-eslint/no-unsafe-return */
import { lazy, MouseEvent, Suspense, useCallback, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { css, SerializedStyles } from '@emotion/react';
import { Box, Button, Typography } from '@mui/material';
import CustomDialog from './CustomDialog';
import CustomPopover from './CustomPopover';

const NotShared = lazy(() => import('notShared/App'));
const Shared = lazy(() => import('shared/App'));

const customCSS: Record<string, SerializedStyles> = {
  appContainer: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  border: css({
    border: '1px solid #000',
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
    <Box
      css={css({
        display: 'flex',
        width: 'inherit',
        height: 'inherit',
        justifyContent: 'space-between',
        '> *': {
          flexGrow: 1,
        },
      })}
    >
      <Box css={[customCSS.appContainer, customCSS.border]}>
        <Typography variant="h6">hostApp</Typography>
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
          <CustomPopover anchorEl={popoverAnchorEl} onClose={onClosePopover} />
        </Box>
      </Box>
      <Box css={[customCSS.appContainer, customCSS.border]}>
        <ErrorBoundary
          fallback={<div> (NotShared) Something went wrong. </div>}
        >
          <Suspense fallback={<div>loading NotShared</div>}>
            <NotShared />
          </Suspense>
        </ErrorBoundary>
      </Box>
      <Box css={[customCSS.appContainer, customCSS.border]}>
        <ErrorBoundary fallback={<div> (Shared) Something went wrong. </div>}>
          <Suspense fallback={<div>loading Shared</div>}>
            <Shared />
          </Suspense>
        </ErrorBoundary>
      </Box>
      <CustomDialog
        open={dialogOpen}
        title="host-app dialog"
        content="host-app dialog not occured key warning"
        actions={[
          {
            label: 'close',
            onClick: () => {
              setDialogOpen(false);
            },
          },
        ]}
      />
    </Box>
  );
}

export default App;

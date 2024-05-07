import Popover, { PopoverProps } from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

type CustomPopoverProps = Omit<PopoverProps, 'open'>;

export default function CustomPopover(props: CustomPopoverProps) {
  const { anchorEl, onClose } = props;

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );
}

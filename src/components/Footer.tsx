import { Box, Button, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="h3"
        paddingTop={10}
        textAlign="center"
        textTransform="capitalize"
      >
        Ready for Any Team Size
      </Typography>
      <Typography
        variant="caption"
        textAlign="center"
        paddingY={4}
        textTransform="capitalize"
      >
        Optimized For any team size
      </Typography>
      <Box
        display="flex"
        margin="auto"
        justifyContent="center"
        padding={5}
        gap={4}
      >
        <Button variant="contained">Try CodeEnv For Free</Button>
        <Button variant="outlined">Talk To Sales</Button>
      </Box>
    </Box>
  );
};

export default Footer;

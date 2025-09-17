import { Box, Button, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
        variant="h3"
        paddingTop={10}
        textAlign="center"
        textTransform="capitalize"
      >
        Ready for Any Team Size
      </Typography>
      <Typography
        fontSize={{ lg: 24, md: 20, sm: 16, xs: 12 }}
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

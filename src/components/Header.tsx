import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  Link,
  Typography,
} from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';

const links: string[] = ['Products', 'Solutions', 'Pricing', 'Enterprise'];

const Header = () => {
  return (
    <AppBar sx={{ bgcolor: 'transparent', boxShadow: '0' }}>
      <Toolbar>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <ApiIcon sx={{ color: 'black' }} />
          <Box>
            <Tabs component={Link} sx={{ textDecoration: 'none' }}>
              {links.map((link, i) => (
                <Tab
                  sx={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    ':hover': {
                      textDecoration: 'underline',
                      textUnderlineOffset: '5px',
                    },
                  }}
                  key={i}
                  label={link}
                  value={i}
                />
              ))}
            </Tabs>
          </Box>
          <Box display="flex" marginLeft="auto" gap={4}>
            <Button variant="outlined">Talk To Us</Button>
            <Button variant="contained">Try For Free</Button>
          </Box>
        </Box>
      </Toolbar>
      <Box width="100%" height="100vh">
        <video
          width="100%"
          height="50%"
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <Box display="flex" width="100%">
          <Typography
            margin="auto"
            variant="h4"
            color="black"
            textAlign="center"
          >
            Build Your Softwares Hassle Free And With Top Notch Quality
          </Typography>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          gap={4}
          margin="auto"
          marginTop={5}
        >
          <Button variant="outlined">Sign Up With Email</Button>
          <Button variant="contained">Sign Up With Google</Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;

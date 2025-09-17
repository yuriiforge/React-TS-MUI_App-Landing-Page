import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Link,
} from '@mui/material';
import ApiIcon from '@mui/icons-material/Api';
import GoogleIcon from '@mui/icons-material/Google';
import Email from '@mui/icons-material/Email';
import DrawerComponent from './Drawer';
import { CustomTypography } from '../styles';
import { useState } from 'react';

const links: string[] = ['Products', 'Solutions', 'Pricing', 'Enterprise'];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));

  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <AppBar sx={{ bgcolor: 'transparent', boxShadow: '0', position: 'static' }}>
      {isMatch ? (
        <Box display="flex">
          <ApiIcon sx={{ color: 'black', padding: 1 }} />
          <CustomTypography
            sx={{ padding: 0.5, color: 'black' }}
            variant="h6"
            fontFamily="fantasy"
          >
            CodeEnv
          </CustomTypography>
          <DrawerComponent links={links} />
        </Box>
      ) : (
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
              <Tabs
                component={Link}
                value={selectedTab}
                onChange={handleTabChange}
                sx={{ textDecoration: 'none' }}
              >
                {links.map((link, i) => (
                  <Tab
                    key={i}
                    label={link}
                    value={i}
                    sx={{
                      fontWeight: 'bold',
                      textDecoration: 'none',
                    }}
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
      )}

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
          <CustomTypography
            fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
            margin="auto"
            variant="h4"
            color="black"
            textAlign="center"
          >
            Build Your Softwares Hassle Free And With Top Notch Quality
          </CustomTypography>
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          gap={4}
          margin="auto"
          marginTop={5}
        >
          <Button endIcon={<Email />} variant="outlined">
            Sign Up
          </Button>
          <Button color="error" endIcon={<GoogleIcon />} variant="contained">
            Sign Up
          </Button>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;

import { Box, useMediaQuery, useTheme } from '@mui/material';
import type { Content } from './Content';
import { CustomTypography } from '../styles';

interface Props {
  content: Content;
  swap: boolean;
}

const ContentItem = ({ content, swap }: Props) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down('md'));

  return (
    <Box
      display="flex"
      flexDirection={isMatch ? 'column' : 'row'}
      padding={10}
      justifyContent="space-between"
      alignItems="center"
      bgcolor={!swap ? '#fff' : undefined}
    >
      {swap ? (
        <>
          <Box>
            <CustomTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color="#734950"
              padding={3}
              variant="h3"
            >
              {content.title}
            </CustomTypography>
            <CustomTypography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 12 }}
              padding={3}
              variant="caption"
            >
              {content.description}
            </CustomTypography>
          </Box>

          <img
            src={content.img}
            alt={content.title}
            loading="lazy"
            width={isMatch ? '100%' : '50%'}
            style={{
              boxShadow: '10px 10px 20px #ccc',
              borderRadius: 20,
              marginLeft: '10%',
              height: '300px',
              marginTop: '8px',
            }}
          />
        </>
      ) : (
        <>
          <img
            src={content.img}
            alt={content.title}
            loading="lazy"
            width={isMatch ? '100%' : '50%'}
            style={{
              boxShadow: '10px 10px 20px #ccc',
              borderRadius: 20,
              marginRight: '10%',
              height: '300px',
            }}
          />
          <Box>
            <CustomTypography
              fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
              color="#734950"
              padding={3}
              variant="h3"
            >
              {content.title}
            </CustomTypography>
            <CustomTypography
              fontSize={{ lg: 24, md: 20, sm: 16, xs: 12 }}
              padding={3}
              variant="caption"
            >
              {content.description}
            </CustomTypography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;

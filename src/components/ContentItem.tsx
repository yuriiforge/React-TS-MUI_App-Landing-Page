import { Box, Typography } from '@mui/material';
import type { Content } from './Content';

interface Props {
  content: Content;
  swap: boolean;
}

const ContentItem = ({ content, swap }: Props) => {
  return (
    <Box
      display="flex"
      padding={10}
      justifyContent="space-between"
      alignItems="center"
      bgcolor={!swap ? '#fff' : undefined}
    >
      {swap ? (
        <>
          <Box>
            <Typography color="#734950" padding={3} variant="h3">
              {content.title}
            </Typography>
            <Typography padding={3} variant="caption">
              {content.description}
            </Typography>
          </Box>

          <img
            src={content.img}
            alt={content.title}
            loading="lazy"
            width="50%"
            style={{
              boxShadow: '10px 10px 20px #ccc',
              borderRadius: 20,
              marginLeft: '10%',
              height: '300px',
            }}
          />
        </>
      ) : (
        <>
          <img
            src={content.img}
            alt={content.title}
            loading="lazy"
            width="50%"
            style={{
              boxShadow: '10px 10px 20px #ccc',
              borderRadius: 20,
              marginRight: '10%',
              height: '300px',
            }}
          />
          <Box>
            <Typography color="#734950" padding={3} variant="h3">
              {content.title}
            </Typography>
            <Typography padding={3} variant="caption">
              {content.description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItem;

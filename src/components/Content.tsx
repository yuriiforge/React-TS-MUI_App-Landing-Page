import { Box } from '@mui/material';
import ContentItem from './ContentItem';

export type Content = { title: string; description: string; img: string };

const contentArray: Content[] = [
  {
    title: 'Get Things Done',
    description:
      'Use flex if you want the section to expand and fill the remaining space (e.g. full viewport layout).',
    img: '/1.jpg',
  },
  {
    title: 'Get Things Done',
    description:
      'Use flex if you want the section to expand and fill the remaining space (e.g. full viewport layout).',
    img: '/2.jpg',
  },
  {
    title: 'Get Things Done',
    description:
      'Use flex if you want the section to expand and fill the remaining space (e.g. full viewport layout).',
    img: '/3.jpg',
  },
];

const Content = () => {
  return (
    <Box
      bgcolor="#fbf2f2"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      width="100%"
      height="10%"
    >
      {contentArray.map((cont, i) => (
        <ContentItem key={i} content={cont} swap={i % 2 == 0} />
      ))}
    </Box>
  );
};

export default Content;

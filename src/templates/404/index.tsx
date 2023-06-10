import { Box } from './style';

export const NotFoundTemplate = () => {
  return (
    <>
      <Box
        css={{
          padding: '$navHeightMobile 1.25rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}
      >
        <h1>four oh four</h1>
        <Box
          css={{
            display: 'flex',
            justifyContent: 'center'
          }}
        ></Box>
        <p>This page doesn&apos;t exist</p>
      </Box>
    </>
  );
};

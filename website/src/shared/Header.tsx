import { AppBar, Toolbar, Typography, Box, Link } from '@mui/material';

export const Header = () => {
  const base = process.env.PUBLIC_URL || '';
  const home = base + '/#/';
  return (
    <AppBar position="static" color="transparent" sx={{ marginBottom: 4 }}>
      <Toolbar>
        <Link href={home} color="inherit" underline="none">
          <Typography variant="h6" component="div">
            <Box
              sx={{
                verticalAlign: 'middle',
                paddingLeft: '5px',
                width: '175px',
                height: '80px',
              }}
              component="img"
              height="40"
              alt=""
              src="weave-logo.svg"
            />
          </Typography>
        </Link>
        <Box
          sx={{
            marginLeft: 'auto',
          }}
        >
        </Box>
      </Toolbar>
    </AppBar>
  );
};

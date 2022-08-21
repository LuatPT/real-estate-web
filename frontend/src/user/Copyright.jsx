
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './user.css';

function App(props) {

  return (
        <Typography variant="body2" className='copy_right' {...props}>
          {'Copyright © '}
          <Link className='link' href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
}

export default App

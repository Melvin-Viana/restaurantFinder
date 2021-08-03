import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
const LoginLink : React.FC = () => {

    return (<Link color='inherit' href="/login" onClick={e=>e.preventDefault}>
    <Button variant="contained" color="secondary" className={'login-link'}>
    Login
    </Button>
  </Link>)
}

export default LoginLink;
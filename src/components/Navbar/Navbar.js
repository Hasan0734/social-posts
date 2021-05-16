import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';

    const useStyles = makeStyles((theme) => ({
        appBar: {
          borderBottom: `1px solid ${theme.palette.divider}`,
          marginBottom: '30px'
        },
        toolbar: {
          flexWrap: 'wrap',
        },
        toolbarTitle: {
          flexGrow: 1,
        },
        link: {
         '&:hover':{
         textDecoration: 'none'
         },
          margin: theme.spacing(1, 1.5),
          color: 'white',
       
        }
}));

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
        <CssBaseline />
      <AppBar position="static" color="primary" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Social Post
          </Typography>
          <nav>
            <Link variant="button" color="textSecondery" href="/home" className={classes.link}>
             Home
            </Link>
            <Link variant="button" color="textPrimary" href="/posts" className={classes.link}>
              Post
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
            </Link>
          </nav>
          <Button href="#" color="secondary" variant="contained" className={classes.link}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
        </>
    );
};

export default Navbar;
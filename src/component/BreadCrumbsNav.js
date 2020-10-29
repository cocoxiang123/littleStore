import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs, Link } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

function BreadCrumbsNav() {
    const classes = useStyles();
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                <HomeIcon className={classes.icon} />
        Little Store
      </Link>
            <Link
                color="inherit"
                href="/getting-started/installation/"
                onClick={handleClick}
                className={classes.link}
            >
                <WhatshotIcon className={classes.icon} />
        Hot
      </Link>

        </Breadcrumbs>
    )
}

export default BreadCrumbsNav

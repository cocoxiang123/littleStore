import React, { useContext, useState } from 'react'
import { fade, makeStyles, AppBar, Toolbar, IconButton, InputBase, Typography, Drawer, Divider, List } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import { ProductContext } from '../context'
import ListItemLink from './ListItemLink'

function Nav() {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            fontSize: '1.2rem',

        },
        link: {
            textDecoration: 'none',
            color: "#fff"
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        paper: {
            backgroundColor: '#3f51b5',
            color: "#fff"
        },
        list: {
            width: 250,

        }
    }));
    const classes = useStyles();
    const store = useContext(ProductContext);
    const { onChangeSearch, search, onKeyUpChange } = store;
    const [showSideNav, setShowSideNav] = useState(false)
    return (

        <div className={classes.root}>
            <AppBar position="static">

                <Toolbar>
                    <IconButton onClick={() => setShowSideNav(!showSideNav)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" className={classes.title}>
                        <Link to="/" className={classes.link}>
                            Little Store</Link>
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search', 'type': "text", maxLength: 25 }}
                            value={search}
                            onChange={e => onChangeSearch(e.target.value)}
                            onKeyUp={e => onKeyUpChange(e)}

                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={showSideNav} onClose={() => setShowSideNav(!showSideNav)} classes={{ paper: classes.paper }}>
                <List className={classes.list} aria-label="Index">


                    <ListItemLink to="/" primary="Home" icon={<HomeIcon style={{ color: 'white' }} />} />
                    <Divider />


                </List>
            </Drawer>
        </div >
    )
}

export default Nav

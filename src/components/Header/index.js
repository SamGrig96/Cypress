import { useState } from 'react';
import {createStyles, Header, Group, Burger, Paper, Transition, Image,Button} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import  Logo from '../../assets/dananz.png'

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
        marginBottom:'0px !important',
    },
    btn:{
        backgroundColor:'#2C3878'
    },

    dropdown: {
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding:'0 120px',
        [theme.fn.smallerThan('md')]: {
            padding:'0 10px',
        },

    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 32px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('md')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },


}));

const links=[
    {id:1,label:'Home'},
    {id:2,label:'About Us'},
    {id:3,label:'Services'},
    {id:4,label:'Our Teams'},
    {id:5,label:'Contact Us'}]

const  SiteHeader=()=> {
    const [opened, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);
    const { classes, cx } = useStyles();

    const items = links.map((link) => (
        <div key={link.id}>
            {link.label==='Contact Us'?   <Button className={classes.btn}  radius="xs" key={link.id}>
                Contact Us
            </Button>:  <a
                key={link.id}
                href={link.link}
                className={cx(classes.link, { [classes.linkActive]: active === link.link })}
                onClick={(event) => {
                    event.preventDefault();
                    setActive(link.link);
                }}
            >
                {link.label}
            </a>}
        </div>

    ));

    return (

        <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
            <div className={classes.header}>
               <Image width={126} height={54} src={Logo} />
                <Group spacing={5} className={classes.links}>
                    {items}
                </Group>

                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

                <Transition transition="pop-top-right" duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </div>
        </Header>

    );
}

export default SiteHeader
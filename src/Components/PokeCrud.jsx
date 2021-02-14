import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CustomButton from './CustomButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: "210px",
        width: "370px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "-16px",
    },
    checkbox: {
        alignSelf: "flex-start",
        position: "relative",
        marginTop: "-10px",
        marginBottom: "10px"
    },
    name: {
        fontWeight: "bold",
        fontSize: "20px",
        fontFamily: "Prompt",
        margin: "0 0 10px 0"
    },
    followButton: {
        display: "flex",
        flexDirection: "row",
        marginTop: "10px",
        fontFamily: "'Mukta Vaani'",
    },
    control: {
        padding: theme.spacing(2),
    },
    itemsButton: {
        display: "flex",
        justifyContent: "space-between",
        height: "100px",
        alignItems: "flex-end",
        marginRight: "25px",
        marginLeft: "45px"
    },
    itemButton: {
        display: "flex",
        flexDirection: 'row',
        margin: '15px',
        marginRight: "25px"
    },
    chipInfos: {
        backgroundColor: "#FFDE59",
    },
    avatarIcon: {
        marginLeft: "1vw",
        marginBottom: "4px",
        marginTop: "-20px",
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
}));

const YellowCheckbox = withStyles({
    root: {
        color: "black",
        '&$checked': {
            color: "black",
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function MyFollowers(props) {
    console.log(props.poke)
    const [checked, setChecked] = useState([]);
    const [cards, setCards] = useState(null)
    const [myFollowers, setMyFollowers] = useState([])
    const [refreshTable] = useState(true)
    const [refreshCard, setRefreshCard] = useState(false)

    const handleChangeCheckbox = (event) => {
        const toNumber = Number(event.target.value)
        const filterIndex = checked.find((element) => element === toNumber)
        if (filterIndex === undefined) {
            setChecked([...checked, toNumber]);
        } else {
            const filteredArray = checked.filter((element) => {
                return element !== filterIndex
            })
            setChecked(filteredArray)
        }

    };

    const handleChangeGeneralFollow = () => {
        myFollowers.map((item) => {
            checked.map((check) => {
                if (item.id === check) {
                    item.follow = true;
                }
                return '';
            })
            return '';
        })
        setRefreshCard(true);
    }

    const handleGet = () => {
        myFollowers.map((item) => {
            checked.map((check) => {
                if (item.id === check) {
                    item.follow = false;
                }
                return '';
            })
            return '';
        })
        setRefreshCard(true);
    }

    // const handleChangeFollow = (id) => {
    //     myFollowers.map((item) => {
    //         if (item.id === id) {
    //             item.follow = !item.follow;
    //         }
    //         return '';
    //     })
    //     setRefreshCard(true);
    // }

    // const handleChangeFollowing = (id) => {
    //     myFollowers.map((item) => {
    //         if (item.id === id) {
    //             item.follow = !item.follow;
    //         }
    //         return '';
    //     })
    //     setRefreshCard(true);
    // }

    useEffect(() => {
        //refresh and initialize followers
        if (refreshTable)
            setMyFollowers(props.poke)

    }, [refreshTable, props.poke])

    useEffect(() => {
        //refresh buttons follows
        setRefreshCard(false);
        if (myFollowers.length !== 0) {
            setCards(myFollowers.map(({ id, name }) => (
                <Grid key={id} item>
                    <Paper className={classes.paper}>
                        <YellowCheckbox
                            className={classes.checkbox}
                            value={id}
                            onChange={handleChangeCheckbox}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <span className={classes.name}>{name}</span>
                    </Paper>
                </Grid>
            )))
        }
        console.log(myFollowers)
    }, [myFollowers, refreshCard, checked]) // eslint-disable-line

    const classes = useStyles();
    return (
        <div>
            <div className={classes.itemsButton}>
                <div className={classes.itemButton}>
                    <div onClick={() => handleChangeGeneralFollow()}>
                        <CustomButton mb="15px" mr="15px" pr="60px" pl="60px" color="#FFDE59" content="Follow" />
                    </div>
                    <div onClick={() => handleGet()}>
                        <CustomButton mb="15px" pr="60px" pl="60px" color="#FFDE59" content="Unfollow" />
                    </div>
                </div>
                <div className={classes.itemButton} style={{display: 'none'}}>
                    <CustomButton mr="20px" mb="15px" pr="30px" pl="30px" br="15px" color="#FFDE59" content="All" />
                    <CustomButton pr="30px" mb="15px" pl="30px" br="15px" color="#FFDE59" content="Name V" />
                </div>
            </div>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={4}>
                        {cards}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, FormControl, Select } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(2),
        minWidth: 150,
        maxWidth: 250,
        display: 'block',
        float: 'right',
        marginRight: theme.spacing(6)


    },
}));

function SortForm() {
    const classes = useStyles();
    const [sort, setSort] = useState('relevance')
    const handleChange = e => {
        setSort(e.target.value)
    }
    return (
        <FormControl className={classes.formControl}>
            <Typography color="textSecondary">Sort By</Typography>
            <Select native onChange={handleChange} value={sort}
            >

                <option value="relevance">Relevance</option>
                <option value="lowest">Lowest Price</option>
                <option value="highest">Highest Price</option>
            </Select>
        </FormControl>
    )
}

export default SortForm

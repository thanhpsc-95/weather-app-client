import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid'
import CardItem from '../Item/CardItem';

function ListForcast() {
    const [forcastList, setForcastList] = useState([])
    useEffect(() => {
        const getForcastList = async () => {
            return await fetch("https://weather-api-21.azurewebsites.net/WeatherForecast").then(
                res => res.json()).then(data => setForcastList(data));
        }
        getForcastList()
    }, []);
    return (
        <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
        >
            {
                forcastList.map((forcast,idx) => {
                    return (<Grid item xs={12} sm={6} md={3} lg={2} key={forcast.date}>
                        <CardItem idx={idx} summary={forcast.summary} date={forcast.date} temperatureC={forcast.temperatureC} temperatureF={forcast.temperatureF}></CardItem>
                    </Grid>)
                })
            }

        </Grid>
    )
}

export default ListForcast

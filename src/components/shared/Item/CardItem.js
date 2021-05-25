import React from 'react'
import { Card, CardActions, CardContent, CardHeader, CardMedia } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
function CardItem({ date, summary, temperatureC, temperatureF, idx }) {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.languages[0];
    const getCurrentRegionsByLanguage = (language) => {
        return language === "vi" ? "vi-VN" : "en-US"
    }
    return (
        <Card>
            <CardHeader title={t(summary)}></CardHeader>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={`https://loremflickr.com/320/240?random=${idx}`}
                title="Contemplative Reptile"
            />
            <CardContent>
                <p>{t("date")}:{new Intl.DateTimeFormat(getCurrentRegionsByLanguage(currentLanguage)).format(new Date(date))}</p>
                <p>{t("temperatureC")}:{temperatureC}</p>
                <p>{t("temperatureF")}:{temperatureF}</p>
                <p>{t("summary")}:{t(summary)}</p>
            </CardContent>
            <CardActions></CardActions>
        </Card>
    )
}

export default CardItem

import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactCountryFlag from "react-country-flag"
import { IconButton } from '@material-ui/core';

function SelectionLanguage() {
    const { i18n } = useTranslation();
    const currentLanuage = i18n.languages[0];
    const changeLanguage = () => {
        return currentLanuage==="vi"? i18n.changeLanguage("en"):i18n.changeLanguage("vi")
    }
    return (
        <IconButton onClick={changeLanguage}>
            {currentLanuage === "vi" ?
                <ReactCountryFlag
                    countryCode="GB"
                    svg
                    aria-label="Great Britain"
                /> :
                <ReactCountryFlag
                    countryCode="VN"
                    svg
                    aria-label="Việt Nam"
                />}
        </IconButton>
    )
}

export default SelectionLanguage

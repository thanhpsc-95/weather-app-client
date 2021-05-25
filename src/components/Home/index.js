import { Container } from '@material-ui/core'
import React from 'react'
import ListForcast from '../shared/ListItem'
import SelectionLanguage from '../shared/SelectionLanguage/SelectionLanguage'

function Home() {
    return (
        <Container>
            <SelectionLanguage></SelectionLanguage>
            <ListForcast></ListForcast>
        </Container>
    )
}

export default Home

import React from 'react'
import { Button } from 'react-native-paper'
import { setearId } from './Estado'
import MatchScreen from '../screens/MatchScreen'

export default function changeDog () {
    console.log("Perro cambiado")
    return (
        <Button onPress={() => {
            setearId("1762020125361")
            MatchScreen.actualizarState()
        }
        }>Cambiar Perro</Button>
    )
}
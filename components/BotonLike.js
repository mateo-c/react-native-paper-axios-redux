import { Button } from 'react-native-paper'
import axios from 'axios'
import React from 'react'
import { getId, getDogId } from './Estado'


export default function BotonLike(props) {
    return (
        <Button onPress={() => { darLike(props.id, getId(), getDogId()) }}>LIKE!</Button>
    )
}


async function darLike(id, idUsuario, idPerro) {
    let usuarios = [];
    await axios.get(`http://www.hotdogort.ml/api/users`)
        .then(res => {
            usuarios = res.data;
        })
    let usuario;
    for (let i = 0; i < usuarios.length; i++) {
        for (let j = 0; j < usuarios[i].pets.length; j++) {
            if (usuarios[i].pets[j].dogId == id) {
                usuario = usuarios[i]._id;
            }
        }
    }

    console.log(idUsuario + " " + idPerro)
    console.log(usuario + " " + id)

    await axios.post(`http://www.hotdogort.ml/api/likes/${idUsuario}/${idPerro}`, {
        usuarioId: `${usuario}`,
        idLike: `${id}`,
    })
        .then(function (response) {
            console.log(response);
        })

}
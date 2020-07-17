/*
import React from 'react';

export default class Estado extends React.Component {
    state = {
        perros: [],
        _id,
        dogId,
    }

    componentDidMount() { // (aca adentro no se usa el .setState)
        this.state._id = "5f029013c3526f558c444165";
        axios.get(`http://www.hotdogort.ml/api/user/5f029013c3526f558c444165`)
            .then(res => {
                if (res.data != null)
                    this.state.dogId = res.data.pets[0];
                this.state.perros = res.data.pets;
            })
    }

}
*/
let _id// = "5f029013c3526f558c444165";
let dogId// = "6620201932142";
let perros = [];

import axios from 'axios';

export function setearId(idUsuario) {

    axios.get(`http://www.hotdogort.ml/api/users/${idUsuario}`)
        .then(res => {
            if (res.data != null) {
                _id = idUsuario;
                dogId = res.data.pets[0].dogId;
                perros = res.data.pets;
            }
        })
}

export function getId() {
    return _id;
}

export function getDogId() {
    return dogId;
}

export function getPets() {
    return perros;
}


//let _id = "5f029013c3526f558c444165"; //hardoceado a Hernan Francesco
//let dogId = "6620201932142"; //hardcodeado a Toro






//export default { Estado, setearId, getId, getDogId };
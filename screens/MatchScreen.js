import * as React from 'react';
import { Text, Button } from 'react-native-paper';
import { getId, getDogId, getPets } from '../components/Estado';
import PildoraMatch from '../components/PildoraMatch';
import { SafeAreaView, ScrollView } from 'react-native';
import { setearId } from '../components/Estado';
import axios from 'axios';

class MatchScreen extends React.Component {
    state = {
        _id: getId(),
        dogId: getDogId(),
        pets: getPets(),
        petMatches: []
    }

    actualizarState() {
        let estadoEditar = this.state;
        estadoEditar._id = getId();
        estadoEditar.dogId = getDogId();
        this.setState({ estadoEditar });
    }

    actualizarStateMatch(matches) {
        let estadoEditar = this.state;
        estadoEditar._id = getId();
        estadoEditar.dogId = getDogId();
        estadoEditar.petMatches = matches;
        this.setState({ estadoEditar });
    }

    async componentDidMount() {
        let pet = this.state.pets.find(asd => asd.dogId == this.state.dogId);
        let matches = [];
        for (let i = 0; i < pet.matches.length; i++) {
            await axios.get(`http://www.hotdogort.ml/api/pets/${pet.matches[i]}`)
                .then( (res) => {
                    matches.push(res.data)
                })
        }
        this.actualizarStateMatch(matches);
    }

    render() {

        var matches = [];
        /*console.log("petmatches")
        console.log(this.state.petMatches)*/

        let matcheos = this.state.petMatches/*
        let lista = [...this.state.petMatches].map((_, i) => i)
        console.log("lista:")
        console.log(lista)
        console.log(lista[0])*/
        console.log(matcheos)
        console.log(matcheos.length)



        for (let i = 0; i < this.state.petMatches.length; i++) {
            matches.push(
                <PildoraMatch nombre={matcheos[i].dogNick} image={`http://www.hotdogort.ml/images/${matcheos[i].dogPic}`} />
            )
        }
        return (
            <SafeAreaView>
                <ScrollView>
                    {matches}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

export default MatchScreen;
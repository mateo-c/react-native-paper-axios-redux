import React from 'react'
import { TextInput, SafeAreaView } from 'react-native-paper'



const MyComponent = () => {
    const [text, setText] = React.useState('');

    return (
        <SafeAreaView>
            <TextInput
                label="Email"
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Nombre"
                value={text}
                onChangeText={text => setText(text)}
            />
            <TextInput
                label="Apellido"
                value={text}
                onChangeText={text => setText(text)}
            />
        </SafeAreaView>
    );
};

export default MyComponent;
import React from "react";
import { SafeAreaView,Text,View } from 'react-native';

import { Parte1, Parte2 } from './components/Primeiro';

function App() {
    return (
    <View>
        <Parte1/>
        <Parte2/>
        <Text>Primeiro App</Text>
     </View>
   )
}

export default App;
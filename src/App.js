import React, {useState} from 'react';
import {ScrollView, View, Text, TextInput} from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  //const [imc, setImc] = useState('');

  const onChangePesoHandler = input => {
    setPeso(input);
  };

  const onChangeAlturaHandler = input => {
    setAltura(input);
  };

  const exibirPeso = () => {
    return (
      <View>
        <Text>Peso: {peso}</Text>
      </View>
    );
  };

  const exibirAltura = () => {
    return (
      <View>
        <Text>Altura: {altura}</Text>
      </View>
    );
  };

  const calculaImc = () => {
    const imc = peso / Math.pow(altura / 100, 2);
    return imc.toFixed(2);
  };

  // const testaImc = () => {
    
  // }

  return (
    <ScrollView>
      <TextInput
        value={peso}
        keyboardType="numeric"
        placeholder="Digite o peso"
        onChangeText={onChangePesoHandler}
      />
      {exibirPeso()}

      <TextInput
        value={altura}
        keyboardType="numeric"
        placeholder="Digite a altura em centimetros"
        onChangeText={onChangeAlturaHandler}
      />
      {exibirAltura()}
      <View>
        <Text>IMC: {calculaImc()}</Text>
      </View>
    </ScrollView>
  );
};

export default App;

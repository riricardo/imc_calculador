import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, View, Text, TextInput, Button, Alert} from 'react-native';

const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const input_ = useRef();

  useEffect(() => {
    if (peso !== '' && altura !== '') {
      const value = parseFloat(peso) / Math.pow(parseFloat(altura / 100), 2);
      setImc(value.toFixed(2));
    }
  }, [peso, altura, imc]);

  const calculaImc = () => {
    return parseFloat(peso) / Math.pow(parseFloat(altura / 100), 2);
  };

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

  const testaImc = () => {
    var tipoImc = '';
    if (!imc) {
      tipoImc = 'Sem valor';
    } else if (imc < 17) {
      tipoImc = 'Muito abaixo do peso';
    } else if (imc < 18.5) {
      tipoImc = 'Abaixo do peso';
    } else if (imc < 25) {
      tipoImc = 'Peso normal';
    } else if (imc < 30) {
      tipoImc = 'Acima do peso';
    } else if (imc < 35) {
      tipoImc = 'Obesidade I';
    } else if (imc < 40) {
      tipoImc = 'Obesidade II (severa)';
    } else {
      tipoImc = 'Obesidade III (mórbida)';
    }
    return tipoImc;
  };

  const onPressVerificaImcHandler = () => {
    Alert.alert(
      'Resultado',
      `IMC: ${imc}, ${testaImc()}`,
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('cancel');
          },
        },
        {
          text: 'Ok',
          onPress: () => {
            setPeso('');
            setAltura('');
            setImc('');
            onFocus();
          },
        },
      ],
      {cancelable: false},
    );
  };

  const onFocus = () => {
    input_.current.focus();
  };

  return (
    <ScrollView>
      {exibirPeso()}
      <TextInput
        value={peso}
        ref={input_}
        keyboardType="numeric"
        placeholder="Digite o peso"
        onChangeText={onChangePesoHandler}
      />

      {exibirAltura()}
      <TextInput
        value={altura}
        keyboardType="numeric"
        placeholder="Digite a altura em centimetros"
        onChangeText={onChangeAlturaHandler}
      />

      <View>
        <Button
          title="Verificar IMC"
          onPress={() => onPressVerificaImcHandler()}
        />
      </View>
    </ScrollView>
  );
};

export default App;

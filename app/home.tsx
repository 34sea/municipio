import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { NativeRouter, Route, Routes, Link } from 'react-router-native';

const Home = () => {
  const [licensingType, setLicensingType] = useState('');
  const [requesterName, setRequesterName] = useState('');
  const [biNumber, setBiNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleRequest = () => {
    setLicensingType('');
    setRequesterName('');
    setBiNumber('');
    setPhoneNumber('');
    setAddress('');
    setEmail('');
    setAdditionalInfo('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Solicitar Licenciamento</Text>

      <Text style={styles.label}>Tipo de Licenciamento:</Text>
      <Picker
        selectedValue={licensingType}
        onValueChange={(itemValue) => setLicensingType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione o tipo de licenciamento" value="" />
        <Picker.Item label="Licenciamento Simplificado" value="simplified" />
        <Picker.Item label="Licenciamento Comercial" value="commercial" />
        <Picker.Item label="Licenciamento Industrial" value="industrial" />
      </Picker>

      {/* Dados Pessoais (sempre exibidos) */}
      <Text style={styles.label}>Nome do Solicitante:</Text>
      <TextInput
        value={requesterName}
        onChangeText={setRequesterName}
        style={styles.input}
        placeholder="Digite seu nome completo"
        placeholderTextColor="#666"
      />

      <Text style={styles.label}>Número do BI:</Text>
      <TextInput
        value={biNumber}
        onChangeText={setBiNumber}
        style={styles.input}
        placeholder="Digite o número do BI"
        placeholderTextColor="#666"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        placeholder="Digite seu telefone"
        placeholderTextColor="#666"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        value={address}
        onChangeText={setAddress}
        style={styles.input}
        placeholder="Digite seu endereço"
        placeholderTextColor="#666"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="Digite seu email"
        placeholderTextColor="#666"
        keyboardType="email-address"
      />

      {/* Campos adicionais dependendo do tipo de licenciamento */}
      {licensingType === 'simplified' && (
        <>
          <Text style={styles.label}>Taxa: 50% do Salário Mínimo</Text>
        </>
      )}

      {licensingType === 'commercial' && (
        <>
          <Text style={styles.label}>Taxa: 1 Salário Mínimo</Text>
          <Text style={styles.label}>Declaração do Bairro/Municipal:</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira a declaração"
            placeholderTextColor="#666"
          />
        </>
      )}

      {licensingType === 'industrial' && (
        <>
          <Text style={styles.label}>Taxa: variável conforme dimensão da indústria</Text>
          <Text style={styles.label}>Projeto Industrial:</Text>
          <TextInput
            style={styles.input}
            placeholder="Descrição do projeto"
            placeholderTextColor="#666"
            multiline
          />
          <Text style={styles.label}>Estudo de Impacto Ambiental:</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira o estudo"
            placeholderTextColor="#666"
            multiline
          />
        </>
      )}

      {/* Botão para solicitar */}
      <Link to="/solicitacao-feita" onPress={handleRequest} style={styles.button}>
        <Text style={styles.buttonText}>Solicitar</Text>
      </Link>
    </ScrollView>
  );
};

const SolicitationDone = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Solicitação Realizada!</Text>
    <Text style={styles.message}>Obrigado! Sua solicitação foi registrada com sucesso.</Text>
    <Link to="/" style={styles.button}>
      <Text style={styles.buttonText}>Voltar para Home</Text>
    </Link>
  </View>
);

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solicitacao-feita" element={<SolicitationDone />} />
      </Routes>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a2b36',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    color: '#1a2b36',
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    color: '#1a2b36',
    marginBottom: 15,
    height: 40,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  input: {
    height: 40,
    borderColor: '#1a2b36',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    color: '#1a2b36',
  },
  button: {
    backgroundColor: '#1a2b36',
    padding: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#f5f5f5',
    fontSize: 16,
    fontWeight: '600',
  },
  message: {
    color: '#1a2b36',
    textAlign: 'center',
    marginBottom: 20,
  },
});

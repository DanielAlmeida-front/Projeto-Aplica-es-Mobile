import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleAcessar = () => {
    // Validação simples apenas para exemplo
    if (!login || !senha) {
      Alert.alert('Atenção', 'Por favor, preencha o login e a senha.');
      return;
    }
    
    // Navega para o dashboard
    router.push('/dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Projeto Aplicação Mobile</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <Text style={styles.label}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu login"
          placeholderTextColor="#999"
          value={login}
          onChangeText={setLogin}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••••••"
          placeholderTextColor="#999"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <TouchableOpacity style={styles.button} onPress={handleAcessar}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f3640',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#718093',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2f3640',
    marginBottom: 6,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#dcdde1',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#f8f9fa',
    fontSize: 16,
    color: '#2f3640',
  },
  button: {
    height: 48,
    backgroundColor: '#4e54c8',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
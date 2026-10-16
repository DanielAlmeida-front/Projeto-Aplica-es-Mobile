import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>DASHBOARD</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>Bem-vindo!</Text>
          <Text style={styles.welcomeText}>
            Você está no Dashboard da aplicação Expo.
          </Text>
        </View>

        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.logoutButtonText}>Sair / Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  header: {
    backgroundColor: '#4e54c8',
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeCard: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#ffffff',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 20,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 12,
  },
  welcomeText: {
    fontSize: 16,
    color: '#718093',
    textAlign: 'center',
    lineHeight: 22,
  },
  logoutButton: {
    width: '100%',
    maxWidth: 400,
    height: 48,
    backgroundColor: '#ff4757',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
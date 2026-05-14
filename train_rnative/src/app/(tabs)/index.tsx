import * as Device from 'expo-device';
import { Text, ScrollView } from "react-native";
import { Link } from 'expo-router';
import { globalStyles } from '@/styles/global';
import HomeHeader from '@/components/HomeHeader';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Microzone</Text>
      <HomeHeader />
      <Link href='/add-meal' style={{ fontSize: 18, color: '#007bff'}}>Go to Meals</Link>
    </ScrollView>
  );
}


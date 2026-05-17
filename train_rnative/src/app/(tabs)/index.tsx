import * as Device from 'expo-device';
import { Text, ScrollView } from "react-native";
import { Link } from 'expo-router';
import { useFocusEffect } from 'expo-router';
import { getMeals, Meal } from '@/storage/meals';
import { globalStyles } from '@/styles/global';
import HomeHeader from '@/components/HomeHeader';
import MacroGrid from '@/components/MacroGrid';
import RecentMeals from '@/components/RecentMeals';
import { useCallback, useState } from 'react';

export default function HomeScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);
  const loadMeals = async () => {
    const data = await getMeals();
      setMeals(data);
      console.log('Loaded meals:', data)
  }
  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>Microzone</Text>
      <HomeHeader />
      <MacroGrid meals={meals}/>
      <RecentMeals meals={meals} onDelete={loadMeals}/>
      {/* <Link href='/add-meal' style={{ fontSize: 18, color: '#007bff'}}>Go to Meals</Link> */}
    </ScrollView>
  );
}


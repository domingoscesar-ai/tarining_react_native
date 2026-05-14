import { colors } from "@/styles/global";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack 
      screenOptions={{ headerShown: false}}
      // screenOptions={{
      //   // headerTitle: 'Macrozone',
      //   headerStyle: { backgroundColor: colors.header },
      //   headerTintColor: '#fff',
      //   // headerShown: false,// to show or not header
      // }}
     >
      <Stack.Screen name="(tabs)" />
      {/* <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
      <Stack.Screen options={{ title: 'Meals'}} name="meals"/>
      <Stack.Screen options={{ title: 'Add Meal'}} name="add-meal"/> */}
    </Stack>
  );
}

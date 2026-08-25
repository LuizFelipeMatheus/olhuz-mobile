import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*import { AuthStack } from "./AuthStack";*/
import { MainTabs } from "./MainTabs";
import type { RootStackParamList } from "../types/navigation";
import { ReadingDetailsScreen } from "../presentation/views/readings/ReadingDetails/ReadingDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <Stack.Navigator id="app-stack" screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen
        name="Auth"
        component={AuthStack}
      /> */}

      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
      />

      <Stack.Screen
        name="ReadingDetails"
        component={ReadingDetailsScreen}
      />
    </Stack.Navigator>
  );
}
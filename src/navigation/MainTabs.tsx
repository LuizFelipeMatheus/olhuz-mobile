import React from "react";
import { COLORS } from "../presentation/theme/AppTheme";
import { View } from "react-native";
import type { MainTabParamList } from "../types/navigation";
import { House, FileText, Settings, UserRound } from "lucide-react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "../presentation/views/Home/Home";
import { ReadingsScreen } from "../presentation/views/readings/Readings";
//import { SettingsScreen } from "../presentation/views/settings/Settings";
//import { ProfileScreen } from "../presentation/views/profile/Profile";

const Tab = createBottomTabNavigator<MainTabParamList>();

// CORREÇÃO 1: Componente movido para fora do MainTabs
export function MainTabs() {
  const icons = {
    Home: House,
    Readings: FileText,
    Settings: Settings,
    Profile: UserRound,
  };

  return (
    <Tab.Navigator
      id="main-tabs"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,

        tabBarStyle: {
          height: 82,
          padding: 10,
          marginHorizontal: 14,
          marginBottom: 12,
          borderTopWidth: 0,
          elevation: 8,
          borderRadius: 10,
          backgroundColor: COLORS.white,
          shadowColor: COLORS.black,
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 6,
        },

        tabBarActiveTintColor: COLORS.menuIconActive,
        tabBarInactiveTintColor: "#49587F",
        tabBarIcon: ({ color, size, focused }) => {
          const Icon = icons[route.name];
          return (
            <View
              style={{
                backgroundColor: focused ? "#DFE8FF" : "transparent",
                paddingHorizontal: 20,
                paddingVertical: 4,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon color={color} size={size} />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />

      <Tab.Screen
        name="Readings"
        component={ReadingsScreen}
        options={{ title: "Leituras" }}
      />

      {/*<Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Configurações" }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />*/}
    </Tab.Navigator>
  );
}

import { Tabs } from 'expo-router';
import React from 'react';
import {
  Platform,
  View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Feather from '@expo/vector-icons/Feather';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Constants from 'expo-constants';

export default function TabLayout() {
  const statusBarHeight = Constants.statusBarHeight;

  return (
    <>
      <View style={{ height: statusBarHeight, backgroundColor: 'white' }} />
      <StatusBar style="dark" /> 

      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#fff",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              position: 'absolute',
              height: 80,
              paddingTop: 10,
            },
            android: {
              backgroundColor: "#000",
              borderTopWidth: 0,
              height: 80,
              paddingTop: 10,
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="jobs"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name="suitcase" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}


import React from "react";
import { Platform, StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  backgroundColor: string;
  barStyle: "light-content" | "dark-content";
};

export default function AppStatusBarWrapper({ backgroundColor, barStyle }: Props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: Platform.OS === "android" ? StatusBar.currentHeight : insets.top,
        backgroundColor,
      }}
    >
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
}

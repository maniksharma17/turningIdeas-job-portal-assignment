import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ThemedButton from "@/components/ThemedButton";
import PageHeader from "@/components/ThemedPageTitle";
import ThemedOption from "@/components/ThemedOptionDiv";
import TopActionsButtons from "@/components/TopActionsButton";
import { useRouter } from "expo-router";


export default function UserTypePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TopActionsButtons showSkip={false}
        onClose={()=>router.back()}
        />
        <PageHeader
          title="Are you looking for work or hiring someone?"
          subtitle="Pick what you want to do."
        />

        <ThemedOption
          title="Job Seeker (नौकरी चाहने वाला)"
          onPress={() => setSelected("lookingForWork")}
          style={[styles.langButton, selected === "lookingForWork" && styles.selected]}
        />
        <ThemedOption
          title="Employer (नियोक्ता)"
          onPress={() => setSelected("hiringSomeone")}
          style={[styles.langButton, selected === "hiringSomeone" && styles.selected]}
        />
        
      </ScrollView>

      <View style={styles.bottomButton}>
        <ThemedButton
          title="Next"
          onPress={() => router.push("/auth/signup/JobTypePage")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 106,
    backgroundColor: "#fff",
  },
  content: {
    paddingBottom: 20,
  },
  langButton: {
    marginVertical: 5,
  },
  selected: {
    backgroundColor: "rgba(226, 230, 251, 1)", // light blue
    borderColor: "rgba(60, 88, 230, 1)"
  },
  bottomButton: {
    padding: 20,
  },
});

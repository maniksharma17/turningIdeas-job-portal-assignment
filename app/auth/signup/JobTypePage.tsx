import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ThemedButton from "@/components/ThemedButton";
import PageHeader from "@/components/ThemedPageTitle";
import TopActionsButtons from "@/components/TopActionsButton";
import { useRouter } from "expo-router";
import ThemedJobTypeBox from "@/components/ThemedJobTypeBox";
import { ThemedView } from "@/components/ThemedView";

const jobTypes = [
  {
    english: "Electrician",
    hindi: "बिजली मिस्त्री",
    imageSource: require("@/assets/images/444c791487b00e03c83dfaaa1d9e53134640f253.png"),
  },
  {
    english: "Mason",
    hindi: "मेसन",
    imageSource: require("@/assets/images/803e228c2ee060b6fba2776836aca831058d8638.png"),
  },
  {
    english: "Welder",
    hindi: "वेल्डर",
    imageSource: require("@/assets/images/f1fc650942c6d9f1696735d04bb4aa6965369c74.png"),
  },
  {
    english: "Carpenter",
    hindi: "बढ़ई",
    imageSource: require("@/assets/images/fe60b87ef7f46269df37b84b6d114d537812edef.png"),
  },
  {
    english: "Painter",
    hindi: "पेंटर",
    imageSource: require("@/assets/images/c26770b0789e3b45ffeec592b5eda863346539b2.png"),
  },
  {
    english: "Plumber",
    hindi: "प्लम्बर",
    imageSource: require("@/assets/images/d2fb186f6c79cccbb6b52127104fc84e8b5b6f99.png"),
  },
  {
    english: "Foreman",
    hindi: "फोरमैन",
    imageSource: require("@/assets/images/2ac5586646b742bedbceddd7ad3dcb49716bb34a.png"),
  },
  {
    english: "Potter",
    hindi: "कुम्हार",
    imageSource: require("@/assets/images/6c0342fc33f4eca6d2196f0871e89b106f1985fc.png"),
  },
];

export default function JobTypePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <TopActionsButtons showSkip={true} 
        onClose={()=>{router.back()}}
        onSkip={()=>{router.push("/auth/signup/ProfilePage1")}}
        />
        <PageHeader
          title="Select your job type"
          subtitle="You can only choose one job"
        />

        <ThemedView style={styles.jobBoxContainer}>
          {jobTypes.map((job, index) => (
            <ThemedJobTypeBox
              key={index}
              title={`${job.english}`}
              subtitle={`(${job.hindi})`}
              imageSource={job.imageSource}
              selected={selected === job.english}
              onPress={() => setSelected(job.english)}
            />
          ))}
        </ThemedView>
      </ScrollView>

      <View style={styles.bottomButton}>
        <ThemedButton
          title="Next"
          onPress={() => router.push("/auth/signup/ProfilePage1")}
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
  jobBoxContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
    paddingHorizontal: 20,
  },
  content: {
    paddingBottom: 0,
  },
  bottomButton: {
    padding: 20,
    backgroundColor: 'transparent',
  },
});

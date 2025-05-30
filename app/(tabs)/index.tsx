import { ScrollView, StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import ShramikCard from "@/components/ShramikCard";
import HomeHeaderCard from "@/components/HomeHeaderCard";
import { ThemedText } from "@/components/ThemedText";
import { AntDesign } from "@expo/vector-icons";
import { CategoryCard } from "@/components/JobCategories";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactCard } from "@/components/Contact";
import { VideoPromoCard } from "@/components/HomeVideoBanner";
import LocationPermissionPrompt from "@/components/LocationPermissionPrompt";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(true)
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        scrollEnabled={!modalVisible}
        contentContainerStyle={[styles.container, { paddingBottom: 20 }]}
      >
        <LocationPermissionPrompt setModalVisible={setModalVisible}/>
        <HomeHeaderCard
          name="Prakash"
          avatarUri={require("@/assets/images/shramik-card-image.png")}
          onNotificationPress={() => console.log("Notifications pressed")}
        />

        <ThemedView style={styles.jobTypeContainer}>
          <ThemedText
            style={{
              fontSize: 16,
              borderBottomColor: "rgba(60, 88, 230, 1)",
              borderBottomWidth: 2,
              color: "rgba(60, 88, 230, 1)",
            }}
          >
            Monthly Jobs
          </ThemedText>
          <ThemedText style={{ fontSize: 16, color: "rgba(131, 128, 128, 1)" }}>
            Daily Gigs
          </ThemedText>
        </ThemedView>

        <ThemedView>
          <ShramikCard
            name="Prakash Shaw"
            id="110405"
            dob="01/01/2000"
            address="XYZ, Kolkata, West Bengal"
            photoUri={require("@/assets/images/shramik-card-image.png")}
          />
        </ThemedView>

        <ThemedView style={styles.headingContainer}>
          <ThemedText style={{ fontSize: 20, fontWeight: 600 }}>
            Categories
          </ThemedText>
          <ThemedText style={{ fontSize: 12, color: "rgba(60, 88, 230, 1)" }}>
            View All <AntDesign name="right" color={"gray"} size={10} />
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.categoryContainer}>
          <CategoryCard
            imageUri={require("@/assets/images/58bb9d7b827aa09350a09c671d7cef3905909ff9.png")}
            title="Cleaning"
          />
          <CategoryCard
            imageUri={require("@/assets/images/4ecda41f4eedf978bfeee63c84f8d4d6dd7b67f3.png")}
            title="MCB & DC Fitting"
          />
          <CategoryCard
            imageUri={require("@/assets/images/d3ce3c57612aa010f0b7921095ad84b34187cb35.png")}
            title="Chrome Fitting"
          />
          <CategoryCard
            imageUri={require("@/assets/images/be54b32e6aceaf35304621c2226f5aa1b1215439.png")}
            title="Light and Fan Installation"
          />
        </ThemedView>

        <ThemedView style={styles.headingContainer}>
          <ThemedText style={{ fontSize: 20, fontWeight: 600 }}>
            Popular nearest you
          </ThemedText>
          <ThemedText style={{ fontSize: 12, color: "rgba(60, 88, 230, 1)" }}>
            View All <AntDesign name="right" color={"gray"} size={10} />
          </ThemedText>
        </ThemedView>

        

        <ThemedView style={styles.jobContainer}>
          <ServiceCard
            imageUri={require("@/assets/images/7bffceb5af46987c007d890a3dc003caeb70971c.png")}
            title="Wiring Work"
            price={"15000"}
            duration="Monthly"
            type="On-Site"
            onPress={() => router.push(`/(tabs)/jobs/jobDetail`)}
            variant="blue"
          />
          <ServiceCard
            imageUri={require("@/assets/images/e6546d521dd83909fbb5d31cea3d803d357e282c.png")}
            title="Fan Repair"
            price={"500"}
            duration="Hour"
            type="Apartment"
            onPress={() => router.push(`/(tabs)/jobs/jobDetail`)}
            variant="gray"
          />
          <ServiceCard
            imageUri={require("@/assets/images/7bffceb5af46987c007d890a3dc003caeb70971c.png")}
            title="Wiring Work"
            price={"15000"}
            duration="Monthly"
            type="On-Site"
            onPress={() => router.push(`/(tabs)/jobs/jobDetail`)}
            variant="gray"
          />
          <ServiceCard
            imageUri={require("@/assets/images/e6546d521dd83909fbb5d31cea3d803d357e282c.png")}
            title="Fan Repair"
            price={"500"}
            duration="Hour"
            type="Apartment"
            onPress={() => router.push(`/(tabs)/jobs/jobDetail`)}
            variant="gray"
          />
        </ThemedView>

        <ThemedView>
          <ContactCard />
        </ThemedView>

        <ThemedView style={styles.headingContainer}>
          <ThemedText style={{ fontSize: 20, fontWeight: 600 }}>
            See our videos
          </ThemedText>
        </ThemedView>

        <VideoPromoCard onPress={()=>{}}/>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 44,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  jobTypeContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 16,
    marginBottom: 20,
  },
  headingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 2,
    marginBottom: 24,
    margin: "auto",
  },
  jobContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
    marginBottom: 2,
    margin: "auto",
  },
});

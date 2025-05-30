import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import ThemedButton from "@/components/ThemedButton";
import { useRouter } from "expo-router";

export default function JobDetailPage() {
  const router = useRouter();
  const data = {
    image: require("@/assets/images/7bffceb5af46987c007d890a3dc003caeb70971c.png"),
    title: "Need Wiring work",
    description:
      "We are seeking a skilled electrician to upgrade outdated wiring for a residential or commercial property. The role requires expertise in electrical systems, safety compliance, and efficient troubleshooting.",
    note: "Note: Bank account is required before coming to work.",
    location: "Bidhannager",
    address:
      "Poura Bhawan, Ground Floor (FD-415A, Salt Lake, Sec-III, Kolkata-700106)",
    startDate: "01.01.2025",
    endDate: "01.06.2025",
    totalDays: "151",
    time: "09:00am - 06:00pm (6 Days/Week)",
    requirement: "20 Electricians",
    salary: "15000/month",
    facilities: ["Water", "Electricity", "Fan", "Bed", "Washroom", "Bathroom"],
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView
        contentContainerStyle={[styles.container, { paddingBottom: 20 }]}
      >
        <ThemedView style={styles.header}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButtonContainer}>
            <AntDesign
              style={styles.backArrow}
              name="left"
              color={"gray"}
              size={20}
            />
          </TouchableOpacity>
          <ThemedText style={styles.headerText}>Job Details</ThemedText>
        </ThemedView>

        <ThemedView>
          <Image
            source={data.image}
            style={{
              height: 202,
              width: 380,
              margin: "auto",
              borderRadius: 10,
            }}
          />
        </ThemedView>

        <ThemedView style={{ marginBottom: 20 }}>
          <ThemedText style={styles.title}>{data.title}</ThemedText>
          <ThemedText style={styles.description}>{data.description}</ThemedText>
          <ThemedText style={styles.note}>{data.note}</ThemedText>
        </ThemedView>

        <ThemedView style={styles.locationContainer}>
          <ThemedView>
            <Image
              source={require("@/assets/images/7f03980a2e3a68c562f84f86a36ffb50d1fa7aca.png")}
              style={styles.locationImage}
            />
          </ThemedView>
          <ThemedView style={styles.addressContainer}>
            <ThemedText style={styles.location}>{data.location}</ThemedText>
            <ThemedText style={styles.address}>{data.address}</ThemedText>
          </ThemedView>
          <ThemedView>
            <AntDesign name="right" color={"gray"} size={24} />
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.infoContainer}>
          <ThemedText style={styles.infoHeading}>Date and Time</ThemedText>
          <ThemedView style={styles.infoText}>
            <AntDesign name="calendar" color="gray" size={24} />
            <ThemedText>
              {data.startDate} - {data.endDate} ({data.totalDays} days)
            </ThemedText>
          </ThemedView>
          <ThemedView style={styles.infoText}>
            <AntDesign name="clockcircle" color="gray" size={24} />
            <ThemedText>{data.time}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.infoContainer}>
          <ThemedText style={styles.infoHeading}>
            Electrician Required
          </ThemedText>
          <ThemedView style={styles.infoText}>
            <FontAwesome name="users" color="gray" size={24} />
            <ThemedText>{data.requirement}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.infoContainer}>
          <ThemedText style={styles.infoHeading}>Salary</ThemedText>
          <ThemedView style={styles.infoText}>
            <Entypo name="wallet" color="gray" size={24} />
            <ThemedText>{data.salary}</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.infoContainer}>
          <ThemedText style={styles.infoHeading}>
            What you&apos;ll get
          </ThemedText>
          <ThemedView style={styles.infoText}>
            <Entypo name="home" color="gray" size={24} />
            <ThemedView style={styles.facilitiesContainer}>
              <ThemedText>Housing and Living Arrangements</ThemedText>
              <ThemedView style={styles.facilitiesGridContainer}>
                {data.facilities.map((facility) => (
                  <ThemedView key={facility} style={styles.facilityBox}>
                    <ThemedText style={styles.facility}>{facility}</ThemedText>
                  </ThemedView>
                ))}
              </ThemedView>
            </ThemedView>
          </ThemedView>
        </ThemedView>

        <ThemedView>
          <ThemedButton
            title="Contact for more details"
            onPress={() => {
              alert("Contact Information");
            }}
            style={{ marginTop: 20, width: 391, backgroundColor: "rgba(219, 224, 255, 1)" }}
            textStyle={{ color: "rgba(60, 88, 230, 1)" }}
          />
          <ThemedButton
            title="Apply Now"
            onPress={() => {
              alert("Applied");
            }}
            style={{ width: 391, marginTop: 8, }}
          />
        </ThemedView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  backButtonContainer: {
    backgroundColor: "rgba(238, 240, 253, 1)",
    width: 36,
    height: 36,
    borderRadius: 20,
    position: "absolute",
    left: 20,
  },
  backArrow: {
    position: "absolute",
    top: 8,
    left: 6,
  },
  headerText: {
    fontWeight: 600,
    margin: "auto",
    fontSize: 20,
  },
  title: {
    fontWeight: 800,
    marginTop: 16,
    marginBottom: 6,
    fontSize: 20,
  },
  description: {
    fontWeight: 400,
    marginBottom: 6,
    fontSize: 16,
    lineHeight: 20,
  },
  note: {
    fontWeight: 500,
    marginBottom: 6,
    fontSize: 12,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "rgba(170, 182, 255, 1)",
    padding: 8,
    marginBottom: 20,
  },
  locationImage: {
    width: 65,
    height: 57,
    borderRadius: 3,
  },
  addressContainer: {
    display: "flex",
    width: 228,
  },
  location: {
    fontWeight: 500,
  },
  address: {
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16,
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginBlock: 20,
  },
  infoHeading: {
    fontWeight: 600,
    fontSize: 20,
  },
  infoText: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: "rgba(170, 182, 255, 1)",
  },
  facilitiesContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  facilitiesGridContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 6,
    width: 300,
  },
  facilityBox: {
    borderWidth: 0.5,
    borderColor: "rgba(77, 77, 77, 1)",
    padding: 4,
    borderRadius: 3,
    paddingHorizontal: 8,
  },
  facility: {
    color: "rgba(77, 77, 77, 1)",
    fontSize: 16,
  },
});

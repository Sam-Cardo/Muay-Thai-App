
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={true}>
        {/* Information cards displaying dashboard statistics */}

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>
              MUAY<Text style={styles.red}>PRO</Text>
            </Text>
            <Text style={styles.tagline}>TRAIN • IMPROVE • ACHIEVE</Text>
          </View>

          <Pressable onPress={() => router.push("/profile")}>
            <Text style={styles.profileIcon}>👤</Text>
          </Pressable>
        </View>

        <View style={styles.cardContainer}>
          {/* Information cards displaying amount of fighters, training sessions, etc. */}

          {/* Fighters Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Fighters</Text>
            <Text style={styles.cardNumber}>10</Text>
          </View>

          {/* Training Sessions Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Training Sessions</Text>
            <Text style={styles.cardNumber}>5</Text>
          </View>

          {/* Upcoming Matches Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Upcoming Matches</Text>
            <Text style={styles.cardNumber}>3</Text>
          </View>

          {/* Next Match Card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Next Match</Text>
            <Text style={styles.cardNumber}>35 Days</Text>
            <Text style={styles.cardText}>John Smith vs. John Doe</Text>
          </View>
        </View>

        {/* Quick Actions */}
        <Text style={styles.text}>Quick Actions</Text>

        <View style={styles.quickActions}>
          <Pressable style={styles.card} onPress={() => router.push("/plans")}>
            <Text style={styles.cardTitle}>AI Training Planner</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => router.push("/fighters")}>
            <Text style={styles.cardTitle}>Manage Fighters</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => router.push("/fights")}>
            <Text style={styles.cardTitle}>Fights</Text>
          </Pressable>

          <Pressable style={styles.card} onPress={() => router.push("/training")}>
            <Text style={styles.cardTitle}>Training Sessions</Text>
          </Pressable>
        </View>

        {/* This Week Card */}
        <View style={styles.largeCard}>
          <Text style={styles.cardTitle}>This Week</Text>

          <View style={styles.dayRow}>
            <Text style={styles.dayName}>MON</Text>
            <Text style={styles.dayText}>Pad Work</Text>
          </View>

          <View style={styles.dayRow}>
            <Text style={styles.dayName}>TUE</Text>
            <Text style={styles.dayText}>Cardio</Text>
          </View>

          <View style={styles.dayRow}>
            <Text style={styles.dayName}>WED</Text>
            <Text style={styles.dayText}>Clinch Training</Text>
          </View>

          <View style={styles.dayRow}>
            <Text style={styles.dayName}>THU</Text>
            <Text style={styles.dayText}>Strength</Text>
          </View>

          <View style={styles.dayRow}>
            <Text style={styles.dayName}>FRI</Text>
            <Text style={styles.dayText}>Sparring</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

//* Styles for the dashboard */

/* Comments beside everything are for my memory when making the other components and files */

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full height of the screen
    padding: 20, // Adds padding around the content
    paddingTop: 60, // Adds extra padding at the top for spacing
    backgroundColor: "#111111", // Sets the dark background colour
  },

  title: {
    fontSize: 24, // Sets the font size for the title
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 20,
    marginBottom: 15,
  },

  cardContainer: {
    marginTop: 10, // Adds space above the card container
    flexDirection: "row", // Arranges the cards in a row
    flexWrap: "wrap", // Allows cards to move to the next line
    gap: 12, // Adds spacing between cards
  },

  card: {
    width: "47%", // Allows two cards per row
    backgroundColor: "#1c1c1c", // Sets a dark grey card background
    borderRadius: 10, // Rounds the card corners
    padding: 15, // Adds space inside the card
    marginBottom: 5, // Adds space below the card
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },

  cardTitle: {
    fontSize: 14, // Sets the card title size
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
  },

  cardNumber: {
    fontSize: 26, // Makes the main number stand out
    fontWeight: "bold",
    color: "#ffffff",
  },

  cardText: {
    fontSize: 12, // Sets the card description size
    color: "#ffffff",
    marginTop: 5,
  },

  largeCard: {
    width: "100%", // Takes up the full available width
    backgroundColor: "#1c1c1c", // Sets a dark grey background
    borderRadius: 10, // Rounds the card corners
    padding: 18, // Adds space inside the card
    marginTop: 15, // Adds space above the card
    minHeight: 180, // Sets the minimum card height
    borderWidth: 1,
    borderColor: "#2a2a2a",
  },

  dayText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "500",
  },

  dayRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#252525",
    padding: 14,
    marginTop: 8,
    borderRadius: 8,
  },

  dayName: {
    color: "#ff3333",
    fontWeight: "bold",
    width: 55,
    fontSize: 12,
    letterSpacing: 1,
  },

  headerContainer: {
    marginBottom: 20, // Adds space below the header
  },

  headerTitle: {
    fontSize: 20, // Sets the header title size
    fontWeight: "bold",
    marginBottom: 5,
    color: "#ffffff",
  },

  tagline: {
    color: "#888888",
    fontSize: 10,
    letterSpacing: 2,
    marginTop: 5,
  },

  logo: {
    fontSize: 28, // Sets the logo text size
    fontWeight: "bold",
    color: "#ffffff",
    letterSpacing: 1,
  },

  red: {
    color: "#ff3333", // Highlights the PRO part of the logo
  },

  profileIcon: {
    fontSize: 26,
    textAlign: "right",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },

  text: {
    fontSize: 26, // Makes the main number stand out
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },

  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },

  signInButton: {
    backgroundColor: "#e00000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  signInButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  registerButton: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },

  registerButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  
});
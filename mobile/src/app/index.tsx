import { View, Text, StyleSheet, ScrollView } from "react-native";
import NavigationMenu from "../components/NavigationMenu";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      {/* Displays Navigation Menu */}
      <NavigationMenu />

      <Text style={styles.title}>Dashboard</Text>

      <ScrollView showsVerticalScrollIndicator={true}></ScrollView>
      <ScrollView>
          {/* Information cards displaying dashboard statistics */}

          <View style={styles.cardContainer}>
            {/* Information cards displaying amount of fighters, training sessions, etc. */}
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

            {/* Weight Tracker Card */}
            <View style={styles.largeCard}>
              <Text style={styles.cardTitle}>Weight Tracker - Joe Doe</Text>
              <Text style={styles.cardText}>
                Current Weight - 67 KG 3.4 KG To Go (Needs More Cardio)
              </Text>
              <View style={styles.graph}>
                <View style={styles.graphLine} />
                <View style={styles.weekLabels}>
                  <Text>Week 1</Text>
                  <Text>Week 2</Text>
                  <Text>Week 3</Text>
                  <Text>Week 4</Text>
                  <Text>Week 5</Text>
                  <Text>Week 6</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Injury Report Card */}
          <View style={styles.largeCard}>
            <Text style={styles.cardTitle}>Injury Report</Text>
            <Text style={styles.cardText}>
              John Doe has a minor shoulder strain. Rest and physical therapy
              recommended.
            </Text>
            <Text style={styles.cardText}> </Text>
            <Text style={styles.cardText}>
              Jane Smith has a knee injury. Surgery scheduled for next week.
            </Text>
          </View>
          <View style={styles.largeCard}>
            <Text style={styles.cardTitle}>Attendance</Text>
            <View style={styles.graph}>
              <View style={styles.graphLine} />
              <View style={styles.attendanceWeekLabels}>
                <Text>Week 1</Text>
                <Text>Week 2</Text>
                <Text>Week 3</Text>
                <Text>Week 4</Text>
                <Text>Week 5</Text>
                <Text>Week 6</Text>
              </View>
            </View>
          </View>

          {/* Attendance Tracker */}
            <View style={styles.largeCard}>
              <Text style={styles.cardTitle}>Attendance For All of the Fighters</Text>
              <Text style={styles.cardText}>
                Attendance for the last 6 weeks has been recorded. The graph below shows the attendance trend for all fighters.
              </Text>
              <View style={styles.graph}>
                <View style={styles.graphLine} />
                <View style={styles.weekLabels}>
                  <Text>Week 1</Text>
                  <Text>Week 2</Text>
                  <Text>Week 3</Text>
                  <Text>Week 4</Text>
                  <Text>Week 5</Text>
                  <Text>Week 6</Text>
                </View>
              </View>
            </View>

          {/* This Week Card */}
            <View style={styles.largeCard}>
              <Text style={styles.cardTitle}>This Week</Text>
              <Text style={styles.dayText}>
                Monday: Pad Work
                </Text>
                <Text style={styles.dayText}>
                  Tuesday: Cardio
                </Text>
                <Text style={styles.dayText}>
                  Wednesday: Clinch Training
                </Text>
                <Text style={styles.dayText}>
                  Thursday: Strength
                </Text>
                <Text style={styles.dayText}>
                  Friday: Sparring
                </Text>
            </View>


      </ScrollView>
    </View>
  );
}

{
  /* Styles for the dashboard */
}
{
  /* Comments beside everything are for my memory when making the other components and files */
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full height of the screen
    padding: 20, // Adds padding around the content
    paddingTop: 60, // Adds extra padding at the top for spacing
    backgroundColor: "#f5f5f5", // Sets a light gray background color for the dashboard
  },
  title: {
    fontSize: 24, // Sets the font size for the title text
    marginTop: 30, // Adds margin above the title for spacing
  },

  cardContainer: {
    marginTop: 10, // Adds margin above the card container for spacing
    flexDirection: "row", // Arranges the cards in a row
    flexWrap: "wrap", // Allows the cards to wrap to the next line if they exceed the width
    gap: 10, // Adds spacing between the cards
  },

  card: {
    width: "47%", // Sets the width of each card to 47% of the container width, allowing for two cards per row with some spacing
    backgroundColor: "#fff", // Sets the background color of the card to white
    borderRadius: 3, // Rounds the corners of the card
    padding: 10, // Adds padding inside the card for spacing
    marginBottom: 5, // Adds margin below the card for spacing
    shadowColor: "#000", // Sets the shadow color for the card
    shadowOffset: { width: 0, height: 2 }, // Sets the offset of the shadow to create a subtle drop shadow effect
    shadowOpacity: 0.1, // Sets the opacity of the shadow to make it less intense
    shadowRadius: 4, // Sets the blur radius of the shadow to create a soft shadow effect
    elevation: 2, // Adds elevation to the card for a subtle 3D effect on Android devices
  },

  cardTitle: {
    fontSize: 12, // Sets the font size for the card title text
    fontWeight: "bold", // Makes the card title text bold for emphasis
    marginBottom: 10, // Adds margin below the card title for spacing
  },

  cardNumber: {
    fontSize: 16, // Sets the font size for the card number text
    fontWeight: "bold", // Makes the card number text bold for emphasis
  },
  cardText: {
    fontSize: 12, // Sets the font size for the card text
    color: "#666", // Sets the color of the card text to a medium gray for readability
  },
  largeCard: {
    width: "100%", // Sets the width of the large card to 100% of the container width
    backgroundColor: "#fff", // Sets the background color of the large card to white
    borderRadius: 5, // Rounds the corners of the large card
    padding: 20, // Adds padding inside the large card for spacing
    marginTop: 10, // Adds margin above the large card for spacing
    minHeight: 180, // Sets a minimum height for the large card to ensure it has enough space for content
    shadowColor: "#000", // Sets the shadow color for the large card
    shadowOffset: { width: 0, height: 2 }, // Sets the offset of the shadow to create a subtle drop shadow effect
    shadowOpacity: 0.1, // Sets the opacity of the shadow to make it less intense
    shadowRadius: 4, // Sets the blur radius of the shadow to create a soft shadow effect
    elevation: 2, // Adds elevation to the large card for a subtle 3D effect on Android devices
  },
  graph: {
    height: 150, // Sets the height of the graph container to 150 pixels
    marginTop: 20, // Adds margin above the graph container for spacing
    justifyContent: "flex-end", // Aligns the graph line to the bottom of the graph container
  },

  graphLine: {
    height: 3, // Sets the height of the graph line to 3 pixels
    width: "100%", // Sets the width of the graph line to 100% of the graph container
    backgroundColor: "#ff0000", // Sets the background color of the graph line to red
    transform: [{ rotate: "10deg" }], // Rotates the graph line by 10 degrees to create a diagonal effect
    marginBottom: 30, // Adds margin below the graph line for spacing
  },

  weekLabels: {
    flexDirection: "row", // Arranges the week labels in a row
    justifyContent: "space-between", // Distributes the week labels evenly across the width of the graph container
  },
  attendanceWeekLabels: {
    flexDirection: "row", // Arranges the week labels in a row
    justifyContent: "space-between", // Distributes the week labels evenly across the width of the graph container
    marginBottom: 20, // Adds margin below the week labels for spacing
  },
  dayText: {
    fontSize: 12, // Sets the font size for the card text
    color: "#666", // Sets the color of the card text to a medium gray for readability
  },

});

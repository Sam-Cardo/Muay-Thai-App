
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const tabs = [
  { label: "Home", path: "/", icon: "home-outline", activeIcon: "home" },
  { label: "Fighters", path: "/fighters", icon: "people-outline", activeIcon: "people" },
  { label: "Training", path: "/training", icon: "calendar-outline", activeIcon: "calendar" },
  { label: "Plans", path: "/plans", icon: "clipboard-outline", activeIcon: "clipboard" },
  { label: "Fights", path: "/fights", icon: "trophy-outline", activeIcon: "trophy" },
  { label: "Profile", path: "/profile", icon: "person-circle-outline", activeIcon: "person-circle" },
] as const;

export default function BottomNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      {tabs.map((tab) => {
        const active = pathname === tab.path;

        return (
          <Pressable
            key={tab.path}
            style={styles.tab}
            onPress={() => router.navigate(tab.path as never)}
          >
            <Ionicons
              name={active ? tab.activeIcon : tab.icon}
              size={23}
              color={active ? "#28754A" : "#777777"}
            />
            <Text style={[styles.label, active && styles.activeLabel]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    paddingTop: 10,
    paddingBottom: 8,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  label: {
    fontSize: 10,
    color: "#777777",
  },
  activeLabel: {
    color: "#28754A",
    fontWeight: "600",
  },
});

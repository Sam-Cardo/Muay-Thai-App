
import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

const screens = [
  { name: "Dashboard", path: "/" },
  { name: "Fighters", path: "/fighters" },
  { name: "Training Sessions", path: "/training" },
  { name: "Training Plans", path: "/plans" },
  { name: "Fights", path: "/fights" },
  { name: "Profile", path: "/profile" },
];

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => setOpen(!open)}
      >
        <Text style={styles.buttonText}>
          Menu {open ? "▲" : "▼"}
        </Text>
      </Pressable>

      {open && (
        <View style={styles.dropdown}>
          {screens.map((screen) => (
            <Pressable
              key={screen.path}
              style={styles.item}
              onPress={() => {
                setOpen(false);
                router.push(screen.path as never);
              }}
            >
              <Text style={styles.itemText}>
                {screen.name}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    zIndex: 10,
  },
  button: {
    backgroundColor: "#1c3025",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
  },
  dropdown: {
    position: "absolute",
    top: 48,
    left: 0,
    width: 200,
    backgroundColor: "#ffffff",
    borderRadius: 6,
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  item: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eeeeee",
  },
  itemText: {
    color: "#222222",
    fontSize: 15,
  },
});

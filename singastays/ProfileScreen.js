import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "./styles.js";
import profile from "./assets/profile.jpg";
import dustbin from "./assets/dustbin.png";
import { FavoritesContext } from "./FavoritesContext";

export default function ProfileScreen() {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Image
            source={profile}
            style={{
              width: 180,
              height: 180,
              borderRadius: 500,
              marginBottom: 10,
              marginTop: 40,
            }}
          />
          <Text style={[globalStyles.h2, globalStyles.textCenter]}>
            Olivia Turner
          </Text>
          <Text style={styles.info}>oliver_turner@gmail.com</Text>
          <Text style={styles.info}>+651234567</Text>
          <Text style={[globalStyles.textCenter, globalStyles.p1, styles.bio]}>
            An American marketing specialist, is an adventurous explorer
            captivated by off-the-beaten-path destinations and cultural
            immersion. With a passion for connecting with locals and savoring
            diverse cuisines, she embraces boutique hotels and eco-friendly
            lodges, embodying the mantra: "Collect moments, not things." Follow
            Olivia's journey as she weaves a tapestry of transformative travel
            experiences around the globe.
          </Text>
          <View style={globalStyles.section}>
            <Text style={[globalStyles.h2, globalStyles.textCenter]}>
              Your <Text style={globalStyles.span}>Favourites</Text>
            </Text>
            <View style={styles.frame}>
              {favorites.map((favorite, index) => (
                <View style={styles.checkboxGroup} key={index}>
                  <View style={styles.checkboxGroupItem}>
                    <View style={styles.content}>
                      <Image source={favorite.image} style={styles.avatar2} />
                      <View style={styles.textAndSupporting}>
                        <Text style={styles.text}>{favorite.name}</Text>
                        <Text style={styles.supportingText}>
                          Thrill, Nightlife, Nature
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity onPress={() => removeFavorite(favorite)}>
                      <Image source={dustbin} style={styles.asset} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 40,
  },
  bio: {
    marginTop: 20,
    marginBottom: 40,
  },
  info: {
    color: "#888888",
    fontSize: 14,
    marginTop: 2,
  },
  innerContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 30,
    marginBottom: 30,
  },
  frame: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
    lexDirection: "row",
  },
  overlapGroup: {
    position: "relative",
    marginRight: 20,
  },
  heartComponent: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  textContent: {
    position: "absolute",
    bottom: 20,
    left: 20,
    color: "#fff",
    zIndex: 1,
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    lineHeight: 27,
  },
  stackFrame: {
    marginTop: 30,
  },
  stackIndividual: {
    marginBottom: 20,
  },
  stackOverlapGroup: {
    position: "relative",
  },
  stackText: {
    fontFamily: "Poppins-Medium",
    fontSize: 20,
    lineHeight: 27,
  },
  stackImage: {
    width: "100%",
    borderRadius: 10,
  },
  stackTextContent: {
    marginTop: 20,
  },
  frame: {
    alignItems: "flex-start",
    flexDirection: "column",
    margin: 20,
    width: 328,
  },
  checkboxGroup: {
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    marginBottom: 15,
  },
  checkboxGroupItem: {
    alignItems: "center",
    alignSelf: "stretch",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#244d3b",
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  content: {
    alignItems: "flex-start",
    flex: 1,
    flexDirection: "row",
    gap: 12,
  },
  avatar: {
    height: 44,
    width: 14,
    borderRadius: 200,
  },
  textAndSupporting: {
    flex: 1,
    flexDirection: "column",
    gap: 5,
  },
  text: {
    color: "#ff6600", // Adjust color codes as needed
    fontFamily: "Inter-Medium",
    fontSize: 16,
    fontWeight: "500",
  },
  supportingText: {
    color: "#000000",
    fontFamily: "Inter-Regular",
    fontSize: 16,
    fontWeight: "400",
  },
  asset: {
    height: 20,
    width: 17,
  },
  div: {
    height: 44,
    width: 44,
    borderRadius: 200,
    backgroundColor: "url(.assets/attractionOne.jpg)", // Place your actual image path here
  },
  avatar2: {
    height: 54,
    width: 54,
    borderRadius: 200,
  },
});

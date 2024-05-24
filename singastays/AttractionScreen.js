import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "./styles";
import attractionScreen from "./assets/attractionScreen.png";
import attractionOne from "./assets/attractionOne.jpg";
import attractionTwo from "./assets/attractionTwo.jpg";
import attractionThree from "./assets/attractionThree.jpg";
import attractionFour from "./assets/attractionFour.jpg";
import Heart from "./assets/heart.svg";
import inspoOne from "./assets/inspoOne.jpg";
import inspoTwo from "./assets/inspoTwo.jpg";
import { FavoritesContext } from "./FavoritesContext";
import { useContext } from "react";

export default function AttractionDetail({ navigation }) {
  const { addFavorite, removeFavorite, favorites } =
    useContext(FavoritesContext); // Import removeFavorite here

  const handleAddFavorite = (attraction, image) => {
    const isAlreadyFavorite = isFavorite(attraction);
    if (isAlreadyFavorite) {
      removeFavorite({ name: attraction, image: image });
    } else {
      addFavorite({ name: attraction, image: image });
    }
  };

  const isFavorite = (attraction) => {
    return favorites.some((favorite) => favorite.name === attraction);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={attractionScreen} style={styles.image} />
        <View style={styles.innerContainer}>
          <View style={globalStyles.section}>
            <View style={globalStyles.line}></View>
            <Text style={globalStyles.h1}>
              <Text>
                Discover Comfort,{"\n"}
                Embrace Adventure{"\n"}
                with{" "}
              </Text>
              <Text style={globalStyles.span}>SingaStays</Text>
              <Text>.</Text>
            </Text>
            <Text style={globalStyles.p1}>
              Embark on a joyful stay in Singapore with SingaStays! Explore
              tailored accommodations for a perfect blend of comfort and
              adventure. Your unforgettable experience begins here.
            </Text>
          </View>

          <View style={globalStyles.section}>
            <Text style={[globalStyles.h2, globalStyles.textCenter]}>
              <Text style={globalStyles.span}>Explore </Text>
              <Text>
                Accommodations{"\n"}
                in Singapore{" "}
              </Text>
            </Text>
            <Text style={[globalStyles.p2, globalStyles.textCenter]}>
              Discover the perfect stay that suits your preferences. Click on
              the tags below to explore accommodations tailored to your needs.
            </Text>
          </View>

          <View style={styles.stackFrame}>
            <View style={styles.row}>
              <TouchableOpacity
                style={styles.stackIndividual}
                onPress={() => navigation.navigate("AttractionDetail")}
                activeOpacity={1}
              >
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionOne} style={styles.stackImage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                    onPress={() =>
                      handleAddFavorite("Skyline Luge Sentosa", inspoOne)
                    }
                  >
                    <Heart
                      fill={
                        isFavorite("Skyline Luge Sentosa") ? "#fff" : "none"
                      }
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.stackIndividual}
                onPress={() => navigation.navigate("AttractionDetail")}
                activeOpacity={1}
              >
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionTwo} style={styles.stackImage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                    onPress={() =>
                      handleAddFavorite("Fort Canning Park", inspoTwo)
                    }
                  >
                    <Heart
                      fill={isFavorite("Fort Canning Park") ? "#fff" : "none"}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Fort Canning Park</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionThree} style={styles.stackImage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                  >
                    <Heart fill={isFavorite() ? "#fff" : "none"} />
                  </TouchableOpacity>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                </View>
              </View>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionFour} style={styles.stackImage} />
                  <TouchableOpacity
                    style={styles.heartComponent}
                    activeOpacity={1}
                  >
                    <Heart fill={isFavorite() ? "#fff" : "none"} />
                  </TouchableOpacity>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate("AttractionScreen")}
            style={[
              globalStyles.buttonPrimaryContainer,
              globalStyles.textCenter,
            ]}
            activeOpacity={1}
          >
            <Text style={globalStyles.buttonPrimary}>View More</Text>
          </TouchableOpacity>
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
  stackFrame: {
    marginTop: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  stackIndividual: {
    flex: 1,
    marginHorizontal: 5,
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
    height: 250, // Fixed height for all images
    borderRadius: 15,
    resizeMode: "cover", // Ensures images cover the area uniformly
  },
  stackTextContent: {
    marginTop: 20,
  },
  heartComponent: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 40,
  },
  innerContainer: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  rating: {
    fontSize: 20,
    color: "#e34b36",
  },
  map: {
    width: "100%",
    height: 322,
    marginBottom: 20,
  },
  table: {
    marginBottom: 35,
  },
  tableRow: {
    borderBottomColor: "#244D3B",
    borderBottomWidth: 1,
    paddingTop: 14,
    paddingBottom: 3,
  },
  tableCellHeader: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
  },
  tableCell: globalStyles.p1,
});

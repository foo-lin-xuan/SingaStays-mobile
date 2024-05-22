import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import banner from "./assets/banner.jpg";
import { globalStyles } from "./styles.js";
// import { Tag } from "./Tag.js";
import Heart from "./assets/heart.svg";
import inspoOne from "./assets/inspoOne.jpg";
import inspoTwo from "./assets/inspoTwo.jpg";
import inspoThree from "./assets/inspoThree.jpg";
import inspoFour from "./assets/inspoFour.jpg";
import attractionOne from "./assets/attractionOne.jpg";
import attractionTwo from "./assets/attractionTwo.jpg";
import attractionThree from "./assets/attractionThree.jpg";
import attractionFour from "./assets/attractionFour.jpg";

export default function HomeScreen({ navigation }) {
  //   console.log("Rendering HomeScreen with globalStyles:", globalStyles);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={banner} style={styles.image} />
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
            <TouchableOpacity style={globalStyles.buttonPrimaryContainer}>
              <Text style={globalStyles.buttonPrimary}>Explore Singapore</Text>
            </TouchableOpacity>
          </View>
          <ImageBackground
            source={require("./assets/background.png")} // Your background image
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            <View style={globalStyles.section}>
              <Text style={[globalStyles.h2, globalStyles.textCenter]}>
                <Text style={globalStyles.span}>Inspiration </Text>
                <Text>
                  for your{"\n"}
                  stay in SG{" "}
                </Text>
              </Text>
              <Text style={[globalStyles.p2, globalStyles.textCenter]}>
                Not sure what to do on your next trip to Finland? No worries. We
                have gathered a selection of curated journeys from different
                parts of the country. Find interesting sights to see, places to
                visit, and restaurants to dine in.
              </Text>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.frame}
              >
                <View style={styles.overlapGroup}>
                  <Image source={inspoOne} style={styles.Inspoimage} />
                  <View style={styles.heartComponent}>
                    <Heart />
                  </View>
                  <View style={styles.textContent}>
                    <Text style={styles.text}>GARDEN BY{"\n"} THE BAY:</Text>
                  </View>
                </View>
                <View style={styles.overlapGroup}>
                  <Image source={inspoTwo} style={styles.Inspoimage} />
                  <View style={styles.heartComponent}>
                    <Heart />
                  </View>
                  <View style={styles.textContent}>
                    <Text style={styles.text}>GARDEN BY{"\n"} THE BAY:</Text>
                  </View>
                </View>
                <View style={styles.overlapGroup}>
                  <Image source={inspoThree} style={styles.Inspoimage} />
                  <View style={styles.heartComponent}>
                    <Heart />
                  </View>
                  <View style={styles.textContent}>
                    <Text style={styles.text}>GARDEN BY{"\n"} THE BAY:</Text>
                  </View>
                </View>
                <View style={styles.overlapGroup}>
                  <Image source={inspoFour} style={styles.Inspoimage} />
                  <View style={styles.heartComponent}>
                    <Heart />
                  </View>
                  <View style={styles.textContent}>
                    <Text style={styles.text}>GARDEN BY{"\n"} THE BAY:</Text>
                  </View>
                </View>
              </ScrollView>
              <TouchableOpacity
                style={[
                  globalStyles.buttonPrimaryContainer,
                  globalStyles.textCenter,
                ]}
              >
                <Text style={globalStyles.buttonPrimary}>View More</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
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
            <TouchableOpacity
              style={[
                globalStyles.buttonPrimaryContainer,
                globalStyles.textCenter,
              ]}
            >
              <Text style={globalStyles.buttonPrimary}>View More</Text>
            </TouchableOpacity>
            <View style={styles.stackFrame}>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionOne} style={styles.stackImage} />
                  <View style={styles.heartComponent}>
                    <Heart />
                  </View>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                  <Text style={globalStyles.p2}>
                    Discover the perfect stay that suits your preferences. Click
                    on the tags below to explore accommodations tailored to your
                    needs.
                  </Text>
                </View>
              </View>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionTwo} style={styles.stackImage} />
                  <View style={styles.heartComponent}>
                    <Heart />
                  </View>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                  <Text style={globalStyles.p2}>
                    Discover the perfect stay that suits your preferences. Click
                    on the tags below to explore accommodations tailored to your
                    needs.
                  </Text>
                </View>
              </View>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionThree} style={styles.stackImage} />
                  <View style={styles.heartComponent}>
                    <Heart />
                  </View>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                  <Text style={globalStyles.p2}>
                    Discover the perfect stay that suits your preferences. Click
                    on the tags below to explore accommodations tailored to your
                    needs.
                  </Text>
                </View>
              </View>
              <View style={styles.stackIndividual}>
                <View style={styles.stackOverlapGroup}>
                  <Image source={attractionFour} style={styles.stackImage} />
                  <View style={styles.heartComponent}>
                    <Heart />
                  </View>
                </View>
                <View style={styles.stackTextContent}>
                  <Text style={styles.stackText}>Skyline Luge Sentosa</Text>
                  <Text style={globalStyles.p2}>
                    Discover the perfect stay that suits your preferences. Click
                    on the tags below to explore accommodations tailored to your
                    needs.
                  </Text>
                </View>
              </View>
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
  innerContainer: {
    paddingLeft: 30,
    paddingRight: 30,
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
});

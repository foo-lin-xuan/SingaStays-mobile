import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { globalStyles } from "./styles";
import attractionDetail from "./assets/attraction-details.jpg";
import Tag from "./Tag";

export default function AttractionDetail({ navigation }) {
  let region = {
    latitude: 1.251944,
    longitude: 103.816944,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={attractionDetail} style={styles.image} />
        <View style={styles.innerContainer}>
          <View style={globalStyles.section}>
            <View style={globalStyles.line}></View>
            <Text style={[globalStyles.h1, globalStyles.span]}>
              Skyline Luge Sentosa
            </Text>
            <Text style={styles.rating}>
              {`\u2605`}
              <Text style={[globalStyles.p1, globalStyles.span]}>4.6</Text>
            </Text>
            {/* <Text style={globalStyles.p1}>
              Board the Skyride for a scenic bird’s eye view of Sentosa island
              and Singapore’s skyline.
            </Text> */}
            {/* Tags */}
            <Text style={globalStyles.p1}>
              Board the Skyride for a scenic bird’s eye view of Sentosa island
              and Singapore’s skyline. Take your pick from one of four thrilling
              Luge tracks. Gentle and leisurely or steep and adventurous — the
              choice is yours.
            </Text>
          </View>

          <View style={globalStyles.section}>
            <Text style={globalStyles.h2}>
              More
              <Text style={globalStyles.span}> Information</Text>
            </Text>

            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Address</Text>
                <Text style={styles.tableCell}>
                  45 Siloso Beach Walk, 099003
                </Text>

                <MapView style={styles.map} region={region}>
                  <Marker
                    coordinate={{
                      latitude: region.latitude,
                      longitude: region.longitude,
                    }}
                  />
                </MapView>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Contact</Text>
                <Text style={styles.tableCell}>+6562740472</Text>
              </View>

              <View style={styles.tableRow}>
                <Text style={styles.tableCellHeader}>Email</Text>
                <Text style={styles.tableCell}>hello@skylineluge.com</Text>
              </View>
            </View>

            <TouchableOpacity style={[globalStyles.buttonPrimaryContainer]}>
              <Text style={globalStyles.buttonPrimary}>Visit Website</Text>
            </TouchableOpacity>
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

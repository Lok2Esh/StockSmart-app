import { ScrollView, StyleSheet, Text, View } from "react-native"
import Cards from "../components/cards"


export default function HomeScreen() {


    const handlePress = () => {
        console.log(alert("Clicked"));
      };

    return(
        <ScrollView>
            <View 
                style={styles.homeScreenContainer}
            >
                <View style={styles?.recentActContainer}>
                    <Text style={styles.heading}>Recent Activity</Text>
                    <View style={styles.topContainer}>
                        <Cards onPress={handlePress} text="In Stock" count={0} animColor="orange"/>
                        <Cards onPress={handlePress} text="Sell" count={10} animColor="blue"/>
                        <Cards onPress={handlePress} text="Purchased" count={100} animColor="skyblue"/>
                        <Cards onPress={handlePress} text="Out Stock" count={1000} animColor="red"/>
                    </View>
                </View>
            </View>            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeScreenContainer: {
        backgroundColor: "#f1f1f1",
        padding: 20,
    },
    heading:{
        fontWeight: "bold",
        fontSize: 12
    },
    recentActContainer:{
        display: "flex",
        gap: 15,
    },
    topContainer:{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    }
})
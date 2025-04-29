import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {GrandHotel_400Regular, useFonts} from '@expo-google-fonts/grand-hotel'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export default function HeaderComponent() {

    // In order to use Fonts, we must use the useFonts hook
    const [isLoaded] = useFonts({
        GrandHotel_400Regular
    });

    // Because our fonts are packaged withing the app, we want to check if the fonts are loaded first before displaying to avoid ugly jummping

    if(!isLoaded){
        return null
    }



  return (
    <View style={styles.HeaderContainer}>
        {/* First view will represent the div our text *instagram is in*/}
      <View>
        <Text style={[styles.WhiteText, styles.HeaderText, {fontFamily: "GrandHotel_400Regular" }]}>Instagram</Text>
      </View>

        {/* This div will be where our buttons or icons are*/}
      <View>
        <FontAwesomeIcon icon={faHeart} style={{color: "white", marginRight: 25}} size={25}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        marginTop: 5,
        paddingLeft: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    WhiteText: {
        color: "white"
    },
    HeaderText: {
        fontSize: 35
    }
})
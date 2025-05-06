import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import profileImage from "../assets/kratos.jpg"

export default function StoriesComponent() {
  return (
    // We are creating a carousel by adding horizontal to your scroll view component
    <ScrollView horizontal>
      
     {/* Container that holds our stories*/}

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradiant colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "4f5bd5"]}>

          {/* This view will be our image wrapper*/}
        
        <View>
          {/* Profile Image */}
          <Image style={styles.image} source={profileImage}/>
        </View>
        
        </LinearGradiant>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    margin: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 50
  }
})
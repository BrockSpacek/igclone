import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import profileImage from "../assets/kratos.jpg"
import { LinearGradient } from 'expo-linear-gradient'

export default function StoriesComponent() {
  return (
    // We are creating a carousel by adding horizontal to your scroll view component
    <ScrollView horizontal>
      
     {/* Container that holds our stories*/}

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linearGradiant} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "4f5bd5"]}>

          {/* This view will be our image wrapper*/}
        
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image style={styles.image} source={profileImage}/>
        </View>
        
        </LinearGradient>
        <Text style={styles.labelText}> Kratos </Text>
      </View>

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linearGradiant} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "4f5bd5"]}>

          {/* This view will be our image wrapper*/}
        
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image style={styles.image} source={profileImage}/>
        </View>
        
        </LinearGradient>
        <Text style={styles.labelText}> Kratos </Text>
      </View>

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linearGradiant} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "4f5bd5"]}>

          {/* This view will be our image wrapper*/}
        
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image style={styles.image} source={profileImage}/>
        </View>
        
        </LinearGradient>
        <Text style={styles.labelText}> Kratos </Text>
      </View>

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linearGradiant} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "4f5bd5"]}>

          {/* This view will be our image wrapper*/}
        
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image style={styles.image} source={profileImage}/>
        </View>
        
        </LinearGradient>
        <Text style={styles.labelText}> Kratos </Text>
      </View>

      <View style={styles.container}>
        {/* Gradiant Border Around our image */}
        <LinearGradient style={styles.linearGradiant} colors={["#feda75", "#fede1e", "#d62976", "#962fbf", "4f5bd5"]}>

          {/* This view will be our image wrapper*/}
        
        <View style={styles.imageWrapper}>
          {/* Profile Image */}
          <Image style={styles.image} source={profileImage}/>
        </View>
        
        </LinearGradient>
        <Text style={styles.labelText}> Kratos </Text>
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
  },
  imageWrapper: {
    width: 87,
    height: 87,
    borderRadius: 50,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradiant: {
    width: 94,
    height: 94,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  labelText: {
    color: "white",
    fontSize: 15,
    marginTop: 5
  }

})
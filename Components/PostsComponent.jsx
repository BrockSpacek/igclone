import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Kratos from "../assets/Kratos.jpg"
import Pikachu from "../assets/Pikachu-removebg-preview.png"

export default function PostsComponent() {
  const [posts, setPosts] = useState([
    {
      profilePicture: Kratos,
      userName: "GodOfWar",
      postImage: Pikachu,
      numOfLikes: "103k",
      description: "Felt cute, might delete later",
      comments: [
        {
          userWhoCommented: "Caterpop_89",
          userComment: "Das cool!"
        }
      ]
    }
  ])
  return (
    <View>
      <StoriesComponent />
      <Text style={{color: "white"}}>PostsComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
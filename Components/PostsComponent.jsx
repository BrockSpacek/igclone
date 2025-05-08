import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Kratos from "../assets/Kratos.jpg"
import Pikachu from "../assets/Pikachu-removebg-preview.png"
import StoriesComponent from './StoriesComponent'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBookmark, faComment, faHeart, faPaperPlane } from '@fortawesome/free-regular-svg-icons'

export default function PostsComponent() {
  const [posts, setPosts] = useState([
    {
      profilePicture: Kratos,
      userName: "GodOfWar",
      postImage: Pikachu,
      numOfLikes: "103K",
      description: "Feel like fighting him",
      comments: [
        {
          userWhoCommented: "LightningBolt",
          userComment: "Das crazy!"
        }
      ]
    },
    {
      profilePicture: Pikachu,
      userName: "LightingBolt",
      postImage: Kratos,
      numOfLikes: "79k",
      description: "PIKA PIKA",
      comments: [
        {
          userWhoCommented: "GodOfWar",
          userComment: "You are going down furball!"
        }
      ]
    }
  ])
  return (
    <ScrollView>
      <StoriesComponent />
      {
      posts.map((posts,idx) => {

        return (
          //This will be our post view
          <View key={idx}>

            <View style={styles.profileNav}>
              <View style={{paddingTop: 10}}>
                <Image  source={posts.profilePicture} style={styles.profileImage}/>
              </View>

              {/* Username container*/}
              <View style={styles.usernameContainer}>
                <Text style={styles.usernameText}>{posts.userName}</Text>
              </View>
              {/* Dots Container */}
              <View style={styles.dotsContainer}>
                <Text style={styles.dotsText}>.</Text>
                <Text style={styles.dotsText}>.</Text>
                <Text style={styles.dotsText}>.</Text>
              </View>

              </View>
              {/* Container for our Image Post */}
              <View>
              <Image source={posts.postImage} style={styles.postImg}/>
            </View>
            {/* Parent Container for our Icons and Likes*/}
            <View style={{ flexDirection: "row"}}>
              <View style={{ flexDirection: "row", flex: 1, alignItems: "center", paddingLeft: 14, paddingTop: 10 }}>
                  <FontAwesomeIcon icon={faHeart} style={{color: "white", marginRight: 5}} size={25}/>
                  <Text style={{color: "white", fontWeight: "bold", marginRight: 10}}>{posts.numOfLikes}</Text>
                  <FontAwesomeIcon icon={faComment} style={{color: "white", transform: [{ rotateY: '180deg'}], marginRight: 20 }} size={25}/>
                  <FontAwesomeIcon icon={faPaperPlane} style={{color: "white"}} size={25}/>
              </View>
              <View style={{justifyContent: "center", paddingTop: 10, marginRight: 10}}>
                <FontAwesomeIcon icon={faBookmark} size={25} style={{color: "white"}}/>
              </View>

            </View>

            <View style={{flex: 1, flexDirection: "row", paddingTop: 5}}>
              <Text style={{color: "white", fontWeight: "bold", paddingLeft: 14, paddingRight: 5}}>{posts.userName}</Text>
              <Text style={{color: "white"}}>{posts.description}</Text>
            </View>

          </View>
        )

      })
      }     
    </ScrollView>
  )
}

const styles = StyleSheet.create({
profileNav: {
  flexDirection: "row",
  paddingBottom: 10
},
profileImage: {
  height: 40,
  width: 40,
  borderRadius: 50
},
usernameContainer: {
  paddingLeft: 15,
  justifyContent: "center",
  paddingTop: 10
},
usernameText: {
  color: "white",
  fontSize: 15,
  fontWeight: "bold"
}, 
dotsContainer: {
  flex: 1,
  alignItems: "flex-end",
  justifyContent: "center",
  paddingRight: 10
},
dotsText: {
  color: "white",
  fontSize: 30,
  lineHeight: 10
},
postImg:{
  height:400,
  width: "100%",
}
})
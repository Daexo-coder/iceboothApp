import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
     <View style={styles.innerbox}>
      <View style={styles.header}>
        <Image source={require('./myFace.jpg')} style={styles.profilePicture}/>
        <View><Text style={styles.profileName}>Monehela Lichaba</Text>
        <Text style={styles.activeStatus}>10hrs ago</Text></View>
        <AntDesign name="ellipsis1" size={24} color="black" style={styles.ellipses}/>
      </View>
      <Text>This is a facebook user profile for <Text>Monehela Lichaba</Text>. 
      It contains the image of his favourite dish. Mmmmmmmm!</Text>
      <View style={styles.innerOfInnerBox}>
        <Image source={require('./likhobe.jpg')} style={styles.biggerPicture}/>
      </View>
      <Text style={styles.forLikes}>1.76K likes</Text>
      <View style={styles.footer}>
      <SimpleLineIcons name="like" size={24} color="black" style={marginRight=0}/>
        <Text style={styles.forfooter}>Like</Text>
        <FontAwesome6 name="comment-alt" size={24} color="black" style={marginRight=0}/>
        <Text style={styles.forfooter}>Comment</Text>
        <Fontisto name="share-a" size={24} color="black" style={marginRight=0 }/>
        <Text style={styles.forfooter}>Share</Text>
      </View>
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c2e4a',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },

  header:{
    width:'100%',
    height:'3.2em',
    borderWidth:'.01em',
    display:'flex',
    flexDirection:'row',
    justifyContent:'no-space',
    borderRadius:'.5em',
    borderColor:'grey',
    padding:'.1em',
  },

  innerbox:{
    marginTop: '3%',
    height:'70vh',
    width:'24%',
    backgroundColor:'#fff',
    borderRadius:5,
    padding:'.3em',
  },
  activeStatus:{
    color:'grey',
    fontSize:'.7em',
    marginLeft:'1em',
  },
  profileName:{
    fontWeight:'bold',
    textTransform:'capitalise',
    fontSize:'.8em',
    marginLeft:'1em',
  },
  innerOfInnerBox:{
    backgroundColor:'grey',
    width:'100',
    height: '55%',
    objectFit:'fill',
    borderRadius:'.2em',
  },

  footer:{
    marginTop:'.5em',
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    borderTopWidth:'.02em',
    borderTopColor:'grey',

  },
  forfooter:{
    margin:0,
    padding:0,
  },
  forLikes:{
    margin:'.5em',
  },
  profilePicture:{
    borderWidth:'.03em',
    borderRadius:'100%',
    backgroundColor:'black',
    height:50,
    width:50,
    margin:0,
  },
  biggerPicture:{
    width:'100%',
    height:'100%',
  },
  ellipses:{
    marginLeft:'5.4em',
  }
});

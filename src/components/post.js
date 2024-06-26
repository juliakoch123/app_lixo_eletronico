import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

export function Post({ user, image, secondImage, thirdImage, fourthImage, description, navigation, category }) {
  return (
    <View style={styles.post}>
      <View style={styles.postIdentification}>
        <Image
          source={require('../assets/userIconLight.png')}
          style={styles.userIcon}
        />
        <Text style={styles.userName}> {user}</Text>
      </View>
        <TouchableOpacity onPress={() => navigation.navigate('Product',  { imageUrl: image, secondImage: secondImage, thirdImage: thirdImage, fourthImage: fourthImage, category: category, description: description, user: user },)}>
          <Image source={{ uri: image }} style={styles.productImage}/>
        </TouchableOpacity>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
    backgroundColor: '#56585B',
    marginBottom: 20,
  },
  productImage: {
    width: 'auto',
    height: 250,
  },
  userIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10
  },
  postIdentification: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 15,
    color: 'white',
  },
  description: {
    fontSize: 15,
    color: 'white',
    margin: 15,
  }
});
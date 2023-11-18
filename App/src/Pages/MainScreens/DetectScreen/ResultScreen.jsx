import {View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import React from 'react';

const ResultScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Seçiminiz</Text> */}
        <Image
          source={require("./img/afterai.jpeg")}
          resizeMode="contain"
          style={styles.selectedImage}
        />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 300,
        }}>
        <TouchableOpacity
          style={styles.buttonContainer}
        //   onPress={handleNextPress}
          >
          <View style={styles.buttonInnerContainer}>
            <Text style={styles.buttonText}>Növbəti</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#296D84',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: 'black',
    },
    button: {
      backgroundColor: '#296D84',
      padding: 10,
      borderRadius: 5,
      marginTop: 16,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    selectedImage: {
      width: 300,
      height: 300,
      marginTop: 16,
      borderRadius: 8,
      backgroundColor: 'red',
    },
    buttonContainer: {
      marginTop: 52,
      width: 345,
      height: 38,
      paddingTop: 6,
      paddingBottom: 8,
      paddingLeft: 24,
      paddingRight: 24,
      borderRadius: 40,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row', // Flex direction set to row
      gap: 4,
      display: 'flex',
    },
    buttonInnerContainer: {
      textAlign: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 17,
      fontFamily: 'Noto Sans',
      fontWeight: '400',
      lineHeight: 24,
      // wordWrap: 'break-word',
    },
  });

export default ResultScreen;

import { View, Text, ScrollView, Dimensions, TouchableHighlight, TextInput,Image } from 'react-native'
import React, { useState } from 'react'
import Footer from '../../../layouts/Footer/Footer'
import {styles} from "./style"

import SearchIcon from "../RecentPage/img/search.svg"
const ServicePage = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const [searchText, setSearchText] = useState("");
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={[styles.main,{backgroundColor: '#014370'}]}>
      <View style={[styles.container, {height: screenHeight}]}>
      <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Axtar.."
            placeholderTextColor="#014370"
            onChangeText={(text) => setSearchText(text)}
            value={searchText}
          />
          <TouchableHighlight onPress={() => {}} style={styles.searchIcon}>
            <SearchIcon />
          </TouchableHighlight>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
          <View style={styles.items}>
          <View style={styles.item}><TouchableHighlight underlayColor="#014370" style={styles.itemImg} onPress={()=>{}}><Image style={styles.itemImg} source={require("./img/front.jpg")}/></TouchableHighlight><Text style={styles.itemText}>FrontEnd Developer</Text></View>
          <View style={styles.item}><TouchableHighlight underlayColor="#014370" style={styles.itemImg} onPress={()=>{}}><Image style={styles.itemImg} source={require("./img/back.jpg")}/></TouchableHighlight><Text style={styles.itemText}>Backend Developer</Text></View>
          <View style={styles.item}><TouchableHighlight underlayColor="#014370" style={styles.itemImg} onPress={()=>{}}><Image style={styles.itemImg} source={require("./img/full.jpg")}/></TouchableHighlight><Text style={styles.itemText}>FullStack Developer</Text></View>
          <View style={styles.item}><TouchableHighlight underlayColor="#014370" style={styles.itemImg} onPress={()=>{}}><Image style={styles.itemImg} source={require("./img/uxui.jpg")}/></TouchableHighlight><Text style={styles.itemText}>UX/UI Designer</Text></View>
          <View style={styles.item}><TouchableHighlight underlayColor="#014370" style={styles.itemImg} onPress={()=>{}}><Image style={styles.itemImg} source={require("./img/mobile.jpg")}/></TouchableHighlight><Text style={styles.itemText}>Mobile Developer</Text></View>
          <View style={styles.item}><TouchableHighlight underlayColor="#014370" style={styles.itemImg} onPress={()=>{}}><Image style={styles.itemImg} source={require("./img/qa.jpg")}/></TouchableHighlight><Text style={styles.itemText}>QA Engineer</Text></View>
          <View style={styles.item}><TouchableHighlight underlayColor="#014370" style={styles.itemImg} onPress={()=>{}}><Image style={styles.itemImg} source={require("./img/elec.jpg")}/></TouchableHighlight><Text style={styles.itemText}>Electronic Engineer</Text></View>
          <View style={styles.item}><TouchableHighlight underlayColor="#014370" style={styles.itemImg} onPress={()=>{}}><Image style={styles.itemImg} source={require("./img/data.jpg")}/></TouchableHighlight><Text style={styles.itemText}>Data Analysist</Text></View>
          </View>
        </ScrollView>
        </View>
        <Footer value={4}/>
        </ScrollView>
  )
}

export default ServicePage
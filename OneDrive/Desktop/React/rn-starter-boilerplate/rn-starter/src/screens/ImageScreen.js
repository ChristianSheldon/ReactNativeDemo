import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
 return <View>
    <ImageDetail 
    title="Forest" 
    imageSource={require(`../../assets/forest.jpg`)}
    rank="9"
    />
    <ImageDetail 
    title="Beach" 
    imageSource={require(`../../assets/beach.jpg`)}
    rank="7"
    />
    <ImageDetail 
    title="Mountain" 
    imageSource={require(`../../assets/mountain.jpg`)}
    rank="4"
    />
 </View>
};

const styles = StyleSheet.create({});

export default ImageScreen;
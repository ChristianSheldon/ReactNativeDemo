import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Text style={styles.text}>React Native Demos!</Text>
    <Button 
    title="Go to Components Demo"
    onPress={() => navigation.navigate(`Components`)}
    />
    <Button
    title="Go to List Demo"
    onPress={() => navigation.navigate(`List`)}
    />
    <Button
    title="Go to Image Demo"
    onPress={() => navigation.navigate(`Image`)}
    />
    <Button
    title="Go to Count Demo"
    onPress={() => navigation.navigate(`Count`)}
    />
    <Button
    title="Go to Count Game Demo"
    onPress={() => navigation.navigate(`Game`)}
    />
    <Button
    title="Go to Count Colour Demo"
    onPress={() => navigation.navigate(`Colour`)}
    />
    <Button
    title="Go to Count Colour change Demo"
    onPress={() => navigation.navigate(`change`)}
    />
    </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

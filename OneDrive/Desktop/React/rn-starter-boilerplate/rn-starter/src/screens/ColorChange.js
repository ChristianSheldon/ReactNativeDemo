import React, {useState} from "react";
import { Text, StyleSheet, View, Button, FlatList} from "react-native";

const ColorChange = () => {
    const [colours, setColours] = useState([]);
    
    const randomRGB = ()  => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue} )`;
    }





return (
    <View>
       <Button title="add a colour" onPress={() => {
        setColours([...colours, randomRGB()])
    }}/>
      
       <FlatList
       keyExtractor={(item) => item}
       data={colours}
       renderItem={({item}) =>{
        return <View 
       style={{height: 100, width: 100, backgroundColor: item}}
        />    
    }}
       />
    </View>
    );
};

const styles = StyleSheet.create({});

export default ColorChange;
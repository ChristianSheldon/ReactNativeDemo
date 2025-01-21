import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CountGame = () => {
  const [counter, setCounter] = useState(0);
  const [Multiplyer, setMultiplier] = useState(1);
  const [levelupxp, setLevelUpxp] = useState(100);
  const [levelUpMagicxp, setLevelUpMagicxp] = useState(20);

  const handleLevelUp = () => {
    if (counter >= levelupxp) {
      setMultiplier(Multiplyer + 1);
      setCounter(counter - levelupxp);
      setLevelUpxp(levelupxp * 1.2);
    }
  };

  const handleLevelUpMagic = () => {
    if (counter >= levelUpMagicxp) {
      setMultiplier(Multiplyer + 0.2);
      setCounter(counter - levelUpMagicxp);
      setLevelUpMagicxp(levelUpMagicxp * 1.02);
    }
  };

  return (
    <View>
      <Button
        title={"Magic Training - " + levelUpMagicxp}
        onPress={handleLevelUpMagic}
      />
      <Button
        title={"Level-Up - " + levelupxp}
        onPress={handleLevelUp}
      />
      <Button
        title="Train"
        onPress={() => {
          setCounter(counter + 1 * Multiplyer);
        }}
      />
      <Text>Current XP: {counter}</Text>
      <Text>Current Multiplyer: {Multiplyer}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CountGame;

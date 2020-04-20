import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

function TV(props) {
  const [isOff,setIsOff] = useState(true);

  return (
    <View>
      <Text>
        {"\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "OFF" : "Turned On"}!
    </Text>
    <Button
      onPress={() => {
        setIsOff(false);
      }}
      disabled={!isOff}
      title={isOff ? "Turn Me On, Please!" : "Thank You!"}
    />
  </View>
  );
}

export default function MultiTvs() {
  return (
    <View>   
      <TV name = "LG"/>
      <TV name = "Sony"/>
    </View>
  );
}

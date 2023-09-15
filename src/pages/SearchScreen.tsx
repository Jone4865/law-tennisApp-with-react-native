import React from 'react';
import {View, Text, Button} from 'react-native';

interface SearchScreenProps {
  navigation: any;
}

function SearchScreen({navigation}: SearchScreenProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Item ID: </Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default SearchScreen;

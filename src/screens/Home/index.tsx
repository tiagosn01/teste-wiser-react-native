import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#130525', fontSize: 24 }}>Bem-vindo</Text>
      <Text style={{ color: '#130525' }}>HOME</Text>
    </View>
  );
};

export default Home;

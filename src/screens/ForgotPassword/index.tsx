import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

// import { Container } from './styles';

function ForgotPassword(): JSX.Element {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#000' }}>ForgotPassword</Text>
      <Button
        title="goBack"
        onPress={() => {
          navigation.goBack();
        }}
      >
        Back
      </Button>
    </View>
  );
}

export default ForgotPassword;

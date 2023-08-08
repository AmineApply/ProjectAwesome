import React, {useState} from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = () => {
  const [stateText, setText] = useState('useState in title text');

  const onTextPress = () => {
    setText('text pressed');
  };
  return (
    <Text onPress={onTextPress} style={styles.title}>
      {stateText}
    </Text>
  );
};

Title.defaultProps = {
  text: 'This is default text',
};

export default Title;

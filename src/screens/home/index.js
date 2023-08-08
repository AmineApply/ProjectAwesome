import React, {useEffect, useState} from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import Title from '../../component/title';

const Home = () => {
  const [tit, setTit] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTit(10);
    }, 3000);
  });

  const onPres = () => {
    setTit(tit + 1);
  };

  return (
    <SafeAreaView>
      <View>
        <Title text="from home index " />
        <Text onPress={onPres} style={{fontSize: 30}}>
          {tit}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);

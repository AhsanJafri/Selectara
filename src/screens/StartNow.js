import {Button} from 'native-base';
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
var {height, width} = Dimensions.get('window');
const StartNow = props => {
  return (
    <>
      <StatusBar backgroundColor="tomato" />
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
        <View
          style={{
            height: '70%',
            width: '80%',
            marginTop: '15%',
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image
              source={{
                uri: 'https://cdn-images-1.medium.com/max/140/1*7TRTVTHrpLTpQuGAVCfg5w@2x.png',
              }}
              style={{height: height * 0.25, width: width * 0.3}}
            />
          </View>

          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.07,
                fontWeight: 'bold',
                color: '#6e8bba',
                marginTop: '10%',
                textDecorationLine: 'line-through',
              }}>
              SELECTARA
            </Text>
          </View>
          <View style={{flex: 1}}></View>
        </View>
        <View
          style={{
            height: '8%',
            width: '80%',
            borderRadius: 100,
            backgroundColor: '#2D2926',
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => props.navigation.navigate('Naming')}>
            <Text style={{color: '#FFFF', fontSize: 16}}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default StartNow;

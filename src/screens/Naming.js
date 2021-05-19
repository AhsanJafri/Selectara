import {Button} from 'native-base';
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
var {height, width} = Dimensions.get('window');
const Datum = [
  {id: 1, rule: 'Game consist of many Questions'},
  {id: 2, rule: 'Each correct Question consist of 10 marks'},
  {id: 3, rule: 'Select 2 best choices from the answer'},
];
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
            <Text
              style={{
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.05,
                marginTop: '8%',
                marginBottom: '15%',
                color: '#6e8bba',
              }}>
              Games Rules
            </Text>
            <FlatList
              data={Datum}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <Text
                      style={{
                        fontFamily: 'AkayaTelivigala-Regular',
                        fontSize: height * 0.03,
                        marginTop: '3%',
                        textAlign: 'justify',
                      }}>
                      {index + 1}- {item.rule}
                    </Text>
                  </View>
                );
              }}
            />

            <Text
              style={{
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.04,
                marginBottom: '10%',
                marginTop: '15%',
              }}>
              Happy Gaming
            </Text>
          </View>

          <View style={{flex: 1}}></View>
          <View
            style={{
              height: '10%',
              width: '100%',
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
              onPress={() => props.navigation.navigate('Game')}>
              <Text style={{color: '#FFFF', fontSize: 16}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default StartNow;

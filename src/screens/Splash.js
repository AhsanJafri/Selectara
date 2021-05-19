import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';
const {height, width} = Dimensions.get('screen');
export default class Splash extends Component {
  constructor() {
    super();
    this.state = {
      View1: new Animated.Value(1),
      View2: new Animated.Value(0),
      View3: new Animated.Value(0),
      View4: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.animation();
  }

  animation = () => {
    Animated.sequence([
      Animated.timing(this.state.View1, {
        toValue: 1,
        duration: 2000,
      }),
      Animated.timing(this.state.View2, {
        toValue: 1,
        duration: 1500,
      }),
    ]).start(() => {
      setTimeout(() => this.props.navigation.navigate('StartNow'), 2000);
    });
  };

  render() {
    const {View1, View2, View3, View4} = this.state;
    const size = View4.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, 1, 1, 1, 50],
    });

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="tomato" />
        <Animated.View
          style={{flexDirection: 'row', opacity: View1}}></Animated.View>
        <Image
          source={{
            uri: 'https://cdn-images-1.medium.com/max/140/1*7TRTVTHrpLTpQuGAVCfg5w@2x.png',
          }}
          style={{height: height * 0.4, width: width * 0.8}}
        />
        <Animated.View style={{flexDirection: 'row', opacity: View2}}>
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
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  views: {
    flexDirection: 'row',
    position: 'absolute',
  },
});

import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  Touchable,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {TimerFunction, Progressbar} from '../components/index';
import {getQuestion} from '../constants/helper';
const {height, width} = Dimensions.get('screen');
const HEADER = height / 3 - 130;
const CONTENT = height - HEADER;
import {CommonActions} from '@react-navigation/native';

let correct = 0;
let allQues = [];

export class Game extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      question: [1],
      selected: [],
    };
  }
  componentDidMount() {
    // this.TimerFunction();
    this.setState({question: getQuestion(0)});
    console.log(getQuestion(0));
  }

  TimerFunction = () => {
    setInterval(() => {
      if (this.state.timer < 60) {
        this.setState({timer: this.state.timer + 1});
      } else {
        this.setState({timer: 0});
        this.props.navigation.navigate('GameOver', {
          correct: correct,
        });

        return;
      }
    }, 1000);
  };
  handleOnPressUpdate = val => {
    if (this.state.selected.length < 2) {
      let temp = [...this.state.selected, val];
      temp = temp.sort(function (a, b) {
        return a - b;
      });
      console.log('Test', temp);
      this.setState({selected: temp});
    }
    setTimeout(() => {
      if (this.state.selected.length == 2) {
        console.log('Second Condition');
        if (
          JSON.stringify(this.state.question.ans) ===
          JSON.stringify(this.state.selected)
        ) {
          correct = correct + 1;

          let i = Math.floor(Math.random() * Math.floor(9));
          console.log('Correct');
          if (allQues.indexOf(i) < 0) {
            setTimeout(() => {
              this.setState({question: getQuestion(i)});
              this.setState({selected: []});
            }, 500);
          }
        } else {
          this.props.navigation.navigate('GameOver', {
            correct: correct,
          });
        }

        // if (
        //   JSON.stringify(this.state.question.ans) ===
        //   JSON.stringify(this.state.selected)
        // ) {
        //   correct = correct + 1;

        //   let i = Math.floor(Math.random() * Math.floor(10));
        //   if (allQues.indexOf(i) < 0) {
        //     setTimeout(() => {
        //       this.setState({question: getQuestion(i)});
        //       this.setState({selected: []});
        //     }, 500);
        //   }
        // } else {
        //   this.props.navigation.navigate('GameOver', {
        //     correct: correct,
        //   });
        // }
      }
    }, 1000);

    console.log('Correct :::', correct);
  };
  render() {
    const {timer, question, selected} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            height: HEADER,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFF',
          }}>
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
        <View style={{height: CONTENT}}>
          <View
            style={{
              height: CONTENT / 8,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                width: '90%',
                textAlign: 'center',
                fontFamily: 'AkayaTelivigala-Regular',
                fontSize: height * 0.025,
              }}>
              CHOOSE 2 OF THE BEST MATCHING
            </Text>
          </View>
          <View
            style={{
              height: CONTENT / 1.34,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,
                  borderWidth: selected.indexOf(1) >= 0 ? 3 : 0,
                }}
                onPress={() => this.handleOnPressUpdate(1)}>
                <Image
                  source={{uri: question.choice1}}
                  style={{
                    height: '100%',
                    width: '100%',
                    alignSelf: 'center',
                  }}
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,

                  borderWidth: selected.indexOf(2) >= 0 ? 3 : 0,
                }}
                onPress={() => this.handleOnPressUpdate(2)}>
                <Image
                  source={{uri: question.choice2}}
                  style={{height: '100%', width: '100%', alignSelf: 'center'}}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,

                  borderWidth: selected.indexOf(3) >= 0 ? 3 : 0,
                }}
                onPress={() => this.handleOnPressUpdate(3)}>
                <Image
                  source={{uri: question.choice3}}
                  style={{height: '100%', width: '100%', alignSelf: 'center'}}
                  resizeMode="stretch"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,

                  borderWidth: selected.indexOf(4) >= 0 ? 3 : 0,
                }}
                onPress={() => this.handleOnPressUpdate(4)}>
                <Image
                  source={{uri: question.choice4}}
                  style={{height: '100%', width: '100%', alignSelf: 'center'}}
                  resizeMode="stretch"
                />
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,
                }}
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice3)
                }>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#ffff',
                  }}>
                  {this.state.question.choice3}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  width: '40%',
                  height: '55%',
                  backgroundColor: 'tomato',
                  borderRadius: 15,
                }}
                onPress={() =>
                  this.handleOnPressUpdate(this.state.question.choice4)
                }>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontWeight: 'bold',
                    color: '#ffff',
                  }}>
                  {this.state.question.choice4}
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </View>
    );
  }
}

export default Game;

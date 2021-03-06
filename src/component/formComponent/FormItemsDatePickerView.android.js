'use strict';

import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import Colors from '../../constant/Colors';
import {MKButton, MKColor} from 'react-native-material-kit';

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;
// var _this;

export default class FormItemsDatePickerView extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        row: this.props.row,
      };
      // _this = this;
  }

  handleChange(text) {
    this.props.onUserInput(this.state.row.name, text);
  }

  getDateChange(data){
    this.setState({date: data.date,});
  }

  render() {
    let contentView;
    let contentColor = 'gray';
    if (this.state.date) {
      contentView = this.state.date;
      contentColor = Colors.black;
      this.handleChange(contentView);
    } else {
      contentView = '点击选择日期';
    }
    let _this = this;
    var ColoredFlatButton = MKButton.coloredFlatButton()
      .withText(contentView)
      .withTextStyle({color: contentColor, fontSize: 14, marginRight: 10,})
      .withOnPress(() => {
      _this.props.refs.modalcalendar.refs.modal.show(_this);
    }).build();

    return (
      <View style={formComponentStyles.container}>
        <View style={formComponentStyles.titleContainer}>
          <Text style={formComponentStyles.title}>
            {this.state.row.title}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.buttonContainer}>
            <ColoredFlatButton/>
          </View>
        </View>
      </View>
    );
  }
}

import formComponentStyles from './styles';
var styles = StyleSheet.create({
  button: {
    height: 36,
    width: 180,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 8,
    margin: 10,
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 55,
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
  },
  calendarContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  postImage: {
    width: 38,
    height: 38,
  }
});

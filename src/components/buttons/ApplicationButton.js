import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS, FONTS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';

export default function Button55W({ onPress, buttonStyle, textStyle, disabled, content }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      style={[{ ...styles.largeButton, ...buttonStyle }, disabled && styles.disabledButton]}
    >
      <Text style={[commonStyles.sixteenGilroy600, { color: "#181C32", ...textStyle }]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}
export function DisableButton55W({ onPress, content, buttonStyle, disabled }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      disabled
      onPress={onPress}
      style={[{ ...styles.largeButtonD, ...buttonStyle }, disabled && styles.disabledButton]}
    >
      <Text style={styles.largeButtonText}>{content}</Text>
    </TouchableOpacity>
  );
}
export function Button45W({ onPress, buttonStyle, textStyle, disabled, content }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      disabled={disabled}
      style={[{ ...styles.Button45Width, ...buttonStyle }, disabled && styles.disabledButton]}
    >
      <Text style={[commonStyles.sixteenGilroy700, { color: COLORS.white, ...textStyle }]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}

export function Button35W({ onPress, content, buttonStyle, rightArrow }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{ ...styles.small35Button, ...buttonStyle }}
    >
      <Text style={[commonStyles.twelveGilroy700, { color: COLORS.white }]}>{content}</Text>
      {rightArrow ? <Image source={Icons.arrowRight} style={styles.rightArrow} /> : null}
    </TouchableOpacity>
  );
}

export function OutlineButton55W({ onPress, content, buttonStyle, buttonColor }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{ ...styles.outlineButton55, ...buttonStyle }}
    >
      <Text style={[commonStyles.eighteenGilroy700, { color: COLORS.darkGreen, ...buttonColor }]}>
        {content}
      </Text>
    </TouchableOpacity>
  );
}
export function OutlineButton45W(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={[
        styles.outlineButton45,
        {
          borderColor: props.borderColor ? props.borderColor : COLORS.darkRed
        }
      ]}
    >
      <Text
        style={[
          commonStyles.sixteenGilroy700,
          { color: props.color ? props.color : COLORS.darkRed }
        ]}
      >
        {props.content}
      </Text>
    </TouchableOpacity>
  );
}

export function OutlineButton35W(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={props.onPress}
      style={[
        styles.outlineButton35,
        {
          borderColor: props.borderColor ? props.borderColor : COLORS.darkBlue
        }
      ]}
    >
      <Text
        style={[
          commonStyles.twelveGilroy700,
          { color: props.color ? props.color : COLORS.darkBlue }
        ]}
      >
        {props.content}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  largeButton: {
    height: Responsive.height(55),
    width: '100%',
    backgroundColor: "#F1D221",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  largeButtonD: {
    height: Responsive.height(55),
    width: '100%',
    backgroundColor: '#85CFB0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  largeButtonText: {
    fontFamily: FONTS.GilroyBold700,
    fontSize: 18,
    color: 'rgba(255, 255, 255, 1)'
  },
  Button45Width: {
    height: Responsive.height(45),
    width: '100%',
    backgroundColor: '#3699FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  small35Button: {
    height: Responsive.height(35),
    width: '100%',
    backgroundColor: COLORS.darkBlue,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  outlineButton55: {
    height: Responsive.height(55),
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.darkGreen,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  outlineButton45: {
    height: Responsive.height(45),
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  outlineButton35: {
    height: Responsive.height(35),
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: '#9AC3FF'
  },
  rightArrow: {
    width: Responsive.width(15),
    height: Responsive.height(15),
    resizeMode: 'contain',
    position: 'absolute',
    right: Responsive.width(10)
  }
});

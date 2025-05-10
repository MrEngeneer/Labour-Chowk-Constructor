import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';

export default function ApplicationSingleSelectInput({
  title,
  onPress,
  contain,
  disabled,
  placeholder
}) {
  let regex = /^[a-zA-Z]+$/;
  function isAlphabetic(str) {
    return [...str].every((char) => isNaN(char));
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        ...styles.container,
        backgroundColor: disabled ? COLORS.disabledBackground : COLORS.thinLightBlack,
        ...contain
      }}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Text
        style={[
          commonStyles.fourteenGilroy500,
          {
            color: disabled
              ? COLORS.disabledText
              : title
                ? COLORS.regularBlack
                : COLORS.disabledIcon
          }
        ]}
      >
        {title ? title : placeholder}
      </Text>
      <Image
        source={Icons.arrowDown}
        style={[
          styles.arrowIcon,
          { tintColor: disabled ? COLORS.disabledIcon : COLORS.regularBlack }
        ]}
      />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: Responsive.width(15),
    paddingRight: Responsive.width(12),
    backgroundColor: COLORS.thinLightBlack,
    height: Responsive.height(50),
    borderRadius: 10,
    alignItems: 'center'
  },
  arrowIcon: {
    width: Responsive.width(14),
    height: Responsive.height(8),
    resizeMode: 'contain'
  }
});

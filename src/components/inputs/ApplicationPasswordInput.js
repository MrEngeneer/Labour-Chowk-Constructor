import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';

export default function ApplicationPasswordInput({
  label,
  autoCapitalize,
  onchange = () => {},
  keyboardType,
  placeholderText,
  maxLength,
  addressinputStyle,
  type,
  wordCounter,
  inputStyle,
  labelTextStyle,
  optionalInputField,
  onError,
  onBlur,
  showError,
  val,
  errors,
  InputIcon
}) {
  const [focused, setFocused] = useState(false);
  const customOnBlur = (e) => {
    setFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };
  const customOnFocus = () => {
    setFocused(true);
  };
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <View style={{ ...styles.inputStyle, ...inputStyle }}>
      <View style={styles.labelTextRow}>
        {label ? (
          <Text
            style={[commonStyles.twelveGilroy600, { ...styles.labelTextStyle, ...labelTextStyle }]}
          >
            {label}
            {optionalInputField && (
              <Text
                optionalInputField
                style={[commonStyles.tenGilroy500, styles.optionalInputField]}
              >
                {' '}
                (optional)
              </Text>
            )}
          </Text>
        ) : null}

        {wordCounter && <Text>32/100</Text>}
      </View>
      <View style={styles.flexView}>
        {InputIcon ? (
          <>
            <View style={{ zIndex: 9 }}>
              <View style={styles.inputIcons}>
                <Image
                  source={InputIcon}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'contain'
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: '#EBEDF3',
                  width: 1,
                  height: Responsive.height(30),
                  marginLeft: Responsive.width(48),
                  position: 'absolute',
                  top: Responsive.height(-15)
                }}
              ></View>
            </View>
          </>
        ) : null}
        <TextInput
          autoComplete={undefined}
          style={[
            {
              ...commonStyles.fourteenGilroy500,
              width: '100%',
              borderWidth: 1,
              borderColor: errors
                ? 'rgba(233, 130, 140, 1)'
                : focused
                  ? 'rgba(236, 240, 243, 1)'
                  : COLORS.thinLightBlack,
              backgroundColor: errors
                ? 'rgba(253, 245, 246, 1)'
                : focused
                  ? COLORS.white
                  : COLORS.thinLightBlack,
              textAlignVertical: 'auto',
              paddingLeft: InputIcon ? Responsive.width(63) : Responsive.width(15),
              paddingRight: Responsive.width(42),
              height: Responsive.height(50),
              borderRadius: Responsive.height(14),
              color: COLORS.regularBlack,

              ...addressinputStyle
            }
          ]}
          onBlur={(e) => customOnBlur(e)}
          onFocus={customOnFocus}
          value={val}
          onChangeText={(text) => onchange(text)}
          keyboardType={keyboardType}
          secureTextEntry={!isPasswordVisible}
          returnKeyType="done"
          autoCapitalize={autoCapitalize}
          placeholder={placeholderText}
          maxLength={maxLength}
          placeholderTextColor={COLORS.placeholderTextColor}
        />
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.eyeIcon}
          onPress={togglePasswordVisibility}
        >
          <Image
            source={isPasswordVisible ? Icons.eyeIcon : Icons.eyeIcon}
            style={{
              tintColor: '#84859A',
              width: Responsive.width(20),
              height: Responsive.height(20),
              zIndex: 9
            }}
          />
        </TouchableOpacity>
      </View>
      {onError ? (
        <View style={{ paddingTop: Responsive.height(2), alignItems: 'flex-start' }}>
          <Text style={[commonStyles.errorText]}>{onError}</Text>
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  inputIcons: {
    width: Responsive.width(20),
    height: Responsive.height(20),
    zIndex: 9,
    position: 'absolute',
    left: Responsive.width(15),
    top: Responsive.height(-10)
  },
  inlineStyle: {
    paddingVertical: Responsive.height(8),
    fontSize: Responsive.font(16),
    color: COLORS.blackOpacity80,
    flex: 1
  },
  labelTextStyle: {
    paddingBottom: Responsive.height(6),
    color: COLORS.regularBlack
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    width: '100%'
  },
  optionalInputField: {
    color: '#84859A'
  },
  labelTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  eyeIcon: {
    position: 'absolute',
    right: Responsive.width(15)
  }
});

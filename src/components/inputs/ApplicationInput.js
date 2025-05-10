import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';

export default function CommonInput({
  label,
  val,
  autoCapitalize,
  onchange,
  keyboardType,
  placeholderText,
  maxLength,
  addressinputStyle,
  wordCounter,
  Counter,
  inputStyle,
  labelTextStyle,
  optionalInputField,
  editable = true,
  onBlur,
  onError,
  useref,
  multiline,
  heightInput,
  errors,
  InputIcon,
  textCustomAligned,
  name,
  submit,
  removeLine,
  CopyTextIcon,
  SearchCross,
  searchonpress,
  handleCopy,
  imp = false
}) {
  const [focused, setFocused] = useState(false);

  const customOnBlur = (e) => {
    setFocused(false);
    onBlur ? onBlur(e) : null;
  };

  const customOnFocus = () => {
    setFocused(true);
  };

  return (
    <View style={{ ...styles.inputStyle, ...inputStyle }}>
      <View style={styles.labelTextRow}>
        {label ? (
          <Text
            style={[
              commonStyles.twelveGilroy600,
              { ...commonStyles.commonlabelTextStyle, ...labelTextStyle }
            ]}
          >
            {label}
            {imp && <Text style={{ color: 'red' }}>*</Text>}
            {optionalInputField && (
              <Text style={[commonStyles.twelveGilroy600, styles.optionalInputField]}>
                {''} ({optionalInputField})
              </Text>
            )}
          </Text>
        ) : null}

        {wordCounter && <Text>{Counter}/100</Text>}
      </View>
      <View style={[styles.flexView, { position: 'relative' }]}>
        {InputIcon ? (
          <View style={{ zIndex: 1 }}>
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
                ...styles.line,
                ...removeLine,
                backgroundColor: '#EBEDF3',
                height: Responsive.height(30),
                marginLeft: Responsive.width(48),
                position: 'absolute',
                top: Responsive.height(-15)
              }}
            ></View>
          </View>
        ) : null}

        <TextInput
          name={name}
          ref={useref ? useref : null}
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
              backgroundColor: !editable
                ? COLORS.disabledBackground
                : errors
                  ? 'rgba(253, 245, 246, 1)'
                  : focused
                    ? COLORS.white
                    : COLORS.thinLightBlack,
              color: COLORS.regularBlack,
              textAlignVertical: textCustomAligned ? textCustomAligned : 'auto',
              paddingLeft: InputIcon ? Responsive.width(63) : Responsive.width(15),
              paddingRight: Responsive.width(40),
              height: heightInput ? heightInput : Responsive.height(50),
              borderRadius: Responsive.height(10),
              ...addressinputStyle
            }
          ]}
          onBlur={(e) => customOnBlur(e)}
          onFocus={customOnFocus}
          value={val}
          onChangeText={(text) => (onchange ? onchange(text) : null)}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          autoCompleteType="off"
          placeholder={placeholderText}
          maxLength={maxLength}
          onSubmitEditing={submit}
          editable={editable}
          placeholderTextColor={editable ? COLORS.placeholderTextColor : COLORS.disabledText}
          returnKeyType={keyboardType === 'numeric' ? 'done' : undefined}
          multiline={multiline}
        />

        {CopyTextIcon && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => handleCopy(val)}
            style={{ position: 'absolute', right: Responsive.width(10), zIndex: 9 }}
          >
            <Image
              source={Icons.DocumentCOptIcon}
              style={{
                width: Responsive.width(20),
                height: Responsive.height(20),
                resizeMode: 'contain'
              }}
            />
          </TouchableOpacity>
        )}

        {SearchCross && (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={searchonpress}
            style={{ position: 'absolute', right: Responsive.width(10), zIndex: 9 }}
          >
            <Image
              source={Icons.searchCutIcon}
              style={{
                width: Responsive.width(20),
                height: Responsive.height(20),
                resizeMode: 'contain'
              }}
            />
          </TouchableOpacity>
        )}
      </View>

      {onError ? (
        <View>
          <Text style={commonStyles.errorText}>{onError}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inlineStyle: {
    paddingVertical: Responsive.height(8),
    fontSize: Responsive.font(16),
    color: COLORS.blackOpacity80,
    flex: 1
  },
  flexView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  optionalInputField: {
    color: '#84859A'
  },
  labelTextRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputIcons: {
    width: Responsive.width(20),
    height: Responsive.height(20),
    zIndex: 9,
    position: 'absolute',
    left: Responsive.width(15),
    top: Responsive.height(-10)
  },
  line: {
    width: 1
  }
});

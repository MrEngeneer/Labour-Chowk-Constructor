import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import { Button45W, OutlineButton45W } from '../buttons/ApplicationButton';

const CommonModal = ({
  showmodal,
  title,
  subTitle,
  onPress,
  imgsrc,
  twoButtonModal,
  leftButtonColor,
  LeftTextColor,
  leftButtonText,
  rightButtonText,
  rightButtonStyle,
  RightTextStyle,
  LeftonPress,
  onebutton = true
}) => {
  return (
    <Modal statusBarTranslucent animationType="fade" transparent={true} visible={showmodal}>
      <BlurView style={styles.absolute} blurType="dark" blurAmount={10} />
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {}]}>
          <View style={[styles.imgView]}>
            {imgsrc ? (
              <Image source={imgsrc} style={styles.imgStyle} />
            ) : (
              <Image source={Icons.success} style={styles.succGreenSmalimg} />
            )}
          </View>
          <View style={[styles.messagesCont]}>
            {title ? (
              <Text style={[commonStyles.eighteenGilroy700, styles.message1]}>{title}</Text>
            ) : null}
            {subTitle ? (
              <Text
                style={[
                  commonStyles.twelveGilroy500,
                  { textAlign: 'center', color: COLORS.lightBlack }
                ]}
              >
                {subTitle}
              </Text>
            ) : null}

            {!twoButtonModal ? null : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: Responsive.height(20),
                  justifyContent: 'center',
                  gap: 15
                }}
              >
                {onebutton && (
                  <View style={{ width: '48%' }}>
                    <OutlineButton45W
                      borderColor={leftButtonColor}
                      color={LeftTextColor}
                      content={leftButtonText}
                      onPress={LeftonPress}
                    />
                  </View>
                )}
                <View style={{ width: '48%' }}>
                  <Button45W
                    onPress={onPress}
                    buttonStyle={rightButtonStyle}
                    textStyle={RightTextStyle}
                    content={rightButtonText}
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CommonModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Responsive.width(20)
  },
  modalView: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    width: '100%'
  },
  imgView: {
    alignSelf: 'center',
    paddingTop: Responsive.height(20)
  },
  imgStyle: {
    width: Responsive.width(154),
    height: Responsive.height(145),
    resizeMode: 'contain'
  },
  succGreenSmalimg: {
    width: Responsive.width(154),
    height: Responsive.height(145),
    resizeMode: 'contain'
  },
  message1: {
    textAlign: 'center',
    marginBottom: Responsive.height(10),
    color: COLORS.darkBlack
  },
  messagesCont: {
    marginTop: Responsive.height(30)
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.05)'
  }
});

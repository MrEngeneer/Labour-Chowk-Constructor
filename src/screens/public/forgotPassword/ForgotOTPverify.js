import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import { useDispatch, useSelector } from 'react-redux';
import { Responsive } from '../../../assets/theme/Layout';
import { commonStyles } from '../../../assets/theme/Styles';
import { COLORS } from '../../../assets/theme/Theme';
import Button55W, { DisableButton55W } from '../../../components/buttons/ApplicationButton';
import ApplicationHeader from '../../../components/headers/ApplicationHeader';
import ApplicationLoader from '../../../components/loader/ApplicationLoader';
import CommonModal from '../../../components/modal/CommonModal';
import Icons from '../../../constants/Icons';
import Images from '../../../constants/Images';
import { forgotPassword, forgotPasswordVerify } from '../../../redux/action/common/accountAction';
import { resetError } from '../../../redux/slices/common/accountSlice';

const ForgotOtpVerify = (props) => {
  // const dispatch = useDispatch();
  // const {
  //   forgotPasswordVerifyLoading,
  //   forgotPasswordVerifyError,
  //   forgotPasswordVerify: verifyData
  // } = useSelector((state) => state.account);

  const otpRef = useRef(null);
  const navigation = useNavigation();
  const [code, setCode] = useState();
  // const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  // const [counter, setCounter] = useState(60);

  // const data = {
  //   email: props?.route?.params?.forgotPasswordData?.email || '',
  //   code: code
  // };

  // useEffect(() => {
  //   const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
  //   return () => clearInterval(timer);
  // }, [counter]);

  // const resendOtp = async () => {
  //   const data = { email: props?.route?.params?.forgotPasswordData?.email || '' };
  //   if (otpRef.current) {
  //     otpRef.current.clear();
  //   }
  //   setCode();
  //   dispatch(forgotPassword(data));
  //   setCounter(60);
  // };

  // const handleVerifyOtp = async () => {
  //   dispatch(forgotPasswordVerify(data));
  // };

  // useEffect(() => {
  //   if (forgotPasswordVerifyLoading) {
  //     ApplicationLoader.show();
  //   } else {
  //     ApplicationLoader.hide();
  //   }
  //   if (forgotPasswordVerifyError) {
  //     setErrorPopupVisible(true);
  //     dispatch(resetError());
  //   }
  //   if (verifyData?.status === 200) {
  //     navigation.navigate('ForgotComplete', { data });
  //   }
  // }, [forgotPasswordVerifyLoading]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: 'padding', android: null })}
      >
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <ApplicationHeader title="Email Verification" back={true} />
            <View style={styles.header}>
              <View style={styles.leftIconView}>
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  activeOpacity={0.6}
                  style={styles.iconBackground}
                >
                  <Image source={Icons.backArrow} style={styles.backArrowIcon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ justifyContent: 'space-between', flex: 1 }}>
            <View style={styles.flexBetweenBx}>
              <View style={styles.loginBGContent}>
                <Text style={[commonStyles.fourteenGilroy500, { color: '#3F4254' }]}>
                  A verification code has been sent to {'\n'}
                </Text>
                <Text
                  style={[
                    commonStyles.fourteenGilroy700,
                    { color: COLORS.blueText, marginTop: Responsive.height(-2) }
                  ]}
                >
                  {props?.route?.params?.forgotPasswordData?.email || 'Your email address'}
                </Text>
                <View style={styles.loginBGContainer}>
                  <View
                    style={{
                      marginTop: Responsive.height(40),
                      paddingBottom: Responsive.height(20),
                      alignItems: 'center'
                    }}
                  >
                    <OTPTextView
                      ref={otpRef}
                      containerStyle={styles.customContainer}
                      textInputStyle={[
                        commonStyles.twentyWhite600,
                        {
                          color: '#181C32',
                          marginHorizontal: Responsive.width(4),
                          width: Responsive.width(45),
                          borderRadius: 12,
                          borderWidth: 1,
                          borderColor: 'red',
                          borderBottomWidth: 1
                        }
                      ]}
                      autoFocus
                      tintColor="#3D8BFD"
                      offTintColor="#ECF0F3"
                      inputCount={6}
                      handleTextChange={(e) => {
                        setCode(e);
                        if (e.length === 6) {
                          setTimeout(() => Keyboard.dismiss(), 500);
                        }
                      }}
                      onCodeFilled={() => setTimeout(() => Keyboard.dismiss(), 500)}
                    />
                  </View>
                  <View style={styles.timerContainer}>
                    <Text
                      style={[
                        commonStyles.twelveGilroy500,
                        { marginRight: Responsive.width(6), color: COLORS.regularBlack }
                      ]}
                    >
                      Didn’t get the code?
                    </Text>
                    {/* {counter > 0 ? (
                      <Text style={[commonStyles.twelveGilroy600, { color: COLORS.blueText }]}>
                        {counter} Sec
                      </Text>
                    ) : (
                      <TouchableOpacity
                        onPress={resendOtp}
                        activeOpacity={0.6}
                        disabled={forgotPasswordVerifyLoading}
                      >
                        <Text style={[commonStyles.twelveGilroy600, { color: COLORS.blueText }]}>
                          Resend
                        </Text>
                      </TouchableOpacity>
                    )} */}
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.loginContainer}>
              {/* <View style={{ paddingBottom: Responsive.height(10), width: '100%' }}>
                {code == undefined || code?.length < 6 ? (
                  <DisableButton55W content="Verify OTP" disabled={true} />
                ) : ( */}
                  <Button55W content="Verify OTP" onPress={()=>navigation.navigate('ForgotComplete')} />
                {/* )}
              </View> */}
            </View>
            {/* <CommonModal
              showmodal={errorPopupVisible}
              imgsrc={Images.modalErrorImage}
              title={'Invalid OTP'}
              twoButtonModal
              rightButtonText={'Close'}
              onPress={() => setErrorPopupVisible(false)}
              onebutton={false}
            /> */}
          </View>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotOtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  flexBetweenBx: {
    paddingTop: Responsive.height(30),
    paddingHorizontal: Responsive.width(20)
  },
  loginBGContainer: {
    paddingTop: Responsive.height(16)
  },
  loginBGContent: {
    alignItems: 'center'
  },
  resendOtpContainer: {
    alignItems: 'center',
    marginVertical: Responsive.height(30)
  },
  loginContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    padding: Responsive.width(20)
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    height: Responsive.height(100)
  },
  header: {
    paddingTop: Platform.select({
      android: Responsive.height(50),
      ios: Responsive.height(50)
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.width(20),
    alignItems: 'flex-start',
    width: '100%'
  },
  leftIconView: {
    width: '10%'
  },
  iconBackground: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backArrowIcon: {
    width: 40,
    height: 40
  }
});

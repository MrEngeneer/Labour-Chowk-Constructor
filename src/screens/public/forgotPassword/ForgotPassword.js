import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Responsive } from '../../../assets/theme/Layout';
import { commonStyles } from '../../../assets/theme/Styles';
import { COLORS } from '../../../assets/theme/Theme';
import Button55W from '../../../components/buttons/ApplicationButton';
import ApplicationHeader from '../../../components/headers/ApplicationHeader';
import CommonInput from '../../../components/inputs/ApplicationInput';
import ApplicationLoader from '../../../components/loader/ApplicationLoader';
import CommonModal from '../../../components/modal/CommonModal';
import Icons from '../../../constants/Icons';
import Images from '../../../constants/Images';
import { forgotPassword } from '../../../redux/action/common/accountAction';
import { resetError, resetForgetPasswordValues } from '../../../redux/slices/common/accountSlice';
import { ForgotPasswordSchema } from '../../../utils/validation';

const ForgotPassword = () => {
  // const dispatch = useDispatch();
  // const { forgotPasswordStart, forgotPasswordStartLoading, forgotPasswordStartError } = useSelector(
  //   (state) => state.account
  // );

  const navigation = useNavigation();
  // const [forgotPasswordData, setForgotPasswordData] = useState('');
  // const [errorPopupVisible, setErrorPopupVisible] = useState(false);
  // const [errorMessage, setErrorMessage] = useState('');

  // const handleSendCode = (values) => {
  //   let data = {
  //     email: values.email
  //   };
  //   setForgotPasswordData(data);
  //   dispatch(forgotPassword(data));
  // };

  // useEffect(() => {
  //   if (forgotPasswordStartLoading) {
  //     ApplicationLoader.show();
  //   } else {
  //     ApplicationLoader.hide();
  //   }
  //   if (forgotPasswordStartError) {
  //     setErrorPopupVisible(true);
  //     setErrorMessage(forgotPasswordStartError);
  //     dispatch(resetError());
  //   }
  //   if (forgotPasswordStart?.status === 200) {
  //     navigation.navigate('ForgotOtpVerify', { forgotPasswordData });
  //     dispatch(resetForgetPasswordValues());
  //   }
  // }, [forgotPasswordStartLoading, forgotPasswordStartError]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: 'padding', android: null })}
      >
        <View style={styles.container}>
          <ApplicationHeader title={'Forgot Password'} back={true} />
          {/* <Formik
            validationSchema={ForgotPasswordSchema}
            initialValues={{
              email: '',
              installationId: ''
            }}
            onSubmit={(values) => handleSendCode(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => ( */}
              <>
                <View style={{ flex: 1 }}>
                  <View style={styles.flex}>
                    <View style={{ flex: 1, paddingTop: Responsive.height(40) }}>
                      <View style={styles.loginBGContainer}>
                        <Text
                          style={[
                            commonStyles.fourteenGilroy500,
                            {
                              color: '#3F4254',
                              textAlign: 'center'
                            }
                          ]}
                        >
                          Enter your email to receive an OTP and reset your {'\n'} password
                        </Text>
                      </View>
                      <View style={{ justifyContent: 'space-between', flex: 1 }}>
                        <View
                          style={[styles.loginBGContainer, { paddingTop: Responsive.height(40) }]}
                        >
                          <CommonInput
                            name="email"
                            label="Email"
                            keyboardType="email-address"
                            placeholderText="eg. john@gmail.com"
                            InputIcon={Icons.sms}
                            // onchange={handleChange('email')}
                            // onBlur={handleBlur('email')}
                            // val={values.email}
                            capitalize={false}
                            // onError={errors.email && touched.email ? errors.email : null}
                            // errors={errors.email && touched.email}
                            labelTextStyle={{ color: COLORS.darkBlack }}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={styles.loginContainer}>
                      <View
                        style={{
                          paddingBottom: Responsive.height(10),
                          width: '100%',
                          alignItems: 'center'
                        }}
                      >
                        <Button55W content="Send OTP" onPress={()=>navigation.navigate('ForgotOtpVerify')}/>

                        <View
                          style={{
                            flexDirection: 'row',
                            paddingTop: Responsive.height(20),
                            alignItems: 'center'
                          }}
                        >
                          <Text
                            style={[
                              commonStyles.fourteenGilroy500,
                              {
                                color: COLORS.darkBlack
                              }
                            ]}
                          >
                            Remember Password?
                          </Text>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => navigation.navigate('LoginScreen')}
                            style={styles.login}
                          >
                            <Text
                              style={[
                                commonStyles.sixteenGilroy600,
                                {
                                  color: COLORS.blueText
                                }
                              ]}
                            >
                              Login
                            </Text>
                          </TouchableOpacity>
                          {/* <CommonModal
                            showmodal={errorPopupVisible}
                            imgsrc={Images.modalErrorImage}
                            title={errorMessage}
                            twoButtonModal
                            rightButtonText={'Close'}
                            onPress={() => setErrorPopupVisible(false)}
                            onebutton={false}
                          /> */}
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </>
            {/* )}
          </Formik> */}
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  loginBGContainer: {
    paddingHorizontal: Responsive.width(20)
  },
  flex: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    paddingBottom: Responsive.height(20)
  },
  loginContainer: {
    flexDirection: 'column',
    paddingHorizontal: Responsive.width(20),
    alignItems: 'center'
  },
  login: {
    marginLeft: Responsive.width(6)
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
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5
  }
});

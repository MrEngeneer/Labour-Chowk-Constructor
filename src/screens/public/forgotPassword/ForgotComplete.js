import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Responsive } from '../../../assets/theme/Layout';
import { commonStyles } from '../../../assets/theme/Styles';
import { COLORS } from '../../../assets/theme/Theme';
import Button55W from '../../../components/buttons/ApplicationButton';
import ApplicationHeader from '../../../components/headers/ApplicationHeader';
import ApplicationPasswordInput from '../../../components/inputs/ApplicationPasswordInput';
import ApplicationLoader from '../../../components/loader/ApplicationLoader';
import CommonModal from '../../../components/modal/CommonModal';
import Icons from '../../../constants/Icons';
import Images from '../../../constants/Images';
import { forgotPasswordComplete } from '../../../redux/action/common/accountAction';
import { ForgotCompleteValidationSchema } from '../../../utils/validation';

const ForgotComplete = (props) => {
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: 'padding', android: null })}
      >
        {/* <Formik
          initialValues={{ password: '' }}
          validationSchema={ForgotCompleteValidationSchema}
          onSubmit={(values) => {
            setLogoutModal(true);
            forgotPassword(values.password);
            setTimeout(() => {
              setLogoutModal(false);
              navigation.navigate('Login');
            }, 2000);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => ( */}
            <View style={styles.container}>
              <View>
                <View style={styles.headerContainer}>
                  <ApplicationHeader title={'Create New Password'} nav={true} />
                </View>
                <View style={styles.loginBGContainer}>
                  <Text
                    style={[
                      commonStyles.fourteenGilroy500,
                      {
                        color: '#3F4254',
                        marginTop: Responsive.height(10),
                        textAlign: 'center'
                      }
                    ]}
                  >
                    Please choose a new password. For security reasons, it must be different from
                    your previous password.
                  </Text>
                </View>
                <View style={[styles.loginBGContainer, { paddingTop: Responsive.height(32) }]}>
                  <ApplicationPasswordInput
                    label="New Password"
                    placeholderText="Enter New Password"
                    InputIcon={Icons.key}
                    name="password"
                    // value={values.password}
                    // onchange={handleChange('password')}
                    // onBlur={handleBlur('password')}
                    // onError={errors.password && touched.password ? errors.password : null}
                    // errors={errors.password && touched.password}
                    labelTextStyle={{ color: COLORS.darkBlack }}
                  />
                </View>
              </View>
              <View style={styles.loginContainer}>
                <View
                  style={{
                    paddingBottom: Responsive.height(10),
                    width: '100%'
                  }}
                >
                  <Button55W content="Save"  />
                </View>
              </View>
              {/* <CommonModal
                showmodal={logoutModal}
                imgsrc={Images.ModalSessfulImage}
                title={'Password reset successfully!'}
                subTitle={
                  'Your password has been updated. You can now log in with your new credentials.'
                }
              /> */}
            </View>
          {/* )}
        </Formik> */}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotComplete;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  loginBGContainer: {
    paddingTop: Responsive.height(30),
    paddingHorizontal: Responsive.width(20)
  },
  loginContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    padding: Responsive.width(20)
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5
  }
});

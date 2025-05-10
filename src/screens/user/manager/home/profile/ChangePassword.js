import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { Responsive } from '../../../../../assets/theme/Layout';
import { COLORS } from '../../../../../assets/theme/Theme';
import Button55W from '../../../../../components/buttons/ApplicationButton';
import ApplicationHeader from '../../../../../components/headers/ApplicationHeader';
import ApplicationPasswordInput from '../../../../../components/inputs/ApplicationPasswordInput';
import Icons from '../../../../../constants/Icons';
const ChangePassword = () => {
 
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: 'padding', android: null })}
      >
          <View style={styles.container}>
              <ApplicationHeader title={'Change Password'} back={true} />
              <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={styles.containerBox}>
                  <View style={{ paddingTop: Responsive.height(20) }}>
                    <ApplicationPasswordInput
                      name="currentPassword"
                      label="Current Password"
                      InputIcon={Icons.keyIcon}
                      placeholderText="Enter current password"
                    //   val={values.currentPassword}
                    //   onchange={handleChange('currentPassword')}
                    //   onBlur={handleBlur('currentPassword')}
                    //   onError={
                    //     errors.currentPassword && touched.currentPassword
                    //       ? errors.currentPassword
                    //       : null
                    //   }
                    //   errors={errors.currentPassword && touched.currentPassword}
                    />
                  </View>
                  <View style={{ paddingTop: Responsive.height(25) }}>
                    <ApplicationPasswordInput
                      name="newPassword"
                      label="New Password"
                      InputIcon={Icons.keyIcon}
                      placeholderText="Enter new password"
                    //   val={values.newPassword}
                    //   onchange={handleChange('newPassword')}
                    //   onBlur={handleBlur('newPassword')}
                    //   onError={
                    //     errors.newPassword && touched.newPassword ? errors.newPassword : null
                    //   }
                    //   errors={errors.newPassword && touched.newPassword}
                    />
                  </View>
                </View>
                <View style={styles.ButtonSection}>
                  <Button55W content={'Save'}  />
                </View>
              </View>
            </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  containerBox: {
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(20)
  },
  ButtonSection: {
    paddingBottom: Platform.select({
      ios: Responsive.height(40),
      android: Responsive.height(40)
    }),
    paddingHorizontal: Responsive.width(20)
  }
});

export default ChangePassword;

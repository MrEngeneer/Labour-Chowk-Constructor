import React from 'react';
import { Animated, Image, StyleSheet, Text, View } from 'react-native';
import ApplicationHeader from '../../../../components/headers/ApplicationHeader';
import { COLORS } from '../../../../assets/theme/Theme';
import Images from '../../../../constants/Images';
import { Responsive } from '../../../../assets/theme/Layout';
import CommonInput from '../../../../components/inputs/ApplicationInput';
import StockDetailSection from '../../../../components/commonComponents/UploadImage';
import Button55W from '../../../../components/buttons/ApplicationButton';

const AddTeamMember = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      {/* Header */}
      <ApplicationHeader title="Add Team Member" close={true} />

      {/* Animated ScrollView */}
      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Profile Image */}
        <View style={styles.profileImageContainer}>
          <Image source={Images.profileImage} style={styles.profileImage} />
        </View>

        {/* Name Inputs */}
        <View style={styles.nameInputContainer}>
          <View style={styles.inputWrapper}>
            <CommonInput label="First Name" placeholderText="Enter First Name" />
          </View>
          <View style={styles.inputWrapper}>
            <CommonInput label="Last Name" placeholderText="Enter Last Name" />
          </View>
        </View>

        {/* Other Inputs */}
        <View style={styles.inputsContainer}>
          <View style={styles.inputSpacing}>
            <CommonInput
              label="Father name/husband name"
              placeholderText="Enter Father name/husband name"
            />
          </View>
          <View style={styles.inputSpacing}>
            <CommonInput
              label="Current address"
              placeholderText="Enter Current address"
            />
          </View>
          <View style={styles.inputSpacing}>
            <CommonInput
              label="Permanent address"
              placeholderText="Enter Permanent address"
            />
          </View>
          <View style={styles.inputSpacing}>
            <CommonInput label="Skill" placeholderText="Select Skill Type" />
          </View>
          <View style={styles.inputSpacing}>
            <CommonInput
              label="Aadhar number"
              placeholderText="Enter Aadhar number"
            />
          </View>
        </View>

        {/* Upload Section */}
        <View style={{flexDirection:"row",paddingHorizontal: Responsive.height(20),gap:10,paddingBottom:Responsive.height(20),borderBottomWidth:1,borderBottomColor:"#E4E4E4"}}>
        <View style={styles.uploadSection}>
          <StockDetailSection subLabel="Upload relevant documents" />
        </View>
        <View style={styles.uploadSection}>
          <StockDetailSection subLabel="Upload relevant documents" />
        </View>
        </View>
        <View style={{paddingHorizontal: Responsive.height(20),paddingTop:Responsive.height(20)}}>
            <CommonInput
              label="PAN"
              placeholderText="Enter Permeant Account Number"
            />
          </View>
          <View style={{paddingHorizontal: Responsive.height(20),paddingTop:Responsive.height(20)}}>
          <StockDetailSection subLabel="Upload relevant documents" />
        </View>
        <View style={{paddingHorizontal: Responsive.height(20),paddingVertical:Responsive.height(20)}}>
             <Button55W content={'Save'}  />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    paddingBottom: Responsive.height(20),
  },
  profileImageContainer: {
    paddingVertical: Responsive.height(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: Responsive.width(100),
    height: Responsive.height(100),
  },
  nameInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.width(20),
    gap: 10,
  },
  inputWrapper: {
    flex: 1,
  },
  inputsContainer: {
    paddingHorizontal: Responsive.width(20),
  },
  inputSpacing: {
    paddingTop: Responsive.height(20),
  },
  uploadSection: {
    flex: 1,
  },
});

export default AddTeamMember;
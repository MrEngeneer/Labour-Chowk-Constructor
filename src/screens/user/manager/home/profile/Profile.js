import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Images from '../../../../../constants/Images';
import { Responsive } from '../../../../../assets/theme/Layout';
import Icons from '../../../../../constants/Icons';
import { useNavigation } from '@react-navigation/native';
import { commonStyles } from '../../../../../assets/theme/Styles';
import { COLORS } from '../../../../../assets/theme/Theme';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image source={Images.profileBG} style={styles.backgroundImage} />

      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image source={Icons.leftArrow} style={styles.backIcon} />
      </TouchableOpacity>
        {/* Profile Info */}
        <View style={styles.profileInfoContainer}>
          <Image source={Images.profileImage} style={styles.profileImage} />
          <Text style={[commonStyles.twentyGilroy600, styles.profileName]}>Varun Gupta</Text>
        </View>

        {/* Contact Info */}
        <View style={styles.contactInfoContainer}>
          <View style={styles.contactRow}>
            <Image source={Icons.sms} style={styles.contactIcon} />
            <Text style={styles.contactText}>godaradandamiya007@gmail.com</Text>
          </View>
          <View style={[styles.contactRow, styles.contactRowSpacing]}>
            <Image source={Icons.Call} style={styles.contactIcon} />
            <Text style={styles.contactText}>9876 543 210</Text>
          </View>
        </View>

        {/* Company Info */}
        <View style={styles.companyInfoContainer}>
          <View style={styles.companyDetails}>
            <Image source={Icons.buildingIcon} style={styles.companyIcon} />
            <Text style={[commonStyles.eighteenGilroy700, styles.companyName]}>
            JK Constructions
            </Text>
          </View>
          <View style={styles.ratingContainer}>
            <Image source={Icons.start} style={styles.ratingIcon} />
            <Text style={styles.ratingText}>4.5/5</Text>
          </View>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          {['Total Served', 'In Progress', 'Completed'].map((label, index) => (
            <View
              key={index}
              style={[
                styles.statItem,
                index === 1 && styles.statItemWithBorder, // Add border for the middle item
              ]}
            >
              <Text style={[commonStyles.fourteenGilroy700, styles.statValue]}>35</Text>
              <Text style={[commonStyles.tenGilroy600, styles.statLabel]}>{label}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <ScrollView contentContainerStyle={{ flexGrow: 1, }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{ borderTopWidth: Responsive.height(5), borderColor: '#EBEDF3',paddingTop:Responsive.height(20) }}>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Image source={Icons.Call} style={styles.editIcon} />
              <Text style={[commonStyles.eighteenGilroy700, styles.editText]}>Edit Profile</Text>
            </View>
            <Image
              source={Icons.arrowRight}
              style={{ width: Responsive.width(7), height: Responsive.height(12) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('ChangePassword')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Image source={Icons.channgePassword} style={styles.editIcon} />
              <Text style={[commonStyles.eighteenGilroy700, styles.editText]}>Change password</Text>
            </View>
            <Image
              source={Icons.arrowRight}
              style={{ width: Responsive.width(7), height: Responsive.height(12) }}
            />
          </TouchableOpacity>
          <View
            style={{
              height: Responsive.height(1),
              backgroundColor: COLORS.borderColor,
              marginHorizontal: Responsive.width(20),
              marginVertical: Responsive.height(5),
            }}
          />
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Image source={Icons.secourity} style={styles.editIcon} />
              <Text style={[commonStyles.eighteenGilroy700, styles.editText]}>Privacy Policy</Text>
            </View>
            <Image
              source={Icons.arrowRight}
              style={{ width: Responsive.width(7), height: Responsive.height(12) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Image source={Icons.termsCondition} style={styles.editIcon} />
              <Text style={[commonStyles.eighteenGilroy700, styles.editText]}>
                Terms & Condition
              </Text>
            </View>
            <Image
              source={Icons.arrowRight}
              style={{ width: Responsive.width(7), height: Responsive.height(12) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Image source={Icons.helpIcon} style={styles.editIcon} />
              <Text style={[commonStyles.eighteenGilroy700, styles.editText]}>Help</Text>
            </View>
            <Image
              source={Icons.arrowRight}
              style={{ width: Responsive.width(7), height: Responsive.height(12) }}
            />
          </TouchableOpacity>
          <View
            style={{
              height: Responsive.height(1),
              backgroundColor: COLORS.borderColor,
              marginHorizontal: Responsive.width(20),
              marginVertical: Responsive.height(5),
            }}
          />
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={() => navigation.navigate('EditProfile')}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <Image source={Icons.logout} style={styles.editIcon} />
              <Text style={[commonStyles.eighteenGilroy700, {color:"#E82646"}]}>Logout</Text>
            </View>
            <Image
              source={Icons.arrowRight}
              style={{ width: Responsive.width(7), height: Responsive.height(12) }}
            />
          </TouchableOpacity>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',paddingVertical:Responsive.height(40)}}>
          <Text style={[commonStyles.twelveGilroy400,{color:"#B5B5C3"}]}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backgroundImage: {
    width: '100%',
    height: Responsive.height(150),
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  backIcon: {
    width: Responsive.width(24),
    height: Responsive.height(24),
  },
  profileInfoContainer: {
    position: 'absolute',
    left: 20,
    top: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  profileName: {
    color: '#181C32',
    marginBottom: -70,
  },
  contactInfoContainer: {
    paddingTop: Responsive.height(60),
    paddingHorizontal: Responsive.width(20),
    borderBottomWidth: Responsive.height(1),
    borderColor: '#EBEDF3',
    paddingBottom: Responsive.height(10),
  },
  contactRow: {
    flexDirection: 'row',
    gap: 10,
  },
  contactRowSpacing: {
    paddingTop: Responsive.height(10),
  },
  contactIcon: {
    width: Responsive.width(15),
    height: Responsive.height(15),
  },
  contactText: {
    color: '#3F4254',
  },
  companyInfoContainer: {
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: Responsive.height(1),
    borderColor: '#EBEDF3',
  },
  companyDetails: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  companyIcon: {
    width: Responsive.width(24),
    height: Responsive.height(24),
  },
  companyName: {
    color: '#3F4254',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: Responsive.height(25),
    width: Responsive.width(65),
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
  },
  ratingIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  ratingText: {
    color: '#3F4254',
  },
  statsContainer: {
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  statItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  statItemWithBorder: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#EBEDF3',
  },
  statValue: {
    color: '#3F4254',
  },
  statLabel: {
    color: '#84859A',
    paddingTop: Responsive.height(5),
  },
  editProfileButton: {
    height: Responsive.height(60),
    paddingHorizontal: Responsive.width(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  editIcon: {
    width: Responsive.width(24),
    height: Responsive.height(24),
  },
  editText: {
  ...commonStyles.fourteenGilroy600,
  color:"#3F4254"
  },
});

export default Profile;
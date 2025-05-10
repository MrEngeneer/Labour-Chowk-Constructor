import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Responsive } from '../../../../assets/theme/Layout';
import { commonStyles } from '../../../../assets/theme/Styles';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../../assets/theme/Theme';
import Images from '../../../../constants/Images';

const Team = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Team Members</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddTeamMember')}>
          <Text style={styles.addNewButton}>+Add New</Text>
        </TouchableOpacity>
      </View>

      {/* Electricians Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Electricians</Text>
      </View>
      <View style={styles.memberRow}>
        {renderMember('Rajesh Kumar')}
        {renderMember('Manoj Yadav')}
        {renderMember('Sunil Sharma')}
      </View>

      {/* Additional Members */}
      <View style={styles.memberRow}>
        {renderMember('Rajesh Kumar')}
        {renderMember('Rajesh Kumar')}
        {renderMember('Rajesh Kumar')}
      </View>

      {/* Carpenters Section */}
      <View style={styles.sectionHeaderWithBorder}>
        <Text style={styles.sectionTitle}>Carpenters</Text>
      </View>
      <View style={styles.memberRow}>
        {renderMember('Vijay Mehta')}
        {renderMember('Rohit Saini')}
        {renderMember('Karan Jaiswal')}
      </View>
    </View>
  );
};

// Helper function to render a team member
const renderMember = (name) => (
  <View style={styles.memberContainer}>
    <Image
      source={Images.dummyManagerImage}
      style={styles.memberImage}
    />
    <Text style={styles.memberName}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: Responsive.width(20),
    paddingTop: Responsive.height(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E4E4E4',
    paddingBottom: Responsive.height(15),
  },
  headerTitle: {
    ...commonStyles.twentyFourGilroy700,
    color: '#181C32',
  },
  addNewButton: {
    ...commonStyles.twelveGilroy600,
    color: '#F1D221',
  },
  sectionHeader: {
    paddingHorizontal: Responsive.width(20),
    paddingTop: Responsive.height(20),
  },
  sectionHeaderWithBorder: {
    paddingHorizontal: Responsive.width(20),
    paddingTop: Responsive.height(20),
    borderTopWidth: 3,
    borderTopColor: '#E4E4E4',
  },
  sectionTitle: {
    ...commonStyles.sixteenGilroy600,
    color: '#84859A',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  memberRow: {
    paddingVertical: Responsive.height(20),
    paddingHorizontal: Responsive.width(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  memberContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  memberImage: {
    width: Responsive.width(80),
    height: Responsive.height(80),
    resizeMode: 'contain',
  },
  memberName: {
    ...commonStyles.sixteenGilroy600,
    color: '#181C32',
    paddingTop: Responsive.height(10),
  },
});

export default Team;
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';

const YardDetails = ({ yard, yardPosition, portTo, finalDestination, Out = false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Yard Details</Text>

      <View style={styles.row}>
        <View style={styles.detailItem}>
          <Image source={Icons.yardOutIcon} style={styles.icon} />
          <View>
            <Text style={styles.labelText}>Yard {Out ? 'Out' : ''}</Text>
            <Text style={styles.valueText}>{yard}</Text>
          </View>
        </View>
        <View style={[styles.detailItem, styles.paddingLeft]}>
          <Image source={Icons.locationIcon} style={styles.icon} />
          <View>
            <Text style={styles.labelText}>Yard Position</Text>
            <Text style={styles.valueText}>{yardPosition}</Text>
          </View>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.detailItem}>
          <Image source={Icons.portToIcon} style={styles.icon} />
          <View>
            <Text style={styles.labelText}>Port To</Text>
            <Text style={styles.valueText}>{portTo}</Text>
          </View>
        </View>
        <View style={[styles.detailItem, styles.paddingLeft]}>
          <Image source={Icons.finalDestinationIccon} style={styles.icon} />
          <View>
            <Text style={styles.labelText}>Final Destination</Text>
            <Text style={styles.valueText}>{finalDestination}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(20),
    backgroundColor: COLORS.white
  },
  headerText: {
    ...commonStyles.twelveGilroy700,
    color: '#B5B5C3',
    textTransform: 'uppercase',
    letterSpacing: 1
  },
  row: {
    flexDirection: 'row',
    paddingTop: Responsive.height(20)
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1
  },
  paddingLeft: {
    paddingLeft: '15%'
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#84859A'
  },
  labelText: {
    ...commonStyles.tenGilroy600,
    color: '#84859A'
  },
  valueText: {
    ...commonStyles.twelveGilroy600,
    color: '#3F4254',
    textTransform: 'capitalize'
  }
});

export default YardDetails;

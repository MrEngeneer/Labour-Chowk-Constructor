import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import Icons from '../../constants/Icons';

const StockDetailSection = ({ subLabel, onPress, isVisible = true }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{height:100}}>
        <View style={styles.uploadButtonContainer}>
          <View activeOpacity={0.6} style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Image
              source={Icons.activityActive}
              style={{ height: Responsive.height(20), width: Responsive.width(20) }}
            />
            <Text style={styles.uploadButtonText}>Capture Images</Text>
          </View>
        </View>
        {subLabel && (
          <View
            style={{
              paddingTop: Responsive.height(2),
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text style={[commonStyles.tenGilroy500, { color: '#84859A', fontStyle: 'italic' }]}>
              {subLabel}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    paddingTop: Responsive.height(4)
  },
  labelText: {
    ...commonStyles.twelveGilroy700,
    color: '#84859A'
  },
  uploadButtonContainer: {
    height: Responsive.height(55),
    backgroundColor: 'rgba(61, 139, 253, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(61, 139, 253, 0.25)',
    borderStyle: 'dashed',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Responsive.height(10),
    flex: 1
  },
  uploadButtonText: {
    ...commonStyles.twelveGilroy600,
    color: '#62A1FD'
  }
});

export default StockDetailSection;

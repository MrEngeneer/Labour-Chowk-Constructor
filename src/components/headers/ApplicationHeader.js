import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import SkeletonPlaceholder from '../SkeletonPlaceholder';

const ApplicationHeader = (
  {
    staticText,
    onPress,
    nav,
    fontSize,
    title,
    back,
    close,
    handleCross,
    edit,
    headerStyle,
    editSkeleton = false
  },
  props
) => {
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.header,
        {
          ...headerStyle,
          paddingTop: Responsive.width(45),
          backgroundColor: 'transparent'
        }
      ]}
    >
      <View style={styles.applicationHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {close ? (
            <TouchableOpacity
              onPress={handleBack}
              activeOpacity={0.6}
              style={{ paddingRight: Responsive.width(10), paddingLeft: Responsive.width(8) }}
            >
              <View style={styles.rightArrow}>
                <Image source={Icons.crosssIcon} style={commonStyles.imgFluid} />
              </View>
            </TouchableOpacity>
          ) : null}
          {nav ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}
              activeOpacity={0.6}
              style={{ paddingRight: Responsive.width(10), paddingLeft: Responsive.width(8) }}
            >
              <View style={styles.rightArrow}>
                <Image source={Icons.BackArrow} style={commonStyles.imgFluid} />
              </View>
            </TouchableOpacity>
          ) : null}
          {back ? (
            <TouchableOpacity
              onPress={handleBack}
              activeOpacity={0.6}
              style={{ paddingRight: Responsive.width(10), paddingLeft: Responsive.width(8) }}
            >
              <View style={[styles.rightArrow, { marginLeft: Responsive.width(-10) }]}>
                <Image source={Icons.leftArrow} style={commonStyles.imgFluid} />
              </View>
            </TouchableOpacity>
          ) : null}
          <View>
            {title ? (
              <View style={{ flexDirection: 'column' }}>
                <Text style={[commonStyles.sixteenGilroy700, { color: COLORS.darkBlack }]}>
                  {title}
                </Text>
                {staticText ? (
                  <Text
                    style={[
                      commonStyles.twelveGilroy600,
                      {
                        color: 'rgba(63, 66, 84, 1)',
                        paddingRight: 5
                      }
                    ]}
                  >
                    {staticText}
                  </Text>
                ) : null}
              </View>
            ) : null}
          </View>
        </View>
        {edit ? (
          <TouchableOpacity onPress={onPress} style={styles.ptsContainer} activeOpacity={0.6}>
            <Image
              source={Icons.EditIcon}
              style={{
                width: Responsive.width(24),
                height: Responsive.height(24),
                resizeMode: 'contain'
              }}
            />
          </TouchableOpacity>
        ) : null}
        {editSkeleton && (
          <SkeletonPlaceholder>
            <View style={{ width: 30, height: 30, borderRadius: 6 }} />
          </SkeletonPlaceholder>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rightArrow: {
    width: Responsive.width(24),
    height: Responsive.height(24)
  },
  applicationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.width(20),
    paddingBottom: Responsive.height(15)
  },
  ptsContainer: {
    marginLeft: Responsive.width(10)
  },
  fontSize: {
    fontSize: 16
  },
  header: {
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 1
  }
});

export default ApplicationHeader;

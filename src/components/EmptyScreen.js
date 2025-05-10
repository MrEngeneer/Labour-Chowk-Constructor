import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Responsive } from '../assets/theme/Layout';
import { commonStyles } from '../assets/theme/Styles';

const EmptyState = ({
  EmptyImage,
  heading,
  subHeading,
  imageContainerStyle,
  containers,
  imagesize,
  link
}) => {
  return (
    <View style={[styles.container, containers]}>
      <View style={[styles.imageContainer, imageContainerStyle]}>
        <Image source={EmptyImage} style={[styles.image, imagesize]} />
      </View>
      {heading && (
        <View
          style={{
            paddingTop: Responsive.height(20),
            alignItems: 'center',
            paddingHorizontal: Responsive.width(20)
          }}
        >
          <Text style={[commonStyles.eighteenGilroy700, { color: '#181C32' }]}>{heading}</Text>
        </View>
      )}
      {subHeading && (
        <View
          style={{
            paddingTop: Responsive.height(15),
            paddingHorizontal: Responsive.width(20)
          }}
        >
          <Text style={[commonStyles.fourteenGilroy500, { color: '#84859A', textAlign: 'center' }]}>
            {subHeading}
          </Text>
        </View>
      )}
      {link && (
        <TouchableOpacity activeOpacity={0.6} style={{ marginTop: Responsive.height(30) }}>
          <Text style={[commonStyles.fourteenGilroy600, { color: '#3D8BFD' }]}>{link}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: Responsive.height(80)
  },
  imageContainer: {
    marginTop: '15%',
    paddingBottom: Responsive.height(20)
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  heading: {
    marginBottom: 10,
    textAlign: 'center'
  },
  subheading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#888'
  }
});

export default EmptyState;

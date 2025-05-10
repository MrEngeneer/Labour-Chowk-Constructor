import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Modal from 'react-native-modal';
import { Responsive } from '../../assets/theme/Layout';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';

export const ImageModal = ({ isVisible, onpress, imageUrls, index, onChange }) => {
  return (
    <Modal isVisible={isVisible} style={{ margin: 0 }}>
      <View style={{ flex: 1 }}>
        <TouchableOpacity style={styles.closeButton} onPress={onpress}>
          <Image source={Icons.closeIcon} style={styles.closeIcon} />
        </TouchableOpacity>

        <ImageViewer
          imageUrls={imageUrls}
          index={index}
          onChange={onChange()}
          renderIndicator={() => null}
          renderFooter={(index) =>
            imageUrls.length > 1 && (
              <View style={styles.footer}>
                <View style={styles.dotContainer}>
                  {imageUrls.map((_, idx) => (
                    <View
                      key={idx}
                      style={[styles.dot, idx === index ? styles.activeDot : styles.inactiveDot]}
                    />
                  ))}
                </View>
              </View>
            )
          }
        />
      </View>
    </Modal>
  );
};
export default ImageModal;

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 5
  },
  closeIcon: {
    tintColor: 'white',
    width: 18,
    height: 18
  },
  footer: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    width: Responsive.width(370)
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5
  },
  activeDot: {
    backgroundColor: COLORS.darkBlue
  },
  inactiveDot: {
    backgroundColor: 'gray'
  }
});

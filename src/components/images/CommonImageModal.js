import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import { Responsive } from '../../assets/theme/Layout';
import Icons from '../../constants/Icons';
import ApplicationLoader from '../loader/ApplicationLoader';
import UserFastImage from './UserFastImage';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const CommonImageModal = ({ visible, images, onClose, index }) => {
  const [currentIndex, setCurrentIndex] = useState(index || 0);
  const flatListRef = useRef(null);

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 50
  };

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  useEffect(() => {
    if (flatListRef.current && index >= 0) {
      flatListRef.current.scrollToIndex({
        index,
        animated: false,
        viewPosition: 0.5
      });
    }
  }, [index, visible]);

  const goToNextImage = () => {
    if (currentIndex < images.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
    }
  };

  const goToPreviousImage = () => {
    if (currentIndex > 0) {
      flatListRef.current.scrollToIndex({ index: currentIndex - 1, animated: true });
    }
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose} activeOpacity={0.6}>
          <Image source={Icons.closeIcon} style={styles.closeIcon} />
        </TouchableOpacity>

        {currentIndex > 0 && (
          <TouchableOpacity style={styles.prevButton} onPress={goToPreviousImage}>
            <Image source={Icons.arrowleftIcon} style={styles.arrowIcon} />
          </TouchableOpacity>
        )}

        <FlatList
          ref={flatListRef}
          data={images}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          pagingEnabled
          initialScrollIndex={index}
          getItemLayout={(data, index) => ({
            length: windowWidth,
            offset: windowWidth * index,
            index
          })}
          viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
          initialNumToRender={1}
          removeClippedSubviews={true}
          renderItem={({ item }) => (
            <View
              style={{
                width: windowWidth,
                height: windowHeight,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <ApplicationLoader
                style={{ position: 'absolute', width: windowWidth, height: windowHeight }}
              />

              {item ? (
                <View>
                  <ImageZoom
                    cropWidth={windowWidth}
                    cropHeight={windowHeight}
                    imageWidth={windowWidth * 1}
                    imageHeight={windowHeight * 1}
                  >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <UserFastImage
                        uri={item}
                        style={{
                          width: windowWidth * 0.95,
                          height: windowHeight * 0.9,
                          borderRadius: 20
                        }}
                      />
                    </View>
                  </ImageZoom>
                </View>
              ) : null}
            </View>
          )}
        />

        {currentIndex < images.length - 1 && (
          <TouchableOpacity style={styles.nextButton} onPress={goToNextImage}>
            <Image source={Icons.ArrowRightCircle} style={styles.arrowIcon} />
          </TouchableOpacity>
        )}

        <View style={styles.dotContainer}>
          {images.map((_, idx) => (
            <View key={idx} style={[styles.dot, currentIndex === idx ? styles.activeDot : null]} />
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  closeButton: {
    position: 'absolute',
    top: Responsive.height(25),
    right: Responsive.width(0),
    zIndex: 10,
    padding: 20
  },
  closeIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    backgroundColor: 'grey',
    borderRadius: 20
  },
  prevButton: {
    position: 'absolute',
    left: 20,
    bottom: '10%',
    transform: [{ translateY: -25 }],
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 6,
    borderRadius: 20
  },
  nextButton: {
    position: 'absolute',
    right: 20,
    bottom: '10%',
    transform: [{ translateY: -25 }],
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    padding: 6,
    borderRadius: 20
  },
  arrowIcon: {
    width: 30,
    height: 30,
    tintColor: '#fff'
  },
  dotContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5
  },
  activeDot: {
    backgroundColor: 'white'
  }
});

export default CommonImageModal;

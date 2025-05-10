import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import Button55W from '../buttons/ApplicationButton';
import ThumbnailView from '../skeltons/manager/trucking/ThumbnailView';

export default function ApplicationSingleSelectModal({
  visible,
  onSelect,
  selected,
  onclosed,
  data,
  title
}) {
  const navigation = useNavigation();
  const [select, setSelect] = useState(selected);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    if (visible) {
      setSelect(selected || null);
    }
  }, [visible]);

  const renderItem = ({ item }) => {
    const isSelected = item.id === select?.id;

    const nameInitial = item?.nameEng
      ? (() => {
          const words = item?.nameEng.trim().split(' ');
          const firstLetter = words[0].charAt(0).toUpperCase();
          if (words.length > 1) {
            const lastLetter = words[words.length - 1].charAt(0).toUpperCase();
            return `${firstLetter}${lastLetter}`;
          } else {
            return firstLetter;
          }
        })()
      : '_';

    return (
      <TouchableOpacity
        onPress={() => {
          if (select?.id === item.id) {
            setSelect(null);
          } else {
            setSelect(item);
          }
        }}
        style={styles.cardStyle}
      >
        <View style={styles.driverInfoContainer}>
          <ThumbnailView
            OutermostContainerStyle={{
              borderColor: 'transparent'
            }}
            nameinitial={nameInitial}
            backgroundColor={'#D8E8FF'}
            textColor={'red'}
            dimension={{
              height: Responsive.height(45),
              width: Responsive.width(45),
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}
            typography={[commonStyles.sixteenGilroy700, { color: '#62A1FD' }]}
          />
          <View style={styles.driverTextContainer}>
            <Text style={styles.driverIdText}>id# {item.id}</Text>
            <Text style={styles.driverNameText}>{item.nameEng}</Text>
            <Text style={styles.driverAboutText}>{item.nameJpn}</Text>
          </View>
        </View>
        <Image
          source={isSelected ? Icons.CheckedCircle : Icons.BlankCircle}
          style={styles.statusIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={visible} transparent={false} animationType="slide" statusBarTranslucent={true}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          marginTop: Platform.select({
            ios: Responsive.height(0),
            android: Responsive.height(0)
          })
        }}
      >
        <View
          style={{
            paddingHorizontal: Responsive.width(20),
            paddingTop: insets.top,
            paddingBottom: Responsive.height(20),
            flexDirection: 'row',
            gap: 15,
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: COLORS.borderColor
          }}
        >
          <TouchableOpacity activeOpacity={0.6} onPress={onclosed}>
            <Image
              source={Icons.closeIcon}
              style={{ width: 24, height: 24, resizeMode: 'contain' }}
            />
          </TouchableOpacity>
          <Text style={[commonStyles.sixteenGilroy700, { color: '#181C32' }]}>Assign Driver</Text>
        </View>
        <View style={styles.innerContainer}>
          <FlatList
            data={data.sort((a, b) => a.nameEng.localeCompare(b.nameEng))}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={styles.flatListContentContainer}
            ItemSeparatorComponent={() => (
              <View style={styles.itemSeperatorstyle}>
                <View style={styles.itemSeparator} />
              </View>
            )}
          />
          <View style={styles.buttonContainer}>
            <Button55W
              content={'Assign Driver'}
              onPress={() => {
                onSelect(select);
              }}
              disabled={!select}
              style={[styles.buttonStyle, !select && { opacity: 0.5 }]}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5
  },
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    flex: 1
  },
  driverInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
  },
  driverTextContainer: {
    justifyContent: 'space-between'
  },
  driverIdText: {
    ...commonStyles.tenGilroy600,
    color: '#84859A',
    textTransform: 'uppercase'
  },
  driverNameText: {
    ...commonStyles.sixteenGilroy700,
    color: '#181C32',
    textTransform: 'capitalize'
  },
  driverAboutText: {
    ...commonStyles.tenGilroy700,
    color: '#3F4254'
  },
  statusIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  innerContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: Responsive.height(20)
  },
  flatListContentContainer: {
    paddingHorizontal: Responsive.width(20),
    paddingBottom: Responsive.height(20)
  },
  itemSeperatorstyle: {
    paddingVertical: Responsive.height(14)
  },
  itemSeparator: {
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor
  },
  buttonContainer: {
    paddingHorizontal: Responsive.width(20)
  },
  buttonStyle: {}
});

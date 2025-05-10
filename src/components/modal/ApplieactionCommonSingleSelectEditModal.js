import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import Button55W from '../buttons/ApplicationButton';
import EmptyState from '../EmptyScreen';
import CommonInput from '../inputs/ApplicationInput';

export default function ApplicationCommonSIngleSelectEditModal({
  visible,
  onSelect,
  selected,
  onclosed,
  data,
  title,
  headerTitle,
  onpressTitle,
  openmodal,
  inputLable,
  imp = true,
  disable = false,
  disableSort = false
}) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const insets = useSafeAreaInsets();

  const handleSave = () => {
    if (selected) {
      onSelect(selected);
    } else {
      onSelect(null);
    }
    onclosed();
  };

  const filteredData = data?.filter((item) =>
    item?.nameEng?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (!disableSort) {
    filteredData?.sort((a, b) => a.nameEng.localeCompare(b.nameEng));
  }
  const renderItem = ({ item }) => {
    const isSelected = item.id === selected?.id;
    return (
      <TouchableOpacity onPress={() => onSelect(isSelected ? null : item)} style={styles.cardStyle}>
        <View style={styles.driverInfoContainer}>
          <Text
            style={[
              commonStyles.sixteenGilroy500,
              { color: '#3F4254', textTransform: 'capitalize' }
            ]}
          >
            {item?.nameEng == 'NormalVehicle'
              ? 'Normal Vehicle'
              : item.nameEng == 'SelfDrivenVehicle'
                ? 'Self Driven Vehicle'
                : item.nameEng == 'ImmovableVehicle'
                  ? 'Immovable Vehicle'
                  : item.nameEng == 'HighRoofLongVehicle'
                    ? 'HighRoof Long Vehicle'
                    : item.nameEng == 'AccidentalVehicle'
                      ? 'Accidental Vehicle'
                      : item.nameEng == 'OogataFudoshaVehicle'
                        ? 'Oogata Fudosha Vehicle'
                        : item.nameEng}
          </Text>
        </View>
        <Image
          source={isSelected ? Icons.CheckedCircle : Icons.BlankCircle}
          style={styles.statusIcon}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={{ paddingBottom: Responsive.height(6), flexDirection: 'row' }}>
        {inputLable && (
          <Text style={[commonStyles.twelveGilroy600, { color: '#3F4254' }]}>
            {inputLable}
            {imp && <Text style={{ color: COLORS.darkRed }}>*</Text>}
          </Text>
        )}
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => !disable && openmodal()}
        style={{
          height: Responsive.height(45),
          width: '100%',
          paddingHorizontal: Responsive.width(20),
          backgroundColor: disable ? '#F7F8FA' : '#F7F8FA',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={[
            commonStyles.fourteenGilroy500,
            { color: selected ? '#3F4254' : '#84859A', textTransform: 'capitalize' }
          ]}
        >
          {selected
            ? selected.nameEng == 'NormalVehicle'
              ? 'Normal Vehicle'
              : selected.nameEng == 'SelfDrivenVehicle'
                ? 'Self Driven Vehicle'
                : selected.nameEng == 'ImmovableVehicle'
                  ? 'Immovable Vehicle'
                  : selected.nameEng == 'HighRoofLongVehicle'
                    ? 'HighRoof Long Vehicle'
                    : selected.nameEng == 'AccidentalVehicle'
                      ? 'Accidental Vehicle'
                      : selected.nameEng == 'OogataFudoshaVehicle'
                        ? 'Oogata Fudosha Vehicle'
                        : selected.nameEng
            : 'Please Select'}
        </Text>
        <Image source={Icons.arrowTranDownIcon} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      <Modal visible={visible} transparent={false} animationType="slide" statusBarTranslucent>
        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: insets.top }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={onclosed}>
              <Image source={Icons.closeIcon} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            <Text style={[commonStyles.sixteenGilroy700, { color: '#181C32' }]}>{headerTitle}</Text>
          </View>
          <View
            style={{
              paddingHorizontal: Responsive.width(20),
              paddingVertical: Responsive.height(15)
            }}
          >
            <CommonInput
              placeholderText={'Search'}
              InputIcon={Icons.searchIcon}
              val={searchQuery}
              onchange={setSearchQuery}
              SearchCross={searchQuery.length !== 0 ? true : false}
              searchonpress={() => setSearchQuery('')}
            />
          </View>
          {filteredData?.length !== 0 ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={filteredData}
              renderItem={renderItem}
              keyboardShouldPersistTaps="handled"
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.flatListContentContainer}
              ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
            />
          ) : (
            <View style={{ flex: 1 }}>
              <EmptyState
                EmptyImage={Images.emptyStateImageOne}
                imagesize={{
                  width: Responsive.width(310),
                  height: Responsive.height(180)
                }}
                heading="No result found"
                subHeading="There is currently no data available as per your search."
              />
            </View>
          )}

          {filteredData?.length !== 0 && (
            <View style={styles.buttonContainer}>
              <Button55W
                content={onpressTitle}
                onPress={handleSave}
                disabled={!selected}
                style={[styles.buttonStyle, !selected && { opacity: 0.5 }]}
              />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Responsive.height(10)
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(10),
    borderBottomWidth: 1,
    borderColor: COLORS.borderColor,
    gap: 10
  },
  statusIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  },
  flatListContentContainer: {
    paddingHorizontal: Responsive.width(20)
  },
  itemSeparator: {
    height: 1,
    backgroundColor: COLORS.borderColor,
    marginVertical: Responsive.height(10)
  },
  buttonContainer: {
    paddingHorizontal: Responsive.width(20),
    paddingTop: Responsive.height(10),
    paddingBottom: Responsive.height(20),
    borderTopWidth: 1,
    borderColor: COLORS.borderColor
  }
});

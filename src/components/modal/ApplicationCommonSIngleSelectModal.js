import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  Modal,
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
import Images from '../../constants/Images';
import Button55W from '../buttons/ApplicationButton';
import EmptyState from '../EmptyScreen';
import CommonInput from '../inputs/ApplicationInput';

export default function ApplicationCommonSIngleSelectModal({
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
  disableSort = false,
  disableButton = true
}) {
  const navigation = useNavigation();
  const [selectedValue, setSelectedValue] = useState(selected || null);
  const [select, setSelect] = useState(selected || null);
  const [searchQuery, setSearchQuery] = useState('');

  const insets = useSafeAreaInsets();
  useEffect(() => {
    if (data?.length === 1) {
      setSelectedValue(data[0]);
      onSelect(data[0]);
    }
  }, [data]);
  useEffect(() => {
    setSelectedValue(selected || null);
    setSelect(selected || null);
    setSearchQuery('');
  }, [selected]);

  useEffect(() => {
    if (visible) {
      setSelect(selectedValue || null);
      setSearchQuery('');
    } else {
      setSelect(null);
    }
  }, [visible, selectedValue]);

  const handleSave = () => {
    if (select) {
      setSelectedValue(select);
      onSelect(select);
    } else {
      setSelectedValue(null);
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
    const isSelected = item.id === select?.id;
    return (
      <TouchableOpacity
        onPress={() => {
          setSelect(isSelected ? null : item), Keyboard.dismiss();
        }}
        style={styles.cardStyle}
      >
        <View style={styles.driverInfoContainer}>
          <Text
            style={[
              commonStyles.sixteenGilroy500,
              { color: COLORS.regularBlack, textTransform: 'capitalize' }
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
          <Text style={[commonStyles.twelveGilroy600, { color: COLORS.regularBlack }]}>
            {inputLable}
            {imp && <Text style={{ color: 'red' }}>*</Text>}
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
            { color: selectedValue ? COLORS.regularBlack : '#84859A', textTransform: 'capitalize' }
          ]}
        >
          {selectedValue
            ? selectedValue.nameEng == 'NormalVehicle'
              ? 'Normal Vehicle'
              : selectedValue.nameEng == 'SelfDrivenVehicle'
                ? 'Self Driven Vehicle'
                : selectedValue.nameEng == 'ImmovableVehicle'
                  ? 'Immovable Vehicle'
                  : selectedValue.nameEng == 'HighRoofLongVehicle'
                    ? 'HighRoof Long Vehicle'
                    : selectedValue.nameEng == 'AccidentalVehicle'
                      ? 'Accidental Vehicle'
                      : selectedValue.nameEng == 'OogataFudoshaVehicle'
                        ? 'Oogata Fudosha Vehicle'
                        : selectedValue.nameEng
            : 'Please Select'}
        </Text>
        <Image source={Icons.arrowTranDownIcon} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>

      <Modal visible={visible} transparent={false} animationType="slide" statusBarTranslucent>
        <View style={{ flex: 1, backgroundColor: COLORS.white, paddingTop: insets.top }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity activeOpacity={0.6} onPress={onclosed}>
              <Image source={Icons.closeIcon} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            <Text style={[commonStyles.sixteenGilroy700, { color: COLORS.darkBlack }]}>
              {headerTitle}
            </Text>
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
                disabled={disableButton == true ? !select : null}
                style={[styles.buttonStyle, !select && { opacity: 0.5 }]}
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
    paddingHorizontal: Responsive.width(20),
    paddingBottom: Responsive.height(15)
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

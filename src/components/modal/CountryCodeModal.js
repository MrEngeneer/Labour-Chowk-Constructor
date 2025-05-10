import React, { useState } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';
import EmptyState from '../EmptyScreen';
import Button55W from '../buttons/ApplicationButton';
import CommonInput from '../inputs/ApplicationInput';

const CountrySelectModal = ({ visible, onClose, countries, onSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const insets = useSafeAreaInsets();

  const filteredCountries = countries?.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.code.includes(searchQuery)
  );
  const codes = filteredCountries?.map((country) => country.code);
  const duplicates = codes?.filter((code, index) => codes.indexOf(code) !== index);
  const clearSearch = () => {
    setSearchQuery('');
  };

  const handleSelect = (item) => {
    if (selectedItem?.code === item.code) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  const handleSave = () => {
    if (selectedItem) {
      onSelect(selectedItem);
    }
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.select({ ios: 'padding', android: null })}
        >
          <View
            style={{
              backgroundColor: 'white',
              marginTop: Platform.select({
                ios: Responsive.height(0),
                android: Responsive.height(-40)
              })
            }}
          >
            <View
              style={{
                paddingHorizontal: Responsive.width(20),
                paddingBottom: Responsive.height(20),
                paddingTop: Responsive.width(40),
                flexDirection: 'row',
                gap: 15,
                alignItems: 'center',
                borderBottomWidth: 1,
                borderColor: COLORS.borderColor
              }}
            >
              <TouchableOpacity activeOpacity={0.6} onPress={onClose}>
                <Image
                  source={Icons.closeIcon}
                  style={{ width: 24, height: 24, resizeMode: 'contain' }}
                />
              </TouchableOpacity>
              <Text style={[commonStyles.sixteenGilroy700, { color: '#181C32' }]}>
                Select Country Code
              </Text>
            </View>
          </View>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <View
                style={{
                  paddingVertical: Responsive.height(20),
                  backgroundColor: '#ffffff',
                  zIndex: 9
                }}
              >
                <CommonInput
                  InputIcon={Icons.searchIcon}
                  placeholderText="Search"
                  onchange={setSearchQuery}
                  val={searchQuery}
                  SearchCross={!!searchQuery}
                  searchonpress={clearSearch}
                />
              </View>
              {filteredCountries?.length > 0 ? (
                <FlatList
                  data={filteredCountries}
                  keyExtractor={(item) => `${item.code}-${item.name}`}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{ paddingBottom: Responsive.height(20) }}
                  keyboardShouldPersistTaps="handled"
                  renderItem={({ item }) => (
                    <>
                      <TouchableOpacity style={styles.item} onPress={() => handleSelect(item)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={[commonStyles.sixteenGilroy600, { color: '#3F4254' }]}>
                            {item.name}
                          </Text>
                          <Text
                            style={[
                              commonStyles.sixteenGilroy500,
                              {
                                color: '#3F4254',
                                paddingLeft: Responsive.width(20)
                              }
                            ]}
                          >
                            {item.code}
                          </Text>
                        </View>
                        {selectedItem?.code === item.code && (
                          <Image
                            source={Icons.CheckedIcon}
                            style={{ width: 20, height: 20, borderRadius: 10 }}
                          />
                        )}
                      </TouchableOpacity>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: COLORS.borderColor,
                          marginVertical: Responsive.height(8)
                        }}
                      />
                    </>
                  )}
                />
              ) : (
                <View
                  style={{
                    flex: 1,
                    paddingHorizontal: Responsive.width(20)
                  }}
                >
                  <EmptyState
                    EmptyImage={Images.emptyStateImageOne}
                    imagesize={{
                      width: Responsive.width(260),
                      height: Responsive.height(158)
                    }}
                    heading={'No Results Found'}
                    subHeading={"Your search keywords didn't match with any existing Country Code."}
                  />
                </View>
              )}
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: Responsive.width(20),
              paddingBottom: Platform.select({
                ios: Responsive.height(30),
                android: Responsive.height(20)
              }),
              backgroundColor: COLORS.white
            }}
          >
            <Button55W content={'Select'} onPress={handleSave} disabled={!selectedItem} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: COLORS.white,
    flex: 1
  },
  modalBackground: {
    paddingHorizontal: Responsive.width(20),
    flex: 1,
    backgroundColor: COLORS.white
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#EBEDF3',
    fontSize: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: Responsive.width(15)
  },
  item: {
    height: Responsive.height(50),
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between'
  }
});

export default CountrySelectModal;

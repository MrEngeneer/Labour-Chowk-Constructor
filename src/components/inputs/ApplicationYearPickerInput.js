import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../.../../assets/theme/Layout';
import { Responsive } from '../../assets/lotties/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import Icons from '../../constants/Icons';
import ApplicationYearsPicker from '../yearPicker/ApplicationYearPicker';

const ApplicationYearPickerInput = ({ yearSelect, setYearSelect }) => {
  const [yearpickerModal, setyearpickerModal] = useState(false);

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => setyearpickerModal(true)}
        style={{
          backgroundColor: COLORS.thinLightBlack,
          height: Responsive.height(50),
          borderRadius: 10,
          paddingHorizontal: Responsive.width(15),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={[
            commonStyles.fourteenGilroy500,
            {
              color: yearSelect ? COLORS.regularBlack : COLORS.disabledIcon
            }
          ]}
        >
          {yearSelect ? yearSelect : 'Select Year'}
        </Text>
        <Image
          source={Icons.arrowDown}
          style={[styles.arrowIcon, { tintColor: COLORS.regularBlack }]}
        />
      </TouchableOpacity>

      {yearpickerModal && (
        <Modal transparent visible={yearpickerModal} statusBarTranslucent animationType="fade">
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalCloseButtonBox}>
                <TouchableOpacity onPress={() => setyearpickerModal(false)} activeOpacity={0.6}>
                  <Image source={Icons.xmark} style={styles.modalCloseButton} />
                </TouchableOpacity>
              </View>
              <ApplicationYearsPicker
                selectYear={(e) => {
                  setYearSelect(e);
                  setyearpickerModal(false);
                }}
                target={true}
                cancel={() => setyearpickerModal(false)}
                SelectedYear={yearSelect}
              />
            </View>
          </View>
        </Modal>
      )}
    </>
  );
};

export default ApplicationYearPickerInput;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Responsive.width(20),
    backgroundColor: 'rgba(24, 28, 50, 0.4)'
  },
  modalView: {
    backgroundColor: '#fff',
    paddingHorizontal: Responsive.width(20),
    paddingTop: Responsive.height(10),
    paddingBottom: Responsive.height(20),
    borderRadius: 20,
    width: '100%'
  },
  modalCloseButtonBox: {
    width: 24,
    height: 24,
    top: -50,
    left: '50%',
    marginLeft: -12
  },
  modalCloseButton: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  arrowIcon: {
    width: Responsive.width(14),
    height: Responsive.height(8),
    resizeMode: 'contain'
  }
});

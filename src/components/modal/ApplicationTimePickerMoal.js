import moment from 'moment';
import React, { useState } from 'react';
import { Image, Keyboard, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import Icons from '../../constants/Icons';
import { Button45W, OutlineButton45W } from '../buttons/ApplicationButton';

const ApplicationTimePickerModal = ({ initialDate = undefined, onDateSelected = () => {} }) => {
  const [visible, setVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateSelect = (day) => {
    const selected = new Date(day.dateString);
    const offsetDate = new Date(selected);
    offsetDate.setHours(offsetDate.getHours() + 5);
    offsetDate.setMinutes(offsetDate.getMinutes() + 30);

    setSelectedDate(offsetDate);
  };

  const clearDate = () => {
    setSelectedDate(undefined);
    onDateSelected(undefined);
  };

  const applyDate = () => {
    let finalDate = selectedDate || new Date();
    setSelectedDate(finalDate);
    onDateSelected(finalDate);
    setVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => {
          Keyboard.dismiss();
          setVisible(true);
        }}
      >
        <View style={[styles.inputBox, selectedDate ? styles.activeButton : null]}>
          {!selectedDate ? (
            <Text style={styles.placeholderText}>Select Date</Text>
          ) : (
            <Text style={styles.dateText}>{moment(selectedDate).format('DD MMM YYYY')}</Text>
          )}
          <Image
            source={Icons.calenderNoActive}
            style={[styles.iconSize, { tintColor: selectedDate ? '#84859A' : '#84859A' }]}
          />
        </View>
      </TouchableOpacity>

      <Modal
        transparent
        statusBarTranslucent
        animationType="fade"
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Calendar
              style={styles.calendar}
              theme={{
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                arrowColor: '#3D8BFD',
                monthTextColor: '#3D8BFD',
                textSectionTitleColor: '#181C32'
              }}
              current={
                selectedDate
                  ? moment(selectedDate).format('YYYY-MM-DD')
                  : moment().format('YYYY-MM-DD')
              }
              onDayPress={handleDateSelect}
              markedDates={{
                [moment(selectedDate).format('YYYY-MM-DD')]: {
                  selected: true,
                  marked: true,
                  selectedColor: '#00adf5'
                }
              }}
              renderHeader={(date) => (
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#3D8BFD' }}>
                  {moment(date.toString()).format('MMMM YYYY')} {/* Custom format */}
                </Text>
              )}
            />
            <View style={styles.actionButtons}>
              <View style={{ flex: 1 }}>
                <OutlineButton45W
                  borderColor={'#3D8BFD'}
                  color={'#3D8BFD'}
                  content={'Reset'}
                  onPress={() => {
                    clearDate();
                    setVisible(false);
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Button45W
                  content={'Apply'}
                  buttonStyle={{ backgroundColor: '#3D8BFD' }}
                  onPress={applyDate}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ApplicationTimePickerModal;

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Responsive.width(15),
    height: Responsive.height(45),
    borderColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#F7F8FA'
  },
  iconSize: {
    width: 20,
    height: 20,
    marginLeft: 10
  },
  placeholderText: {
    color: '#84859A',
    fontSize: 14
  },
  dateText: {
    ...commonStyles.twelveGilroy500,
    color: '#3F4254',
    fontSize: 14
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000090',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center'
  },
  calendar: {
    width: '100%',
    height: 350
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    gap: 10
  }
});

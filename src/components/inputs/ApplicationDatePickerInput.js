import { BlurView } from '@react-native-community/blur';
import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import { Button45W, OutlineButton45W } from '../buttons/ApplicationButton';

const ApplicationDatePickerInput = ({
  selectedDate,
  onDateSelect,
  placeholder = 'Select Date',
  icon = Icons.calendarSmall,
  buttonText = 'Select',
  title = 'Select Date',
  visible,
  mindate,
  maxdate
}) => {
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const [tempDate, setTempDate] = useState(selectedDate || new Date());

  const handleCancel = () => {
    setOpenDatePicker(false);
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setOpenDatePicker(true)}
        style={styles.setDueDate}
      >
        <Text
          style={[
            commonStyles.fourteenGilroy500,
            { color: selectedDate ? COLORS.mediumBlack : COLORS.lightBlack }
          ]}
        >
          {selectedDate
            ? selectedDate.toLocaleDateString([], {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            : placeholder}
        </Text>
        <View>
          <Image
            source={icon}
            style={{
              width: Responsive.width(20),
              height: Responsive.height(20),
              resizeMode: 'contain'
            }}
          />
        </View>
      </TouchableOpacity>
      <Modal statusBarTranslucent animationType="fade" transparent={true} visible={openDatePicker}>
        <BlurView
          style={styles.absolute}
          blurType="extraDark"
          blurAmount={5}
          reducedTransparencyFallbackColor="black"
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: Responsive.width(20)
          }}
        >
          <View style={styles.card1}>
            <View style={{ paddingBottom: Responsive.height(0) }}>
              <Text style={commonStyles.twentyGilroy600}>{title}</Text>
            </View>
            <DatePicker
              date={tempDate}
              dividerColor="#099E60"
              mode="date"
              minimumDate={mindate != undefined ? mindate : null}
              maximumDate={maxdate != undefined ? maxdate : null}
              onDateChange={setTempDate}
              style={styles.calendarSmall}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.buttonWrapper}>
                <OutlineButton45W content="Cancel" onPress={handleCancel} />
              </View>
              <View style={styles.buttonWrapper}>
                <Button45W
                  onPress={() => {
                    onDateSelect(tempDate);
                    setOpenDatePicker(false);
                  }}
                  content={buttonText}
                  buttonStyle={{ flex: 1, height: Responsive.height(45) }}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  setDueDate: {
    backgroundColor: COLORS.thinLightBlack,
    paddingHorizontal: Responsive.width(15),
    paddingVertical: Responsive.height(2),
    height: Responsive.height(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  card1: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    paddingVertical: Responsive.height(20)
  },
  datePicker: {
    color: 'green'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '90%'
  },
  buttonWrapper: {
    flex: 1,
    paddingHorizontal: Responsive.width(5)
  }
});

export default ApplicationDatePickerInput;

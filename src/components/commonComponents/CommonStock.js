import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import { addSpacesToCamelCase } from '../AddSpaceToCamelCase';

const CommonStock = ({
  Modal = '',
  TruckingCost,
  Color = '_',
  ChassisNumber = '_',
  EngineNumber = '_',
  NumberPlate = '_',
  Condition = '',
  stockNo = '',
  header = false,
  CheckBox = false,
  handlecheckbox,
  checked,
  status = '',
  driverDetails = '',
  DriverststusIcon = Icons.DefaultIcon,
  DriverstatusLable = '',
  driverststusImage = true,
  showHeader = true,
  isChassis = true,
  isJob = false,
  job,
  isEngineNumberlable = false,
  DeliveredDate
}) => {
  return (
    <View style={styles.container}>
      {
        (showHeader =
          true && header ? (
            <>
              <View style={{ flexDirection: 'row', gap: 8, alignItems: 'baseline' }}>
                <Text style={styles.modalText}>{Modal || '-'}</Text>
                <Text style={styles.colorText}>{Color || '-'}</Text>
              </View>
            </>
          ) : (
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {Modal && (
                  <View style={styles.header}>
                    <Text style={styles.modalText}>{Modal || '-'}</Text>
                    <Text style={styles.colorText}>{Color || '-'}</Text>
                  </View>
                )}

                {TruckingCost && TruckingCost !== null && (
                  <View style={styles.infoRow}>
                    <Text style={styles.truckingCostText}>¥ {TruckingCost}</Text>
                    <Text style={styles.truckingCostLabel}>Trucking Cost</Text>
                  </View>
                )}

                {CheckBox && (
                  <View>
                    <TouchableOpacity onPress={handlecheckbox}>
                      <Image
                        source={checked ? Icons.CheckedIcon : Icons.UncheckedIcon}
                        style={{ width: 24, height: 24, resizeMode: 'contain' }}
                      />
                    </TouchableOpacity>
                  </View>
                )}

                {status && (
                  <View
                    style={{
                      height: Responsive.height(18),
                      width: Responsive.width(65),
                      borderRadius: 3,
                      backgroundColor:
                        status === 'Pending'
                          ? 'rgba(255, 193, 7, 0.15)'
                          : status === 'New'
                            ? 'rgba(140, 117, 232, 0.2)'
                            : status === 'Accepted'
                              ? 'rgba(226, 238, 255, 1)'
                              : status === 'Picked Up'
                                ? 'rgba(253, 230, 204, 1)'
                                : 'rgba(13, 185, 105, 0.15)',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text
                      style={[
                        commonStyles.tenGilroy700,
                        {
                          color:
                            status === 'Pending'
                              ? '#FFC107'
                              : status === 'Accepted'
                                ? '#3D8BFD'
                                : status === 'New'
                                  ? '#8C75E8'
                                  : status === 'Picked Up'
                                    ? '#F48200'
                                    : status === 'Picked Up'
                                      ? '#F48200'
                                      : '#0DB969'
                        }
                      ]}
                    >
                      {status || '_'}
                    </Text>
                  </View>
                )}

                {driverDetails && (
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <View style={{ alignItems: 'flex-end' }}>
                      <Text
                        style={[
                          commonStyles.twelveGilroy700,
                          { color: '#181C32', textTransform: 'capitalize' }
                        ]}
                      >
                        {driverDetails || '_'}
                      </Text>
                      <Text
                        style={[
                          commonStyles.tenGilroy600,
                          { color: '#84859A', paddingTop: Responsive.height(2) }
                        ]}
                      >
                        {DriverstatusLable || '_'}
                      </Text>
                    </View>
                    {driverststusImage && (
                      <View>
                        <Image
                          source={DriverststusIcon || Icons.DefaultIcon}
                          style={{ width: 24, height: 24, resizeMode: 'contain' }}
                        />
                      </View>
                    )}
                  </View>
                )}
              </View>
            </>
          ))
      }

      {DeliveredDate && (
        <View
          style={{
            paddingTop: Responsive.height(10),
            flexDirection: 'row',
            gap: Responsive.width(3)
          }}
        >
          <Text
            style={[commonStyles.tenGilroy600, { color: COLORS.lightBlack, fontStyle: 'italic' }]}
          >
            Delivered on
          </Text>
          <Text style={[commonStyles.tenGilroy600, { color: COLORS.regularBlack }]}>
            {new Date(DeliveredDate).toLocaleDateString('en-GB', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            })}
          </Text>
        </View>
      )}

      <View style={styles.detailsContainers}>
        {isChassis && (
          <View style={styles.detailItem}>
            <Image
              source={Icons.ChassisIcon}
              style={[styles.icon, { marginTop: Responsive.height(5) }]}
            />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Chassis Number</Text>
              <Text style={styles.detailValue}>{ChassisNumber || '-'}</Text>
            </View>
          </View>
        )}
        {isJob && (
          <View style={styles.detailItem}>
            <Image source={Icons.sms} style={[styles.icon, { marginTop: Responsive.height(5) }]} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Job</Text>
              <Text style={styles.detailValue}>{job || '-'}</Text>
            </View>
          </View>
        )}
        <View style={styles.detailItems}>
          <Image source={Icons.EngineIcon} style={styles.icon} />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailLabel}>
              {isEngineNumberlable == true ? 'Engine Number' : 'LOT Number'}
            </Text>
            <Text style={styles.detailValue}>{EngineNumber || '-'}</Text>
          </View>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Image
            source={Icons.NumberPlate}
            style={[styles.icon, { marginTop: Responsive.height(5) }]}
          />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailLabel}>Has Number Plate</Text>
            <Text style={styles.detailValue}>{NumberPlate === true ? 'Yes' : 'No'}</Text>
          </View>
        </View>
        {Condition && (
          <View style={styles.detailItems}>
            <Image source={Icons.ConditionIcon} style={styles.icon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>Condition</Text>

              <Text
                style={[
                  commonStyles.fourteenGilroy600,
                  {
                    color: Condition == 'loaded' ? '#3D8BFD' : '#3F4254',
                    flex: 1
                  }
                ]}
              >
                {addSpacesToCamelCase(Condition || '-')}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {},
  modalText: {
    ...commonStyles.eighteenGilroy700,
    color: '#181C32',
    textTransform: 'capitalize'
  },
  truckingCostText: {
    ...commonStyles.sixteenGilroy700,
    color: '#181C32'
  },
  infoRow: {
    alignItems: 'flex-end',
    gap: 2
  },
  colorText: {
    ...commonStyles.twelveGilroy600,
    textTransform: 'capitalize',
    color: '#3F4254'
  },
  truckingCostLabel: {
    ...commonStyles.tenGilroy600,
    color: '#84859A'
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Responsive.height(25)
  },
  detailsContainers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: Responsive.height(25)
  },
  detailItem: {
    flex: 1,
    flexDirection: 'row'
  },
  detailItems: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '5%'
  },
  icon: {
    width: 20,
    height: 20
  },
  detailTextContainer: {
    paddingLeft: Responsive.width(10),
    flex: 1
  },
  detailLabel: {
    ...commonStyles.tenGilroy600,
    color: '#84859A'
  },
  detailValue: {
    ...commonStyles.fourteenGilroy600,
    color: '#3F4254',
    flex: 1
  },
  detailValues: {
    ...commonStyles.twelveGilroy600,
    color: '#3F4254',
    textTransform: 'capitalize'
  },
  detailValueses: {
    ...commonStyles.fourteenGilroy600,
    color: '#3F4254',
    textTransform: 'capitalize'
  }
});

export default CommonStock;

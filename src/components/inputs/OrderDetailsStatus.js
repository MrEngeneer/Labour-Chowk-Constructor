import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';
import Images from '../../constants/Images';

const OrderDetailstatus = ({
  labelItalic,
  dateLabel,
  truckNumber,
  cost,
  name = '',
  truckingdate = '',
  stockCount = '',
  stockAssigned,
  stockAssignedLabel,
  truckingSheets,
  stockLable,
  truckingdateLable,
  lineImage,
  dueDate = '',
  DeliveryName = '',
  deliveryDate = '',
  tintColor = false,
  textColour = false,
  truckImage = false,
  pickupLable = true,
  status,
  totalStocks,
  CompleteStatus,
  PendingtotalStocks
}) => {
  const iconTintColor = tintColor ? COLORS.white : '#8A93B3';
  const labelColor = textColour ? '#B1D1FE' : '#B5B5C3';
  const pickupdateColor = textColour ? '#B1D1FE' : '#84859A';
  const customerName = textColour ? '#F5F7F9' : '#3F4254';
  return (
    <View style={styles.container}>
      {truckNumber ? (
        <View style={styles.headerContainer}>
          <View style={styles.cardHeader}>
            <View style={{ flexDirection: 'row', gap: 10 }}>
              <Text style={[commonStyles.fourteenGilroy600, { color: COLORS.darkBlue }]}>
                #{truckNumber}
              </Text>
              {CompleteStatus && (
                <View style={styles.completeStatusContainer}>
                  <Text style={[commonStyles.tenGilroy700, { color: '#0DB969' }]}>
                    {CompleteStatus == 'Completed' || CompleteStatus == 'Completed'
                      ? 'Delivered'
                      : CompleteStatus}
                  </Text>
                </View>
              )}
            </View>
            {truckingdate && (
              <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                {truckingdateLable && (
                  <Text
                    style={[
                      commonStyles.tenItalicGilroy500,
                      { color: '#84859A', fontStyle: 'italic' }
                    ]}
                  >
                    {truckingdateLable}
                  </Text>
                )}
                <Text
                  style={
                    !labelItalic
                      ? [
                          commonStyles.tenGilroy700,
                          { color: '#3F4254', fontWeight: '700', fontStyle: 'italic' }
                        ]
                      : [commonStyles.tenGilroy700, { color: '#3F4254', fontWeight: '700' }]
                  }
                >
                  {new Date(truckingdate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </Text>
              </View>
            )}
          </View>

          {cost >= 0 && (
            <View style={styles.cardFooter}>
              <Text style={[commonStyles.sixteenGilroy700, { color: COLORS.darkBlack }]}>
                ¥ {cost}
              </Text>
              <Text style={[commonStyles.tenGilroy600, { color: COLORS.lightBlack }]}>
                Total Cost
              </Text>
            </View>
          )}

          {status && (
            <View
              style={[
                styles.completeStatusContainer,
                {
                  backgroundColor: status === 'Accepted' ? '#3D8BFD26' : '#E2EEFF'
                }
              ]}
            >
              <Text style={[commonStyles.tenGilroy700, { color: '#3D8BFD' }]}>{status}</Text>
            </View>
          )}

          {totalStocks && (
            <View>
              <Text style={[commonStyles.fourteenGilroy700, { color: '#181C32' }]}>
                {totalStocks} {totalStocks > 1 ? 'Stocks' : 'Stock'}
              </Text>
            </View>
          )}

          {PendingtotalStocks && (
            <View style={styles.pendingStocksContainer}>
              <Text
                style={[commonStyles.sixteenGilroy700, { color: '#181C32', alignSelf: 'flex-end' }]}
              >
                {PendingtotalStocks}
              </Text>
              <Text style={[commonStyles.tenGilroy600, { color: '#84859A' }]}>
                {totalStocks > 1 ? 'Stocks Pending' : 'Stock Pending'}
              </Text>
            </View>
          )}
        </View>
      ) : null}
      {stockCount && (
        <View style={styles.stockContainer}>
          <Text style={[commonStyles.twelveGilroy600, { color: COLORS.lightBlack }]}>
            {truckingSheets.status !== 'Pending'
              ? `${stockLable} ${stockAssignedLabel}`
              : `${stockLable}: `}
          </Text>
          <Text style={[commonStyles.twelveGilroy700, { color: COLORS.regularBlack }]}>
            {truckingSheets.status !== 'Pending' ? ` ${stockAssigned}/${stockCount}` : stockCount}
          </Text>
        </View>
      )}
      {lineImage && (
        <View style={styles.lineImageContainer}>
          <Image source={Images.LineImage} style={styles.lineImage} />
        </View>
      )}

      {/* Pickup Section */}
      <View style={styles.orderDetailsContainer}>
        <View style={styles.orderDetailsIconContainer}>
          <Image
            source={Icons.locationCircle}
            style={[styles.orderDetailsIcon, { tintColor: iconTintColor }]}
          />
          <Image
            source={Images.LocationTrackLIne}
            style={[styles.orderDetailsLine, { tintColor: iconTintColor }]}
          />
        </View>
        <View>
          <Text style={[styles.orderDetailLabel, { color: labelColor }]}>Pickup</Text>
          <Text style={[styles.orderDetailText, { color: customerName }]}>{name}</Text>
          <View style={styles.orderDetailSubtextContainer}>
            {pickupLable && (
              <Text style={[styles.subtextLabel, { color: pickupdateColor }]}>
                {dateLabel ? 'Pickup on:' : 'Pickup Due on'}
              </Text>
            )}
            <Text style={[styles.subtextText, { color: customerName }]}>
              {/* {dueDate} */}
              {dueDate
                ? new Date(`${dueDate}`).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })
                : ''}
            </Text>
          </View>
        </View>
      </View>

      {/* Delivery Section */}
      <View style={styles.deliveryContainer}>
        <View style={styles.orderDetailsIconContainer}>
          <Image
            source={Icons.locationIcon}
            style={[styles.orderDetailsIcon, { tintColor: iconTintColor }]}
          />
        </View>
        <View>
          <Text style={[styles.orderDetailLabel, { color: labelColor }]}>Delivery</Text>
          <Text style={[styles.orderDetailText, { color: customerName }]}>{DeliveryName}</Text>
          <View style={styles.orderDetailSubtextContainer}>
            <Text style={[styles.subtextLabel, { color: pickupdateColor }]}>
              {' '}
              {dateLabel ? 'Delivered on:' : 'Expected on'}
            </Text>
            <Text style={[styles.subtextText, { color: customerName }]}>
              {/* {deliveryDate} */}
              {deliveryDate
                ? new Date(`${deliveryDate}`).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })
                : ''}
            </Text>
          </View>
        </View>
      </View>

      {truckImage && (
        <View style={styles.truckImageContainer}>
          <Image source={Images?.TruckImage} style={styles.truckImage} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignItems: 'center',
    position: 'relative',
    flex: 1
  },
  cardHeader: {
    flex: 1,
    gap: 6
  },
  cardFooter: {
    alignItems: 'flex-end',
    gap: 5
  },
  statusContainer: {
    height: Responsive.height(25),
    width: Responsive.width(75),
    borderRadius: 3,
    backgroundColor: 'rgba(255, 193, 7, 0.15)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  stockContainer: {
    flexDirection: 'row',
    gap: 2,
    paddingTop: Responsive.height(5)
  },
  lineImageContainer: {
    width: '100%',
    paddingTop: Responsive.height(20)
  },
  lineImage: {
    height: 1,
    resizeMode: 'cover',
    width: '100%'
  },
  orderDetailsContainer: {
    flexDirection: 'row',
    position: 'relative',
    marginLeft: -10,
    paddingTop: Responsive.height(16)
  },
  orderDetailsIconContainer: {
    alignItems: 'center',
    width: '10%',
    gap: 4,
    paddingTop: Responsive.height(5)
  },
  orderDetailsIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#8A93B3'
  },
  orderDetailsLine: {
    width: 20,
    height: 50
  },
  orderDetailLabel: {
    ...commonStyles.twelveGilroy700,
    paddingBottom: Responsive.height(5),
    paddingTop: Responsive.height(3)
  },
  orderDetailText: {
    ...commonStyles.fourteenGilroy700,
    paddingBottom: Responsive.height(2),
    textTransform: 'capitalize'
  },
  orderDetailSubtextContainer: {
    flexDirection: 'row',
    gap: 2
  },
  subtextLabel: {
    ...commonStyles.tenGilroy500
  },
  subtextText: {
    ...commonStyles.tenGilroy600
  },
  deliveryContainer: {
    flexDirection: 'row',
    marginLeft: -10
  },
  truckImageContainer: {
    position: 'absolute',
    top: 0,
    right: -48
  },
  truckImage: {
    height: Responsive.height(107),
    width: Responsive.width(146),
    resizeMode: 'contain'
  },
  completeStatusContainer: {
    height: Responsive.height(20),
    width: Responsive.width(65),
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(13, 185, 105, 0.15)'
  }
});

export default OrderDetailstatus;

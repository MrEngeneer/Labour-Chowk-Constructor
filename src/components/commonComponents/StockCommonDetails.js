import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Responsive } from '../../assets/theme/Layout';
import { commonStyles } from '../../assets/theme/Styles';
import { COLORS } from '../../assets/theme/Theme';
import Icons from '../../constants/Icons';

const StockCommonDetails = ({
  CustomerCompany,
  AuctionDeadline,
  AuctionBuyer,
  POSNumber,
  isDocument = true,
  onPressViewDocument
}) => {
  return (
    <View style={{ backgroundColor: 'white', paddingHorizontal: Responsive.width(20) }}>
      <View style={styles.detailsContainers}>
        <View style={styles.detailItem}>
          <Image
            source={Icons.CustomerIcon}
            style={[styles.icon, { marginTop: Responsive.height(5) }]}
          />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailLabel}>Customer Company</Text>
            <Text style={styles.detailValue}>{CustomerCompany || '-'}</Text>
          </View>
        </View>

        <View style={styles.detailItems}>
          <Image source={Icons.calanderIcon} style={styles.icon} />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailLabel}>Auction Id</Text>
            <Text style={styles.detailValue}>{AuctionDeadline}</Text>
          </View>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Image
            source={Icons.CustomerIcon}
            style={[styles.icon, { marginTop: Responsive.height(5) }]}
          />
          <View style={styles.detailTextContainer}>
            <Text style={styles.detailLabel}>Auction Buyer</Text>
            <Text style={styles.detailValue}>{AuctionBuyer}</Text>
          </View>
        </View>
        {POSNumber && (
          <View style={styles.detailItems}>
            <Image source={Icons.EngineIcon} style={styles.icon} />
            <View style={styles.detailTextContainer}>
              <Text style={styles.detailLabel}>POS Number</Text>

              <Text style={[commonStyles.fourteenGilroy600]}>{POSNumber || '-'}</Text>
            </View>
          </View>
        )}
      </View>
      {isDocument && (
        <>
          <View
            style={{
              height: 1,
              backgroundColor: COLORS.borderColor,
              marginVertical: Responsive.height(16)
            }}
          />
          <View style={styles.detailItem}>
            <Image
              source={Icons.documentIcon}
              style={[styles.icon, { marginTop: Responsive.height(5) }]}
            />
            <View style={styles.detailTextContainer}>
              <Text
                style={[
                  commonStyles.tenGilroy600,
                  { color: '#84859A', marginBottom: Responsive.height(2) }
                ]}
              >
                Trucking Sheet Document
              </Text>
              <TouchableOpacity activeOpacity={0.6} onPress={onPressViewDocument}>
                <Text style={[commonStyles.fourteenGilroy600, { color: '#3699FF' }]}>Download</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
    textTransform: 'capitalize',
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

export default StockCommonDetails;

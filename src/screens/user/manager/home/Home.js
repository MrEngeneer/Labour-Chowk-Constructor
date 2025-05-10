import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../../../constants/Images';
import { Responsive } from '../../../../assets/theme/Layout';
import { commonStyles } from '../../../../assets/theme/Styles';
import Icons from '../../../../constants/Icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../../assets/theme/Theme';

const dummyData = [
  { id: '1', title: 'Electrician', available: 10, total: 10, icon: Icons.crewDummyOne },
  { id: '2', title: 'Plumber', available: 8, total: 15, icon: Icons.crewDummyOne },
  { id: '3', title: 'Carpenter', available: 5, total: 12, icon: Icons.crewDummyOne },
  { id: '4', title: 'Painter', available: 7, total: 10, icon: Icons.crewDummyOne },
];

const confirmedBookings = [
  {
    id: '1',
    name: 'Priya Malhotra',
    price: '₹ 4,200',
    location: 'Sector 56, Gurgaon',
    distance: '12 KM Away',
    teamMembers: 8,
  },
  {
    id: '2',
    name: 'Rahul Verma',
    price: '₹ 5,000',
    location: 'DLF Phase 3, Gurgaon',
    distance: '8 KM Away',
    teamMembers: 6,
  },
  {
    id: '3',
    name: 'Aarav Singh',
    price: '₹ 3,750',
    location: 'Sohna Road, Gurgaon',
    distance: '15 KM Away',
    teamMembers: 7,
  },
];

const Home = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={item.icon} style={styles.cardIcon} />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterItem}>
          <Text style={[commonStyles.fourteenGilroy600, styles.availableText]}>{item.available}</Text>
          <Text style={[commonStyles.nineGilroy600, styles.footerLabel]}>Available</Text>
        </View>
        <View style={styles.cardFooterItem}>
          <Text style={[commonStyles.fourteenGilroy600, styles.availableTexts]}>{item.total}</Text>
          <Text style={[commonStyles.nineGilroy600, styles.footerLabel]}>Total</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={Images.dummyProfileImage} style={styles.profileImage} />
          </TouchableOpacity>
          <View style={styles.profileTextContainer}>
            <Text style={[commonStyles.fourteenGilroy600, styles.greetingText]}>Hi, Varun!</Text>
            <Text style={[commonStyles.sixteenGilroy600, styles.companyText]}>JK Construction</Text>
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Image source={Icons.start} style={styles.ratingIcon} />
          <Text>4.5/5</Text>
        </View>
      </View>

      {/* Horizontal Scrollable List */}
      <View style={styles.scrollContainer}>
        <FlatList
          data={dummyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(20), borderTopWidth: 4, borderTopColor: COLORS.borderColor }}>
  <Text style={[commonStyles.sixteenGilroy700,{color:"#181C32"}]}>Confirmed Bookings</Text>
  <FlatList
    data={confirmedBookings}
    keyExtractor={(item) => item.id}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingTop: Responsive.height(16) }}
    renderItem={({ item, index }) => (
      <View style={{ width: Responsive.width(250), marginRight: 16 }}>
        <View style={{
          paddingHorizontal: Responsive.width(16),
          paddingVertical: Responsive.height(16),
          borderWidth: 1,
          borderLeftWidth: 3,
          borderColor: index % 2 === 0 ? "#FFC107" : "#0DB969",
          borderRadius: 10
        }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 4, paddingTop: Responsive.height(8), alignItems: "center" }}>
            <Image source={Icons.location} style={{ width: Responsive.width(15), height: Responsive.height(15), resizeMode: "contain" }} />
            <Text>{item.location}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: Responsive.height(15) }}>
            <Text style={[commonStyles.tenGilroy600, { color: "#84859A" }]}>{item.distance}</Text>
            <View style={{ flexDirection: "row", height: Responsive.height(20), gap: 8, width: Responsive.width(96), alignItems: "center", backgroundColor: "#F5F6FA", borderRadius: 20 }}>
              <View style={{ justifyContent: "center", alignItems: "center", height: Responsive.height(15), width: Responsive.width(15), borderRadius: 50, backgroundColor: "white", marginLeft: 2 }}>
                <Text style={[commonStyles.tenGilroy700, { color: "#84859A" }]}>{item.teamMembers}</Text>
              </View>
              <Text style={[commonStyles.tenGilroy600, { color: "#84859A" }]}>Team Members</Text>
            </View>
          </View>
        </View>
      </View>
    )}
  />
</View>
<View style={{ paddingHorizontal: Responsive.width(20), paddingVertical: Responsive.height(20),borderTopWidth: 4, borderTopColor: COLORS.borderColor}}>
  <Text style={[commonStyles.sixteenGilroy700,{paddingBottom:Responsive.height(15),color:"#181C32"}]} >New Bookings</Text>
  <View style={{paddingHorizontal:Responsive.width(15),paddingVertical:Responsive.height(15),borderWidth:1,borderColor:COLORS.borderColor,marginBottom:15}}>
   <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'baseline'}}>
   <View style={{flexDirection:"row",alignItems:"baseline",gap:5}}>
   <Text style={[commonStyles.sixteenGilroy600,{color:"#181C32"}]}>Anjali Verma</Text>
   <View style={{paddingHorizontal:Responsive.width(3),height:Responsive.height(15),backgroundColor:"rgba(13, 185, 105, 0.15)",justifyContent:"center",alignItems:"center",flexDirection:"row",gap:2}}>
    <Image source={Icons.start} style={{width:Responsive.width(8),height:Responsive.height(8),tintColor:"#0DB969"}}/>
    <Text style={[commonStyles.tenGilroy600,{color:"#0DB969"}]}>4.5/5</Text>
   </View>
   </View>
   <Text style={[commonStyles.sixteenGilroy700,{color:"#181C32"}]}>₹ 5,900</Text>
   </View>
   <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingTop:Responsive.height(10)}}>
    <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
      <Image source={Icons.location} style={{width:Responsive.width(15),height:Responsive.height(15),resizeMode:"contain"}}/>
      <Text style={[commonStyles.twelveGilroy500,{color:"#3F4254"}]}>Dwarka Sector 10, New Delhi</Text>
    </View>
    <Text style={[commonStyles.tenGilroy600,{color:"#84859A"}]}>12 KM Away</Text>
   </View>
 
   <View style={{flexDirection:"row",gap:10,paddingVertical:Responsive.height(15),borderBottomWidth:1,borderColor:COLORS.borderColor}}>
   <View style={{backgroundColor:"#F5F6FA",flexDirection:"row",height:Responsive.height(20),borderRadius:8,alignItems:"center",paddingRight:Responsive.width(5)}}>
      <View style={{width:Responsive.width(15),height:Responsive.height(15),borderRadius:50,backgroundColor:COLORS.white,marginHorizontal:5,justifyContent:"center",alignItems:"center"}}>
        <Text style={[commonStyles.tenGilroy700,{color:"#84859A"}]}>8</Text>
      </View>
      <Text style={[commonStyles.tenGilroy600,{color:"#84859A"}]}>Carpenters</Text>
    </View>
    <View style={{backgroundColor:"#F5F6FA",flexDirection:"row",height:Responsive.height(20),borderRadius:8,alignItems:"center",paddingRight:Responsive.width(5)}}>
      <View style={{width:Responsive.width(15),height:Responsive.height(15),borderRadius:50,backgroundColor:COLORS.white,marginHorizontal:5,justifyContent:"center",alignItems:"center"}}>
        <Text style={[commonStyles.tenGilroy700,{color:"#84859A"}]}>8</Text>
      </View>
      <Text style={[commonStyles.tenGilroy600,{color:"#84859A"}]}>Carpenters</Text>
    </View>
    <View style={{backgroundColor:"#F5F6FA",flexDirection:"row",height:Responsive.height(20),borderRadius:8,alignItems:"center",paddingRight:Responsive.width(5)}}>
      <View style={{width:Responsive.width(15),height:Responsive.height(15),borderRadius:50,backgroundColor:COLORS.white,marginHorizontal:5,justifyContent:"center",alignItems:"center"}}>
        <Text style={[commonStyles.tenGilroy700,{color:"#84859A"}]}>8</Text>
      </View>
      <Text style={[commonStyles.tenGilroy600,{color:"#84859A"}]}>Carpenters</Text>
    </View>
   </View>
  <View style={{flexDirection:"row",paddingVertical:Responsive.height(15)}}>
  <View style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",gap:10,borderRightWidth:1,borderColor:COLORS.borderColor}}>
    <Image source={Icons.closeSquare} style={{width:Responsive.width(15),height:Responsive.height(15)}}/>
    <Text style={[commonStyles.fourteenGilroy600,{color:"#E82646"}]}>Reject</Text>
  </View>
  <View style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",gap:10}}>
    <Image source={Icons.tickSquare} style={{width:Responsive.width(15),height:Responsive.height(15)}}/>
    <Text style={[commonStyles.fourteenGilroy600,{color:"#0DB969"}]}>Accept</Text>
  </View>
  </View>
  </View>
  <TouchableOpacity onPress={() => navigation.navigate("BookingDetails")}>
  <View style={{paddingHorizontal:Responsive.width(15),paddingVertical:Responsive.height(15),borderWidth:1,borderColor:COLORS.borderColor,}}>
   <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'baseline',}}>
   <View style={{flexDirection:"row",alignItems:"baseline",gap:5}}>
   <Text style={[commonStyles.sixteenGilroy600,{color:"#181C32"}]}>Anjali Verma</Text>
   <View style={{paddingHorizontal:Responsive.width(3),height:Responsive.height(15),backgroundColor:"rgba(13, 185, 105, 0.15)",justifyContent:"center",alignItems:"center",flexDirection:"row",gap:2}}>
    <Image source={Icons.start} style={{width:Responsive.width(8),height:Responsive.height(8),tintColor:"#0DB969"}}/>
    <Text style={[commonStyles.tenGilroy600,{color:"#0DB969"}]}>4.5/5</Text>
   </View>
   </View>
   <Text style={[commonStyles.sixteenGilroy700,{color:"#181C32"}]}>₹ 5,900</Text>
   </View>
   <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingTop:Responsive.height(10)}}>
    <View style={{flexDirection:"row",gap:5,alignItems:"center"}}>
      <Image source={Icons.location} style={{width:Responsive.width(15),height:Responsive.height(15),resizeMode:"contain"}}/>
      <Text style={[commonStyles.twelveGilroy500,{color:"#3F4254"}]}>Dwarka Sector 10, New Delhi</Text>
    </View>
    <Text style={[commonStyles.tenGilroy600,{color:"#84859A"}]}>12 KM Away</Text>
   </View>
 
   <View style={{flexDirection:"row",gap:10,paddingVertical:Responsive.height(15),borderBottomWidth:1,borderColor:COLORS.borderColor}}>
   <View style={{backgroundColor:"#F5F6FA",flexDirection:"row",height:Responsive.height(20),borderRadius:8,alignItems:"center",paddingRight:Responsive.width(5)}}>
      <View style={{width:Responsive.width(15),height:Responsive.height(15),borderRadius:50,backgroundColor:COLORS.white,marginHorizontal:5,justifyContent:"center",alignItems:"center"}}>
        <Text style={[commonStyles.tenGilroy700,{color:"#84859A"}]}>8</Text>
      </View>
      <Text style={[commonStyles.tenGilroy600,{color:"#84859A"}]}>Carpenters</Text>
    </View>
    <View style={{backgroundColor:"#F5F6FA",flexDirection:"row",height:Responsive.height(20),borderRadius:8,alignItems:"center",paddingRight:Responsive.width(5)}}>
      <View style={{width:Responsive.width(15),height:Responsive.height(15),borderRadius:50,backgroundColor:COLORS.white,marginHorizontal:5,justifyContent:"center",alignItems:"center"}}>
        <Text style={[commonStyles.tenGilroy700,{color:"#84859A"}]}>8</Text>
      </View>
      <Text style={[commonStyles.tenGilroy600,{color:"#84859A"}]}>Carpenters</Text>
    </View>
    <View style={{backgroundColor:"#F5F6FA",flexDirection:"row",height:Responsive.height(20),borderRadius:8,alignItems:"center",paddingRight:Responsive.width(5)}}>
      <View style={{width:Responsive.width(15),height:Responsive.height(15),borderRadius:50,backgroundColor:COLORS.white,marginHorizontal:5,justifyContent:"center",alignItems:"center"}}>
        <Text style={[commonStyles.tenGilroy700,{color:"#84859A"}]}>8</Text>
      </View>
      <Text style={[commonStyles.tenGilroy600,{color:"#84859A"}]}>Carpenters</Text>
    </View>
   </View>
  <View style={{flexDirection:"row",paddingVertical:Responsive.height(15)}}>
  <View style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",gap:10,borderRightWidth:1,borderColor:COLORS.borderColor}}>
    <Image source={Icons.closeSquare} style={{width:Responsive.width(15),height:Responsive.height(15)}}/>
    <Text style={[commonStyles.fourteenGilroy600,{color:"#E82646"}]}>Reject</Text>
  </View>
  <View style={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row",gap:10}}>
    <Image source={Icons.tickSquare} style={{width:Responsive.width(15),height:Responsive.height(15)}}/>
    <Text style={[commonStyles.fourteenGilroy600,{color:"#0DB969"}]}>Accept</Text>
  </View>
  </View>
  </View>
  </TouchableOpacity>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    paddingHorizontal: Responsive.width(20),
    paddingVertical: Responsive.height(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  profileImage: {
    width: Responsive.width(45),
    height: Responsive.height(45),
    resizeMode: 'contain',
  },
  profileTextContainer: {
    paddingLeft: Responsive.width(10),
    justifyContent: 'center',
  },
  greetingText: {
    color: '#3F4254',
  },
  companyText: {
    color: '#181C32',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    height: Responsive.height(25),
    width: Responsive.width(65),
    backgroundColor: '#F5F6FA',
    justifyContent: 'center',
  },
  ratingIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
  },
  scrollContainer: {
    paddingHorizontal: Responsive.width(20),
    paddingBottom: Responsive.height(20),
  },
  card: {
    width: Responsive.width(150),
    height: Responsive.height(70),
    backgroundColor: '#F5F6FA',
    borderRadius: 8,
    marginRight: Responsive.width(10),
  },
  cardHeader: {
    paddingHorizontal: Responsive.width(12),
    paddingVertical: Responsive.height(12),
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardIcon: {
    width: Responsive.width(24),
    height: Responsive.height(24),
  },
  cardTitle: {
    ...commonStyles.fourteenGilroy600,
    color: '#181C32',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Responsive.width(12),
  },
  cardFooterItem: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 4,
  },
  availableText: {
    color: '#0DB969',
  },
  availableTexts: {
    color: '#3F4254',
  },
  footerLabel: {
    color: '#84859A',
  },
  
});

export default Home;
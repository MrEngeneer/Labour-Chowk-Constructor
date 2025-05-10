import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Responsive } from '../../../../assets/theme/Layout';
import { commonStyles } from '../../../../assets/theme/Styles';
import Icons from '../../../../constants/Icons';
import { COLORS } from '../../../../assets/theme/Theme';

const Payments = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
           <View style={{paddingTop:Responsive.height(30),paddingHorizontal:Responsive.width(20),flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomWidth:1,borderBottomColor:"#E4E4E4",paddingBottom:Responsive.height(15)}}>
            <Text style={[commonStyles.twentyFourGilroy700,{color:"#181C32"}]}>Payments</Text>
            <Text style={[commonStyles.fourteenGilroy600,{color:"#F1D221"}]}>Need help?</Text>
           </View>
           <View style={{justifyContent:"space-between",flexDirection:"row",paddingHorizontal:Responsive.width(20),paddingVertical:Responsive.height(18)}}>
            <View style={{flexDirection:"row",gap:15,alignItems:"center"}}>
            <Image source={Icons.earningActive} style={{width:Responsive.width(24),height:Responsive.height(24),resizeMode:"contain"}}/>|
            <Text style={[commonStyles.fourteenGilroy700,{color:"#3F4254"}]}>Total Earning</Text>
            </View>
            <Text style={[commonStyles.twentyGilroy700,{color:"#181C32"}]}>₹54,600</Text>
           </View>
           <View style={{paddingHorizontal:Responsive.width(20),paddingVertical:Responsive.height(20),borderTopColor:COLORS.borderColor,borderTopWidth:4}}>
            <Text style={[commonStyles.eighteenGilroy700,{color:"#181C32"}]}>Transition History</Text>
            <View style={{height:Responsive.height(1),backgroundColor:COLORS.borderColor,marginVertical:Responsive.height(20)}}/>
           </View>
           <View style={{paddingHorizontal:Responsive.width(20)}}>
           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
            <View style={{flexDirection:"row",gap:20}}>
            <Image source={Icons.earning} style={{width:Responsive.width(35),height:Responsive.height(35),resizeMode:"contain"}}/>
            <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                <Text style={[commonStyles.twelveGilroy600,{color:"#181C32"}]}>Received from Rajesh Verma</Text>
                <Text style={[commonStyles.twelveGilroy500,{color:"#84859A"}]}>10 Mar 2024 * 4 : 00 PM</Text>
            </View>
            </View>
            <Text style={[commonStyles.fourteenGilroy600,{color:"#0DB969"}]}>+ ₹7000</Text>
           </View>
           <View style={{height:Responsive.height(1),backgroundColor:COLORS.borderColor,marginVertical:Responsive.height(20)}}/>

           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
            <View style={{flexDirection:"row",gap:20}}>
            <Image source={Icons.earning} style={{width:Responsive.width(35),height:Responsive.height(35),resizeMode:"contain"}}/>
            <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                <Text style={[commonStyles.twelveGilroy600,{color:"#181C32"}]}>Received from Rajesh Verma</Text>
                <Text style={[commonStyles.twelveGilroy500,{color:"#84859A"}]}>10 Mar 2024 * 4 : 00 PM</Text>
            </View>
            </View>
            <Text style={[commonStyles.fourteenGilroy600,{color:"#0DB969"}]}>+ ₹7000</Text>
           </View>
           <View style={{height:Responsive.height(1),backgroundColor:COLORS.borderColor,marginVertical:Responsive.height(20)}}/>

           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
            <View style={{flexDirection:"row",gap:20}}>
            <Image source={Icons.earning} style={{width:Responsive.width(35),height:Responsive.height(35),resizeMode:"contain"}}/>
            <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                <Text style={[commonStyles.twelveGilroy600,{color:"#181C32"}]}>Received from Rajesh Verma</Text>
                <Text style={[commonStyles.twelveGilroy500,{color:"#84859A"}]}>10 Mar 2024 * 4 : 00 PM</Text>
            </View>
            </View>
            <Text style={[commonStyles.fourteenGilroy600,{color:"#0DB969"}]}>+ ₹7000</Text>
           </View>
           <View style={{height:Responsive.height(1),backgroundColor:COLORS.borderColor,marginVertical:Responsive.height(20)}}/>

           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
            <View style={{flexDirection:"row",gap:20}}>
            <Image source={Icons.earning} style={{width:Responsive.width(35),height:Responsive.height(35),resizeMode:"contain"}}/>
            <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                <Text style={[commonStyles.twelveGilroy600,{color:"#181C32"}]}>Received from Rajesh Verma</Text>
                <Text style={[commonStyles.twelveGilroy500,{color:"#84859A"}]}>10 Mar 2024 * 4 : 00 PM</Text>
            </View>
            </View>
            <Text style={[commonStyles.fourteenGilroy600,{color:"#0DB969"}]}>+ ₹7000</Text>
           </View>
           <View style={{height:Responsive.height(1),backgroundColor:COLORS.borderColor,marginVertical:Responsive.height(20)}}/>

           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
            <View style={{flexDirection:"row",gap:20}}>
            <Image source={Icons.earning} style={{width:Responsive.width(35),height:Responsive.height(35),resizeMode:"contain"}}/>
            <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                <Text style={[commonStyles.twelveGilroy600,{color:"#181C32"}]}>Received from Rajesh Verma</Text>
                <Text style={[commonStyles.twelveGilroy500,{color:"#84859A"}]}>10 Mar 2024 * 4 : 00 PM</Text>
            </View>
            </View>
            <Text style={[commonStyles.fourteenGilroy600,{color:"#0DB969"}]}>+ ₹7000</Text>
           </View>
           <View style={{height:Responsive.height(1),backgroundColor:COLORS.borderColor,marginVertical:Responsive.height(20)}}/>

           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
            <View style={{flexDirection:"row",gap:20}}>
            <Image source={Icons.earning} style={{width:Responsive.width(35),height:Responsive.height(35),resizeMode:"contain"}}/>
            <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                <Text style={[commonStyles.twelveGilroy600,{color:"#181C32"}]}>Received from Rajesh Verma</Text>
                <Text style={[commonStyles.twelveGilroy500,{color:"#84859A"}]}>10 Mar 2024 * 4 : 00 PM</Text>
            </View>
            </View>
            <Text style={[commonStyles.fourteenGilroy600,{color:"#E82646"}]}>- ₹7000</Text>
           </View>
           <View style={{height:Responsive.height(1),backgroundColor:COLORS.borderColor,marginVertical:Responsive.height(20)}}/>

           <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>
            <View style={{flexDirection:"row",gap:20}}>
            <Image source={Icons.earning} style={{width:Responsive.width(35),height:Responsive.height(35),resizeMode:"contain"}}/>
            <View style={{flexDirection:"column",justifyContent:"space-between"}}>
                <Text style={[commonStyles.twelveGilroy600,{color:"#181C32"}]}>Received from Rajesh Verma</Text>
                <Text style={[commonStyles.twelveGilroy500,{color:"#84859A"}]}>10 Mar 2024 * 4 : 00 PM</Text>
            </View>
            </View>
            <Text style={[commonStyles.fourteenGilroy600,{color:"#0DB969"}]}>+ ₹7000</Text>
           </View>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Payments;

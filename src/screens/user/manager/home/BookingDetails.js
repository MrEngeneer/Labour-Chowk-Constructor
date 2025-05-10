import React from 'react';
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ApplicationHeader from '../../../../components/headers/ApplicationHeader';
import {Responsive} from '../../../../assets/theme/Layout';
import {commonStyles} from '../../../../assets/theme/Styles';
import Icons from '../../../../constants/Icons';
import {COLORS} from '../../../../assets/theme/Theme';
import {Button45W} from '../../../../components/buttons/ApplicationButton';

const BookingDetails = () => {
  return (
    <View style={{flex: 1, paddingBottom: Responsive.height(20)}}>
      <View style={{backgroundColor: COLORS.white}}>
        <ApplicationHeader title={'Booking Details'} back={true} />
      </View>
      <Animated.ScrollView
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            paddingHorizontal: Responsive.width(20),
            paddingVertical: Responsive.height(20),
            backgroundColor: COLORS.white,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Responsive.width(10),
            }}>
            <Text style={[commonStyles.eighteenGilroy600, {color: '#181C32'}]}>
              Rahul Sharma
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: Responsive.width(5),
                backgroundColor: 'rgba(219, 245, 233, 1)',
                height: Responsive.height(20),
                width: Responsive.width(55),
                borderRadius: Responsive.width(5),
                justifyContent: 'center',
              }}>
              <Image
                source={Icons.start}
                style={{
                  width: Responsive.width(10),
                  height: Responsive.height(10),
                  resizeMode: 'contain',
                  tintColor: '#0DB969',
                }}
              />
              <Text style={[commonStyles.tenGilroy600, {color: '#0DB969'}]}>
                4.5/5
              </Text>
            </View>
          </View>
          <Text
            style={[
              commonStyles.tenGilroy600,
              {
                color: '#84859A',
                fontStyle: 'italic',
                paddingVertical: Responsive.height(10),
                borderBottomWidth: 1,
              },
            ]}>
            Has engaged in 4 services, reviewed by 4 different companies
          </Text>
        </View>
        <View
          style={{
            width: '100%',
            height: Responsive.height(40),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              commonStyles.fourteenGilroy700,
              {color: '#84859A', letterSpacing: 1, textTransform: 'uppercase'},
            ]}>
            Crew Details
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Responsive.width(20),
            paddingVertical: Responsive.height(20),
            backgroundColor: 'white',
          }}>
          <View
            style={{
              paddingHorizontal: Responsive.width(15),
              paddingVertical: Responsive.height(10),
              borderRadius: Responsive.width(10),
              borderWidth: 1,
              borderColor: COLORS.borderColor,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: Responsive.width(10),
                paddingVertical: Responsive.height(10),
              }}>
              <Image
                source={Icons.crewDummyOne}
                style={{
                  width: Responsive.width(25),
                  height: Responsive.height(25),
                }}
              />
              <Text style={[commonStyles.sixteenGilroy600, {color: '#181C32'}]}>
                2 Electricians
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: Responsive.width(10),
                paddingVertical: Responsive.height(10),
              }}>
              <Image
                source={Icons.crewDummyTwo}
                style={{
                  width: Responsive.width(25),
                  height: Responsive.height(25),
                }}
              />
              <Text style={[commonStyles.sixteenGilroy600, {color: '#181C32'}]}>
                2 Carpenters
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: Responsive.width(10),
                paddingVertical: Responsive.height(10),
              }}>
              <Image
                source={Icons.crewDummyTwo}
                style={{
                  width: Responsive.width(25),
                  height: Responsive.height(25),
                }}
              />
              <Text style={[commonStyles.sixteenGilroy600, {color: '#181C32'}]}>
                1 Plumber
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: Responsive.width(10),
                paddingVertical: Responsive.height(10),
              }}>
              <Image
                source={Icons.crewDummyOne}
                style={{
                  width: Responsive.width(25),
                  height: Responsive.height(25),
                }}
              />
              <Text style={[commonStyles.sixteenGilroy600, {color: '#181C32'}]}>
                2 Skilled Masons
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: Responsive.width(10),
                paddingVertical: Responsive.height(10),
              }}>
              <Image
                source={Icons.crewDummyTwo}
                style={{
                  width: Responsive.width(25),
                  height: Responsive.height(25),
                }}
              />
              <Text style={[commonStyles.sixteenGilroy600, {color: '#181C32'}]}>
                4 General Laborers
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: COLORS.borderColor,
              height: Responsive.height(35),
              width: '100%',
            }}>
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: Responsive.width(15),
                justifyContent: 'space-between',
                alignItems: 'center',
                height: Responsive.height(35),
              }}>
              <Text
                style={[
                  commonStyles.twelveGilroy600,
                  {
                    color: '#84859A',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  },
                ]}>
                Total team Required
              </Text>
              <Text style={[commonStyles.twentyGilroy600, {color: '#181C32'}]}>
                11
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: Responsive.height(40),
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={[
              commonStyles.fourteenGilroy700,
              {
                color: '#84859A',
                letterSpacing: 1,
                textTransform: 'uppercase',
                textAlign: 'center',
              },
            ]}>
            Equipment List
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Responsive.width(20),
            paddingVertical: Responsive.height(20),
            backgroundColor: 'white',
          }}>
          <View
            style={{
              paddingHorizontal: Responsive.width(15),
              paddingVertical: Responsive.height(10),
              borderRadius: Responsive.width(10),
              borderWidth: 1,
              borderColor: COLORS.borderColor,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: Responsive.height(10),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: Responsive.width(10),
                }}>
                <Image
                  source={Icons.drillIcon}
                  style={{
                    width: Responsive.width(25),
                    height: Responsive.height(25),
                  }}
                />
                <View>
                  <Text
                    style={[
                      commonStyles.fourteenGilroy600,
                      {color: '#181C32'},
                    ]}>
                    Hammer
                  </Text>
                  <Text
                    style={[commonStyles.twelveGilroy500, {color: '#84859A'}]}>
                    Small
                  </Text>
                </View>
              </View>
              <Text
                style={[commonStyles.fourteenGilroy600, {color: '#3F4254'}]}>
                4X
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: Responsive.height(10),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: Responsive.width(10),
                }}>
                <Image
                  source={Icons.drillIcon}
                  style={{
                    width: Responsive.width(25),
                    height: Responsive.height(25),
                  }}
                />
                <View>
                  <Text
                    style={[
                      commonStyles.fourteenGilroy600,
                      {color: '#181C32'},
                    ]}>
                    Hammer
                  </Text>
                  <Text
                    style={[commonStyles.twelveGilroy500, {color: '#84859A'}]}>
                    Small
                  </Text>
                </View>
              </View>
              <Text
                style={[commonStyles.fourteenGilroy600, {color: '#3F4254'}]}>
                4X
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: Responsive.height(10),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: Responsive.width(10),
                }}>
                <Image
                  source={Icons.drillIcon}
                  style={{
                    width: Responsive.width(25),
                    height: Responsive.height(25),
                  }}
                />
                <View>
                  <Text
                    style={[
                      commonStyles.fourteenGilroy600,
                      {color: '#181C32'},
                    ]}>
                    Hammer
                  </Text>
                  <Text
                    style={[commonStyles.twelveGilroy500, {color: '#84859A'}]}>
                    Small
                  </Text>
                </View>
              </View>
              <Text
                style={[commonStyles.fourteenGilroy600, {color: '#3F4254'}]}>
                4X
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: Responsive.height(10),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: Responsive.width(10),
                }}>
                <Image
                  source={Icons.drillIcon}
                  style={{
                    width: Responsive.width(25),
                    height: Responsive.height(25),
                  }}
                />
                <View>
                  <Text
                    style={[
                      commonStyles.fourteenGilroy600,
                      {color: '#181C32'},
                    ]}>
                    Hammer
                  </Text>
                  <Text
                    style={[commonStyles.twelveGilroy500, {color: '#84859A'}]}>
                    Small
                  </Text>
                </View>
              </View>
              <Text
                style={[commonStyles.fourteenGilroy600, {color: '#3F4254'}]}>
                4X
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: Responsive.height(10),
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: Responsive.width(10),
                }}>
                <Image
                  source={Icons.drillIcon}
                  style={{
                    width: Responsive.width(25),
                    height: Responsive.height(25),
                  }}
                />
                <View>
                  <Text
                    style={[
                      commonStyles.fourteenGilroy600,
                      {color: '#181C32'},
                    ]}>
                    Hammer
                  </Text>
                  <Text
                    style={[commonStyles.twelveGilroy500, {color: '#84859A'}]}>
                    Small
                  </Text>
                </View>
              </View>
              <Text
                style={[commonStyles.fourteenGilroy600, {color: '#3F4254'}]}>
                4X
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: Responsive.height(40),
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Text
            style={[
              commonStyles.fourteenGilroy700,
              {
                color: '#84859A',
                letterSpacing: 1,
                textTransform: 'uppercase',
                textAlign: 'center',
              },
            ]}>
            Payment Summary
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: Responsive.width(20),
            paddingVertical: Responsive.height(20),
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[commonStyles.sixteenGilroy600, {color: '#3F4254'}]}>
              Labour Charges :
            </Text>
            <Text style={[commonStyles.sixteenGilroy600, {color: '#3F4254'}]}>
              ₹6100
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: Responsive.height(6),
              paddingBottom: Responsive.height(30),
            }}>
            <Text style={[commonStyles.fourteenGilroy500, {color: '#84859A'}]}>
              Tax (5%) :
            </Text>
            <Text style={[commonStyles.fourteenGilroy500, {color: '#84859A'}]}>
              ₹305
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={[commonStyles.sixteenGilroy600, {color: '#3F4254'}]}>
              Equipment Charges :
            </Text>
            <Text style={[commonStyles.sixteenGilroy600, {color: '#3F4254'}]}>
              ₹480
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: Responsive.height(6),
              paddingBottom: Responsive.height(15),
              borderBottomWidth: 1,
              borderColor: COLORS.borderColor,
            }}>
            <Text style={[commonStyles.fourteenGilroy500, {color: '#84859A'}]}>
              Tax (5%) :
            </Text>
            <Text style={[commonStyles.fourteenGilroy500, {color: '#84859A'}]}>
              ₹24
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: Responsive.height(15),
              paddingBottom: Responsive.height(10),
            }}>
            <Text style={[commonStyles.sixteenGilroy700, {color: '#3F4254'}]}>
              Sub Total :
            </Text>
            <Text style={[commonStyles.sixteenGilroy700, {color: '#3F4254'}]}>
              ₹6100
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: Responsive.height(6),
              paddingBottom: Responsive.height(15),
              borderBottomWidth: 1,
              borderColor: '#84859A',
            }}>
            <Text style={[commonStyles.fourteenGilroy600, {color: '#0DB969'}]}>
              Discount (1.5% ) :
            </Text>
            <Text style={[commonStyles.fourteenGilroy600, {color: '#0DB969'}]}>
              ₹305
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: Responsive.height(15),
            }}>
            <Text style={[commonStyles.eighteenGilroy700, {color: '#242A37'}]}>
              Payment Receivable :
            </Text>
            <Text style={[commonStyles.eighteenGilroy700, {color: '#242A37'}]}>
              ₹ 6806
            </Text>
          </View>
          <View
            style={{
              height: Responsive.height(70),
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 5,
            }}>
            <Text
              style={[
                commonStyles.twelveGilroy500,
                {color: '#84859A', fontStyle: 'italic'},
              ]}>
              Booked on
            </Text>
            <Text
              style={[
                commonStyles.twelveGilroy700,
                {color: '#84859A', fontStyle: 'italic'},
              ]}>
              23 Oct 2024, 9 : 32 PM
            </Text>
          </View>
        </View>
        {/* <View style={{flexDirection:'row',alignItems:'center',paddingVertical:Responsive.height(10),justifyContent:"space-between"}}> 
       <View style={{flexDirection:'row',alignItems:'center',gap:Responsive.width(10)}}>
       <Image source={Icons.drillIcon} style={{width:Responsive.width(25),height:Responsive.height(25)}}/>
      <View>
      <Text style={[commonStyles.fourteenGilroy600,{color:"#181C32"}]}>Hammer</Text>
      <Text style={[commonStyles.twelveGilroy500,{color:"#84859A"}]}>Small</Text>
      </View>
       </View>
       <Text style={[commonStyles.fourteenGilroy600,{color:"#3F4254"}]}>4X</Text>
      </View> */}
      
      </Animated.ScrollView>
      <View
          style={{
            paddingTop: Responsive.height(15),
            paddingBottom: Responsive.height(20),
            backgroundColor: COLORS.white,
            borderTopWidth: 1,
            borderColor:COLORS.borderColor,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: Responsive.height(15),
              paddingHorizontal: Responsive.width(20),
            }}>
            <Text style={[commonStyles.eighteenGilroy700, {color: '#242A37'}]}>
              Payment Receivable :
            </Text>
            <Text style={[commonStyles.eighteenGilroy700, {color: '#242A37'}]}>
              ₹ 6806
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 10,
              paddingTop: Responsive.height(15),
              borderTopWidth: 1,
              borderColor:COLORS.borderColor,
              paddingHorizontal: Responsive.width(20),
            }}>
            <View style={{flex: 1}}>
              <Button45W
                content={'Reject'}
                buttonStyle={{backgroundColor: '#E82646'}}
              />
            </View>
            <View style={{flex: 1}}>
              <Button45W
                content={'Reject'}
                buttonStyle={{backgroundColor: '#0DB969'}}
              />
            </View>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BookingDetails;

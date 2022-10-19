import React from 'react'
import { Platform, Text, View } from 'react-native';
import { Between, Bottom, Box, Center, Container, Flex, FullBox, Line, MediumText, MediumTextColor, NoBgButton, SmallText, SmallTextBold } from '../../styles/global';
import { Constants } from 'expo';
import InternalHeader from '../../components/InternalHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

function LastReserveCard() {

    return (
        <FullBox>
            <SmallText style={{ marginBottom: 10 }}>Reserva em andamento</SmallText>
            <NoBgButton>
                <Box>
                    <Between>
                        <View>
                            <View>
                                <SmallTextBold>Checkin</SmallTextBold>
                                <Text>20/12/2020</Text>
                            </View>

                            <View style={{ marginTop: 10 }}>
                                <SmallTextBold>Checkout</SmallTextBold>
                                <Text>20/12/2020</Text>
                            </View>
                        </View>

                        <AntDesign name="eyeo" size={40} color="#ED5353" />
                    </Between>
                </Box>
            </NoBgButton>
        </FullBox>
    )

}

function History() {

    return (
        <FullBox>
            <MediumText>
                Histórico
            </MediumText>
            <Box style={{ backgroundColor: "#F88484" }}>
                <Between>
                    <Flex>
                        <View style={{ marginRight: 15 }}>
                            <SmallTextBold style={{ color: '#fff' }}>Checkin</SmallTextBold>
                            <Text style={{ color: '#fff' }}>20/12/2020</Text>
                        </View>

                        <View>
                            <SmallTextBold style={{ color: '#fff' }}>Checkout</SmallTextBold>
                            <Text style={{ color: '#fff' }}>20/12/2020</Text>
                        </View>
                    </Flex>
                    <AntDesign name="eyeo" size={40} color="#fff" />
                </Between>
            </Box>

            <Box style={{ backgroundColor: "#F88484", marginTop: 10, opacity: 0.8 }}>
                <Between>
                    <Flex>
                        <View style={{ marginRight: 15 }}>
                            <SmallTextBold style={{ color: '#fff' }}>Checkin</SmallTextBold>
                            <Text style={{ color: '#fff' }}>20/12/2020</Text>
                        </View>

                        <View>
                            <SmallTextBold style={{ color: '#fff' }}>Checkout</SmallTextBold>
                            <Text style={{ color: '#fff' }}>20/12/2020</Text>
                        </View>
                    </Flex>
                    <AntDesign name="eyeo" size={40} color="#fff" />
                </Between>
            </Box>

        </FullBox>
    )

}

function Home({ navigation }) {

    return (
        <Container
            style={{ marginTop: 35 }}
        >
            <InternalHeader />
            <LastReserveCard />
            <Line />
            <History />

            <Bottom>
                <NoBgButton onPress={() => navigation.navigate("Reserva")}>
                    <AntDesign style={{ marginRight: 15 }} name="pluscircle" size={30} color="#ED5353" />
                    <MediumTextColor>Nova Reserva</MediumTextColor>
                </NoBgButton>
            </Bottom>
        </Container>
    )

}

export default Home;
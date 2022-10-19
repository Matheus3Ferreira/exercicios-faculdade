import React, { useState } from 'react'
import { Between, Bottom, Box, Container, Flex, FullBox, Line, MediumText, MediumTextColor, ModalContainer, ModalContent, NoBgButton, SmallText, Title } from '../../styles/global';
import Button from '../Button';
import InternalHeader from '../InternalHeader';
import { AntDesign } from '@expo/vector-icons';
import { Modal, Text, View } from 'react-native';
import DatePicker from '../DatePicker';
import axios from 'axios'
import { ScrollView } from 'react-native-gesture-handler';
import Input from '../Input';

function Quarto({ data }) {

    return (
        <NoBgButton style={{ marginBottom: 10 }}>
            <Box>
                <View>
                    <MediumTextColor>{data.valorDiaria}</MediumTextColor>
                    <MediumText>{data.nome}</MediumText>
                    <Text>{data.descricao}</Text>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        {
                            data.comodidades
                                .map((c) => (
                                    <View style={{ marginRight: 10 }}>
                                        <SmallText>{c.nome}</SmallText>
                                    </View>
                                ))
                        }
                    </View>
                </View>
            </Box>

        </NoBgButton>
    )

}

function Reserva({ navigation }) {

    const [checkin, setCheckin] = useState();
    const [checkout, setCheckout] = useState();
    const [quartos, setQuartos] = useState([]);
    const [modalQuarto, setModalQuarto] = useState(false);

    async function getQuartos() {

        const data = {
            "checkIn": "2020-11-01T00:00:00.000Z",
            "checkOut": "2022-02-03T00:00:00.000Z"
        }

        console.log(data);

        await axios.post('https://redlight-backend.herokuapp.com/api/disponibilidade/quarto',
            { data },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then((res) => {

                setQuartos(res.data.payload)
            })
            .catch(console.log)

    }

    function openQuartoModal() {

        setModalQuarto(true);
        getQuartos()

    }

    return (
        <Container
            style={{ marginTop: 35 }}
        >
            <InternalHeader />

            <DatePicker titulo="Checkin" value={checkin} onChange={setCheckin} />
            <DatePicker titulo="Checkout" value={checkout} onChange={setCheckout} />
            <Line />
            <Input title="Adultos"></Input>
            <Input title="Crianças"></Input>

            <NoBgButton onPress={openQuartoModal}>
                <View style={{ width: '100%' }}>
                    <Text style={{ marginBottom: 5 }}>Quarto</Text>
                    <View style={{ backgroundColor: "#F5F5F5", paddingTop: 15, paddingBottom: 20, paddingLeft: 10, borderRadius: 5 }}>
                        <Text>Clique para adicionar quartos</Text>
                    </View>

                </View>
            </NoBgButton>


            <Bottom>
                <Between>
                    <Button title="Reservar" type="normal"></Button>
                </Between>
            </Bottom>

            <Modal
                visible={modalQuarto}
            >
                <ModalContainer>
                    <ModalContent>
                        <View style={{ marginBottom: 10 }}>
                            <Title>Quartos disponiveis</Title>
                            <Text>Quartos disponiveis nas datas selecionadas</Text>
                        </View>

                        <ScrollView>
                            {
                                quartos ? quartos.map((quarto) => <Quarto data={quarto} />) : <Text>Nenhuma Informação encontrada</Text>
                            }
                        </ScrollView>

                        <Bottom>
                            <Between>
                                <View style={{ width: 100 }}>
                                    <Button title="Adicionar" type="normal"></Button>
                                </View>

                                <View style={{ width: 100 }}>
                                    <Button onPress={() => setModalQuarto(false)} title="Fechar" type="inverted"></Button>
                                </View>
                            </Between>
                        </Bottom>
                    </ModalContent>
                </ModalContainer>
            </Modal>
        </Container>
    )

}

export default Reserva;
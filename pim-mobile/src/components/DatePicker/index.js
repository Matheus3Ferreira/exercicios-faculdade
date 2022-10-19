import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Box, Flex, MediumText, NoBgButton } from '../../styles/global';
import DateTimePicker from '@react-native-community/datetimepicker';

function DatePicker({ titulo, value, onChange }) {

    const [show, setShow] = useState(false);

    const Change = (event, selectedDate) => {
        const currentDate = selectedDate || value;
        onChange(currentDate);
        setShow(false);
    };

    const showMode = (currentMode) => {
        setShow(true);
    };

    return (
        <NoBgButton style={{ marginBottom: 10 }} onPress={() => showMode('date')}>
            <Box>
                <Flex>
                    <AntDesign style={{ marginRight: 10 }} name="calendar" size={24} color="#F14747" />
                    <View>
                        <MediumText>{titulo}</MediumText>
                        <Text>{value?.toDateString() || 'Clique para selecionar'}</Text>
                    </View>
                </Flex>
            </Box>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={value || new Date()}
                    mode='date'
                    is24Hour={true}
                    display="default"
                    onChange={Change}
                />
            )}
        </NoBgButton>
    )

}

export default DatePicker;
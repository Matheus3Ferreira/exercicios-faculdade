import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

// Containers

export const Container = styled(View)`
    flex: 1;
    background: #fff;
    justify-content: center;
    padding: 20px;
    align-items: center;
`

export const Bottom = styled(View)`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`

export const BottomFull = styled(View)`
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
`

export const Center = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const Between = styled(View)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`

export const FullBox = styled(View)`
    width: 100%;
`

export const Box = styled(View)`
    width: 100%;
    border-color: rgba(0, 0, 0, 0.05);
    border-width: 1px;
    border-radius: 3px;
    padding: 15px 20px;
`

export const Line = styled(View)`
    width: 100%;
    height: 2px;
    background: rgba(0, 0, 0, 0.05);
    margin: 25px 0;
`

export const Flex = styled(View)`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const ModalContainer = styled(View)`
    width: 100%;
    background: rgba(0, 0, 0, 0.36);
    flex: 1;
    padding: 75px 25px;
`

export const ModalContent = styled(View)`
    background: #fff;
    flex: 1;
    border-radius: 10px;
    padding: 25px;
`

// Buttons


export const NoBgButton = styled(TouchableOpacity)`
    display: flex;
    flex-direction: row;
`

// TEXTS

export const Title = styled(Text)`
    font-size: 24px;
    font-weight: 700;
    color: #ED5353;
`;

export const MediumTextColor = styled(Text)`
    color: #ED5353;
    font-size: 16px;
    font-weight: 700;
`
export const MediumText = styled(Text)`
    color: #717171;
    font-size: 16px;
    font-weight: 700;
`
export const SmallText = styled(Text)`
    font-size: 14px;
    color: #ED5353;
`
export const SmallTextBold = styled(Text)`
    font-size: 14px;
    color: #ED5353;
    font-weight: 700;
`
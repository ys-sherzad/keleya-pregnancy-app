import * as React from 'react';
import { View } from 'react-native';
import { moderateScale } from '../utils/scale';

interface SpaceProps {
    size: number,
    horizontal?: boolean,
};

const Space = ({ size, horizontal = false }: SpaceProps) => {
    const horizontalStyle = {
        width: moderateScale(size)
    };
    const verticalStyle = {
        height: moderateScale(size)
    };
    return (
        <View style={horizontal ? horizontalStyle : verticalStyle} />
    );
};

export default Space;

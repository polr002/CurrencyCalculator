import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

import { ListItem, Separator } from '../components/List';
import Seperator from '../components/List/Separator';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686'
const ICON_SIZE = 23;

class Options extends Component {
    handleThemesPress = () => {
        console.log('press themes');
    }
    handleSitePress = () => {
        console.log('press sites');
    }

    render(){
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default"/>
                <ListItem 
                    text="Themes"
                    onPress={this.handleThemesPress}
                    customIcon = {
                        <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE}/>
                    }
                />
                <Separator />
                <ListItem 
                    text="Fixer.io"
                    onPress={this.handleThemesPress}
                    customIcon = {
                        <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>
                    }
                />
                <Seperator />
            </ScrollView>
        );
    }
}



export default Options;
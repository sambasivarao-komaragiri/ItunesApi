/*
 Samba Siva Rao K
 */

import React, {Component} from 'react';
import {FlatList, ActivityIndicator, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles'

export default class List extends Component<Props> {

    static navigationOptions = {
        title: 'Apps',
    };

    constructor(props) {
        super(props);
        this.state = {
            appsList: []
        }
    }


    componentDidMount() {
        this.setState({
            appsList: this.props.navigation.state.params.display_list
        })
    }


    render() {


        return (
            <View style={{flex: 1, paddingTop: 40}}>
                <FlatList
                    data={this.state.appsList}
                    renderItem={({item}) =>
                        <TouchableOpacity>
                            <View style={styles.listRow}>
                                <View style={styles.image}>
                                    <Image
                                        style={{width: 50, height: 50}}
                                        source={{uri: item.artworkUrl100}}/>
                                 </View>
                                <View style={styles.contents}>
                                    <Text style={styles.text}>{item.artistName}</Text>
                                    <Text style={styles.text}>{item.releaseDate}</Text>
                                    <Text style={styles.text}>{item.copyright}</Text>
                                </View>
                        </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }
}

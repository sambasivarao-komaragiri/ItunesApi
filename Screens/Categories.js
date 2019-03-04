/*
 Samba Siva Rao K
 */

import React,{Component} from 'react';
import { FlatList, ActivityIndicator, Text, View,TouchableOpacity,NetInfo  } from 'react-native';
import styles from './styles'

export default class Categories extends Component<Props> {

    static navigationOptions = {
        title: 'Categories',
    };

    constructor(props){
        super(props);
        this.state ={
            isLoading: true,
            categories:[],
            results: []
        }
    }

    extractCategories(resultsList){

        this.setState({
            results: resultsList
        })

        const categorySet = new Set();

        for(let i=0;i<resultsList.length;i++){
            var localGenres = resultsList[i].genres
            for(let j=0;j<localGenres.length;j++){
                console.log('=======>'+localGenres[j].name)
                categorySet.add(localGenres[j].name)
            }
        }
        this.setState({
            categories:Array.from(categorySet),
            isLoading: false
        })

    }

    componentDidMount(){
        NetInfo.isConnected.fetch().then(isConnected => {
            if(isConnected) {

                return fetch('https://rss.itunes.apple.com/api/v1/us/ios-apps/top-grossing/all/50/explicit.json')
                    .then((response) => response.json())
                    .then((responseJson) => this.extractCategories(responseJson.feed.results)
                    )
                    .catch((error) => {
                        alert('error')
                        console.error(error);
                    });
            }else{
                alert('Network issue')
            }
        });
    }

    itemClicked(catego) {

        const displayList = []

        const resultsList = this.state.results

        for (let i = 0; i < resultsList.length; i++) {
            const localGenres = resultsList[i].genres
            for (let j = 0; j < localGenres.length; j++) {
                if (localGenres[j].name == catego) {
                    displayList.push(resultsList[i])
                    break
                }
            }
        }

        console.log(displayList.length)

        this.props.navigation.push("list", {
            display_list:displayList
        })
    }



    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:40}}>
                <FlatList
                    data={this.state.categories}
                    renderItem={({item}) =>
                        <TouchableOpacity onPress={this.itemClicked.bind(this, item)}>
                            <View style={styles.listRow}>
                                <Text style={styles.text}>{item}</Text>
                            </View>
                        </TouchableOpacity>
                    }
                    keyExtractor={item => item}
                />
            </View>
        );
    }
}

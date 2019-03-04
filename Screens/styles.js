import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    row:{

    },
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor:'grey'
    },
    list: {
        flex: 3,
        backgroundColor: 'green'
    },
    other: {
        flex: 7,
        backgroundColor: 'white'
    },
    text: {
        color: 'black',
        marginBottom: 5,
        paddingLeft:10,
        fontSize:20
    },
    listRow:{
        paddingTop: 10,
        paddingBottom:10,
        borderWidth:2,
        backgroundColor:'white',
        flexDirection:'row'
    },
    lableText:{
        paddingTop: 10,
        paddingBottom:10,
        fontSize:20,
        color: 'black',
    },
    usersRow:{
        paddingTop: 10,
        paddingBottom:10,
        borderWidth:2,
        flexDirection:'row',
        backgroundColor:'white'
    },
    subtext:{
        color: 'black',
        marginBottom: 5,
        paddingLeft:10,
        fontSize:15
    },
    image:{
        flex:2
    },
    contents:{
        flex:8
    }
});

export default styles;
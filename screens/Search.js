import React, { Component } from 'react';
import { StyleSheet, View, TextInput, ActivityIndicator, Dimensions, ScrollView } from 'react-native';

// Components
import { getData } from '../utils/BotwAPI';
import Searchbutton from '../components/Searchbutton';
import Autocomplete from '../components/Combobox';
// Custom Hooks
import  colorHook  from '../utils/MyHooks';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      isLoading: false,
      message: '',
      fontLoaded: false
    };

    this.onSearchPressed = this.onSearchPressed.bind(this);
    this.onSearchPressedAll = this.onSearchPressedAll.bind(this);
  }

  onSearchPressedAll(){
    this.props.navigation.navigate('MonsterScreen');
  }
  onSearchPressed() {
    console.log(this.state.searchString)
    this.setState({ isLoading: true, message: '' });
    getData(this.state.searchString)
    .then(response => {
      this.handleResponse(response);
    })
    .catch(error => {
      this.setState({
        isLoading: false,
        message: `Error bij het ophalen van de data: ${error}`
      });
    });
  }

  handleResponse(response) {
    this.setState({ isLoading: false });
    console.log(response.data)
    if (response.data ) {
      this.props.navigation.navigate('Detail', {
        monster: response.data
      });
    } else if (response.data) {
      this.setState({ message: 'Geen huizen gevonden.' });
    } else {
      this.setState({ message: 'Ongeldige locatie opgegeven!' });
    }
  }

  handleCallback = (childData) =>{
    console.log(childData)
    this.setState({searchString: childData})
}
  render() {
    const colors = this.props.myHookValue;

    const spinner = this.state.isLoading ? (
      <View style={{ marginTop: 20 }}>
        <ActivityIndicator size="large"  />
      </View>
    ) : null;

    const {
      container,
      flowHorizontal,
      leftContainer,
      searchInput,
      rightContainer,

    } = styles;
    const { searchString, message } = this.state;

    return (
 <ScrollView>

      <View style={{container,backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight
      }}>
        <img height={windowHeight*0.5} width={windowWidth*0.6} src='https://www.pngplay.com/wp-content/uploads/11/The-Legend-Of-Zelda-Breath-Of-The-Wild-Logo-Transparent-PNG.png'></img>
        <View 
        style={{ 

          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
        <View>
        <View style={{ flex: 1 }}>
          <View style={flowHorizontal}>
            <View style={leftContainer}>
            <Autocomplete style={searchInput} parentCallback = {this.handleCallback}/>

              {/* <TextInput
                style={searchInput}
                placeholder="Geef hier een monsternaam in."
                value={searchString}
                onChangeText={text => this.setState({ searchString: text })} /> */}
            </View>
            <View style={rightContainer}>
              
              <Searchbutton onPressed={this.onSearchPressed }>Zoek</Searchbutton>
            </View>
          </View>

        </View>
      </View>
      
      
      <View style={container}>
          <View style={{ flex: 1 }}>
          <View style={flowHorizontal}>
         
              <View style={[rightContainer, flowHorizontal]}>
              <img width='50px'src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/The_Legend_of_Zelda_-_Sheikah_Symbol.svg/1692px-The_Legend_of_Zelda_-_Sheikah_Symbol.svg.png'></img>
                <Searchbutton onPressed={this.onSearchPressedAll}>Alle monsters</Searchbutton>
              </View>
            </View>

          </View>
          </View>
        </View>
        </View>

        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 65,
    alignItems: 'center',
    flex: 1
  },
  flowHorizontal: {
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 4
  },
  rightContainer: {
    flex: 1
  },
  searchInput: {
    height: 36,
    width:windowWidth*0.3,
    padding: 4,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor:'#faf7dc'
  },
  bottom: { 
    flex: 1,
    justifyContent: 'flex-end',
  }
});

export default colorHook(Search);
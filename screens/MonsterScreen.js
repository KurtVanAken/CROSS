import React , { Component } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';

// Components
import InventoryItem from '../components/InventoryItem';
import Row from '../components/Row';
import ToggleSwitch from '../components/ToggleSwitch';

// Custom Hooks
import withMyHook from '../utils/MyHooks';

class MonsterScreen extends Component {
  constructor(props) {

    super(props);
    this.state = { items: [], 
      DataisLoaded: false
    };
    
  }
  
  componentDidMount() {
    fetch('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
      .then(res => res.json())
      .then(data => {
        this.setState({items: data,
          DataisLoaded: true});
      });
    
  }
  onLearnMore = (item) => {
    console.log(item)
    this.props.navigation.navigate('Detail',{monster:item});
  };
  render() {

    // Use Themecolors from webhook - prop = colors
    const colors = this.props.myHookValue;
  
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
    <h1> 👹Please wait some time.... </h1> </div> ;
    return (
      <ScrollView>
<View style={{backgroundColor: colors.background}}>
        <View 
        style={{ 

          alignItems: 'center',
          justifyContent: 'center'
        }}
        >
         
          <ToggleSwitch></ToggleSwitch>
        
              <Row > 
                {items.data.map((item) => (
                  <View key={item.id} onMouseDown={() => this.onLearnMore(item) }
                >

                      <InventoryItem key={item.id} monster={item} />
                  </View>
                ))}
              </Row> 
           
    </View>
        </View>
        </ScrollView>
    );
      }
};

export default withMyHook(MonsterScreen);

const styles = StyleSheet.create({
    hightlight: {
     fontWeight: '700'
    }
   });

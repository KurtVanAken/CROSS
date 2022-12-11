import React, { Component }  from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Tile, ListItem } from 'react-native-elements';
import { useTheme } from '../theme/index';


class Detail extends Component {
  render() {
    // get user detail information from navigation state instead of hardcoded object
    const { image, name, description, drops} =  this.props.route.params.monster
   

    return (
      <ScrollView>
        <Tile
          imageSrc={{ uri: image }}
          featured
          title={name}
         />
        
      </ScrollView>
    );
  }
}

export default Detail;
/* eslint-disable max-len */
 import React, { Component } from 'react';
 import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import { Showable } from './Showable';

// Custom Hooks
import withMyHook from '../utils/MyHooks';

 class InventoryItem extends Component{
  
  constructor(props) {
    super(props);
    this.state = { items: [], 
      isHidden: true
    };
    this.monster = props.monster;
  }
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
  render(){
    // Use Themecolors from webhook - prop = colors
    const colors = this.props.myHookValue;
    
    const { inventoryItemStyle, 
         TriangleTopLeft, 
         TriangleTopRight, 
         TriangleBottomLeft, 
         TriangleBottomRight,
         MonsterImage 
    } = styles;

     const {
      description,
      name, image, id
    } = this.monster;
    

  return (
         <TouchableOpacity key={id}
         style={[inventoryItemStyle, { backgroundColor: colors.inventoryItemBackground }]} 
         onMouseEnter={this.toggleHidden.bind(this)}
         onMouseLeave={this.toggleHidden.bind(this)}
         ><View><img style={ MonsterImage } src={image}></img>
            
                 <Text style={{color: colors.InventoryItemText}}>
                  <Showable > 
                     {name}
                     </Showable> 
                 </Text> 
                 
              </View>   
              {!this.state.isHidden &&
                 <>
                 <View style={[TriangleTopRight, {borderBottomColor: colors.cornerTriangle}]} />
                 <View style={[TriangleTopLeft, {borderBottomColor: colors.cornerTriangle}]} />
                 <View style={[TriangleBottomLeft, {borderBottomColor: colors.cornerTriangle}]} />
                 <View style={[TriangleBottomRight, {borderBottomColor: colors.cornerTriangle}]} />
                 </>
                }
         </TouchableOpacity>

   );}
 };

 export default withMyHook(InventoryItem);

 const styles = StyleSheet.create({
    
   
     inventoryItemStyle: {
        flex: '1 0 21%',
         marginTop: 40, 
         marginLeft: 40,
         borderRadius: 2,
         position: 'relative',
         textAlign: 'center',
         justifyContent: 'center',
         border: '1px solid rgba(255, 255, 255, 0.05)', 
       },
       textStyle: {
        
       },
       TriangleTopRight: {
 
         width: 0,
         height: 0,
         borderLeftWidth: 8,
         borderRightWidth: 8,
         borderBottomWidth: 8,
         borderStyle: 'solid',
         backgroundColor: 'transparent',
         borderLeftColor: 'transparent',
         borderRightColor: 'transparent',
         position: 'absolute',
         top: -4,
         right: -8,
         transform: 'rotate(45deg)'
       },
       TriangleTopLeft: {
 
         width: 0,
         height: 0,
         borderLeftWidth: 8,
         borderRightWidth: 8,
         borderBottomWidth: 8,
         borderStyle: 'solid',
         backgroundColor: 'transparent',
         borderLeftColor: 'transparent',
         borderRightColor: 'transparent',
         position: 'absolute',
         top: -4,
         left: -8,
         transform: 'rotate(-45deg)'
       },
       TriangleBottomRight: {
 
         width: 0,
         height: 0,
         borderLeftWidth: 8,
         borderRightWidth: 8,
         borderBottomWidth: 8,
         borderStyle: 'solid',
         backgroundColor: 'transparent',
         borderLeftColor: 'transparent',
         borderRightColor: 'transparent',
         position: 'absolute',
         bottom: -4,
         right: -8,
         transform: 'rotate(135deg)'
       },
       TriangleBottomLeft: {
 
         width: 0,
         height: 0,
         borderLeftWidth: 8,
         borderRightWidth: 8,
         borderBottomWidth: 8,
         borderStyle: 'solid',
         backgroundColor: 'transparent',
         borderLeftColor: 'transparent',
         borderRightColor: 'transparent',
         position: 'absolute',
         bottom: -4,
         left: -8,
         transform: 'rotate(-135deg)'
       },
       MonsterImage:{
        flex: 1,
        width: '100%',
        height: '70%',
        resizeMode: 'contain'
       }
     });


 


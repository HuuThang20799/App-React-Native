import React, {Component} from 'react';
import { render } from 'react-dom';
//import { Icon } from 'react-native-vector-icons/icon';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text , StyleSheet, Button, ScrollView,FlatList,Image,TouchableOpacity,PickerBox, Alert, TextInput,SafeAreaView,Platform} from 'react-native';

var result;
var i=0;


function Home({navigation,route}){
  class  Datahome extends Component{
    //lay du lieu
    constructor(props){
      super(props);
      this.state={
        data:[]
      }
    }
  
    componentDidMount(){
        var dataInput = new FormData();
        window.idAccount=route.params.idAccount;
        window.username=route.params.username;
        dataInput.append('txtGV_ID',idAccount);
        //console.log(idAccount);
        result=fetch("http://192.168.1.7/SystemAptech/DiemDanhSV/API_DiemDanh/API_ShowClass.php",{
          method: 'POST',
          headers: { 
            //'Content-Type': 'application/json'
          },
          body: dataInput
        })
        .then((response) => response.json())
        .then((json) => {this.setState({data:json.recordset})}) 
        .catch((error)=> console.log(error));
    }
    
    //hien thi
    render(){
      const {data}= this.state;
      const name_Account=window.username;
      return(

          <View  style={{ textAlign:'right',backgroundColor: 'white',alignItems: 'center',justifyContent: 'center',color:'black',padding:20}}>
            <TouchableOpacity onPress={()=> navigation.navigate('Login Page')} style={{borderColor:'red',borderWidth:6,flexDirection:'row',justifyContent:'center',marginLeft: "auto"}}>
                <FontAwesome name="user-circle" size={24} color="black" /><Text style={{textAlign:'right',fontSize:19,fontWeight:'bold'}}>User: 
                <Text style={{color:'red'}}>{name_Account}</Text> </Text>
              </TouchableOpacity>
            <Text style={{fontSize:45, color:'dodgerblue',fontWeight:'bold'}}>DANH SÁCH LỚP  </Text>
              
            <FlatList  style={{ flex:1,paddingBottom: 600,paddingTop:20,width:'100%'}}
              data={data}
              renderItem={({item}) =>(          
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',borderColor:'aqua',borderWidth:4,borderBottomWidth:2}}>
                  <View style={{flex:1,alignItems:'center'}}>
                    <Image source={require('./picture/iconClass1.jpg')} style={{width:100,height:100}}></Image>
                  </View>
                  <View style={{flex:2,alignItems:'center',borderColor:'aqua',borderWidth:4,borderBottomWidth:0,borderTopWidth:0,borderRightWidth:0,height:'100%',width:'100%'}}>         
                      <TouchableOpacity  onPress={()=> navigation.navigate('Lesson List Page',{NHOM_ID: item.NHOM_ID,LOP_ID: item.LOP_ID})}>
                          <View style={{alignItems:'center',backgroundColor:'orange'}}>
                            <Text style={{fontWeight:'bold',fontSize:28}}>{item.LOP_ID}</Text>                                   
                          </View>
                          <View style={{}}>
                            <Text style={{fontWeight:'bold',fontSize:21,textAlign:'center'}}>{item.MH_TEN}</Text>
                          </View>
                      </TouchableOpacity>
                  </View>            
                </View>        
              )}
              keyExtractor = {item => item. LOP_ID} 
            /> 
            
          </View>
      );
    }
  }
  return(
      <View style={{backgroundColor:'#fff'}}>
        <Image source={require("./picture/Aptech.png")} style={{width:'95%',height:80}}></Image> 
        <Datahome/>
      </View>
  )
}

// var _onPress = (input) => {
    
//     //navigation.navigate('TableAttend',{ID_LOP: input})
// };

// const Home1= ({navigation,route}) =>{
//   navigation.navigate('TableAttend')
// }
// const Home= ({navigation,route}) =>{
//     window.idAccount=route.params.idAccount;
//     return(
//         <View>
//             <Datahome />
//             <Button title="Change Screen" onPress={ ()=> navigation.navigate('TableAttend') } />
//         </View>
//     );
// }
export default Home;

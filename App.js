import React, {useState} from 'react'
import { SafeAreaView, Switch, Text, FlatList } from 'react-native';

const data = [
  {id: 0, name: "aaaa", isFavorite: true},
  {id: 1, name: "bbbb", isFavorite: false},
  {id: 2, name: "cccc", isFavorite: true},
  {id: 3, name: "dddd", isFavorite: false},
  {id: 4, name: "ffff", isFavorite: false},
  {id: 5, name: "eeee", isFavorite: false},
  {id: 6, name: "gggg", isFavorite: true},

]




function App() {
  
  const [goster, setGoster] = useState(data);
  const [acik, setAcik] = useState(false);
  
  function onAcikDegis(BasilipDegisirse){
    setAcik(BasilipDegisirse)
    BasilipDegisirse
    ? setGoster(goster.filter(cafe => cafe.isFavorite)) 
    : setGoster(data) 

  }

  return (
    <SafeAreaView>
      <Switch style={{marginTop:30, marginRight:330}} value={acik} onValueChange={onAcikDegis} />
      <FlatList data={goster} style={{marginLeft:23}} renderItem={({item})=> <Text>{item.name}</Text>} />
    </SafeAreaView>
  )
}

export default App

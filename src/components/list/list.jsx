
import './list.scss'
import {listData} from"../../lib/dummyData"
import Card from '../../components/navbar/cards/card'
function List(){
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default List

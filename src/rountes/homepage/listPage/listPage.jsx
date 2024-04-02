import Map from "../../../components/map/Map";
import Card from "../../../components/navbar/cards/card";
import Filter from "../../../components/navbar/filter/filter";
import { listData } from "../../../lib/dummyData";
import "./listPage.scss";
function ListPage() {
  const data = listData;
  return (
    <>
      <div className="listPage">
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            {data.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="mapContianer">
          <Map items={data}/>
        </div>
      </div>
    </>
  );
}
export default ListPage;

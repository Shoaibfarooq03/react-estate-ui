import SearchBar from "../../components/navbar/searchBar/searchBar";
import "./homePage.scss";
function HomePage() {
  return (
    <>
      <div className="homepage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">
              Get Your Dream Land here to live your dreams with your loved ones
              and enjoy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              autem eligendi sed quam deleniti reprehenderit tenetur, nobis
              enim, temporibus aspernatur cum quis blanditiis delectus nesciunt
              explicabo consequuntur, voluptates molestiae saepe?
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
              </div>

              <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
              </div>

              <div className="box">
                <h1>200+</h1>
                <h2>Property Sold</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="imgContainer">
          <img src="/bg.png" alt="" />
        </div>
      </div>
    </>
  );
}
export default HomePage;

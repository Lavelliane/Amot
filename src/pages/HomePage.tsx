import Header from "../components/Header";
import Cards from "../components/Cards";
import Bottom from "../components/Bottom";
import Wrapper from "../wrappers/HomepageWrapper";

function Homepage() {
  return (
    <Wrapper>
      <div className="App">
        <Header />
        <div className="card-container">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
        <Bottom />
      </div>
    </Wrapper>
  )
}

export default Homepage;

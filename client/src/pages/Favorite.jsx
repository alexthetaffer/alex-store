import styled from "styled-components";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 100px;
  min-height: 70vh;
`;

const Products = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Title = styled.h1`
  margin: 20px;
  margin-bottom: 0;
  font-weight: 600;
`;

const Favorite = () => {
  const favorite = useSelector((state) => state.favorite.products);

  return (
    <div>
      <Header />
      <Container>
        <Title>Favorite</Title>
        <Products>
          {favorite.map((item) => (
            <Product
              isFav={
                favorite.filter((product) => product._id === item._id)
                  .length !== 0
                  ? true
                  : false
              }
              item={item}
              key={item._id}
            />
          ))}
        </Products>
      </Container>
      <Footer />
    </div>
  );
};

export default Favorite;

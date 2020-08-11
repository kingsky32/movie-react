import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import { Helmet } from "react-helmet";
import GlobalStyles from "../styles/GlobalStyles";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Header from "./Header";
import RouteContainer from "./RouteContainer";
import MovieDetail from "../routes/MovieDetail";
import Search from "../routes/Search";
import "../styles/fonts.css";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 166rem;
  margin: 0 auto;
  font-size: 1.2rem;
`;

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <GlobalStyles />
      <Router>
        <Header />
        <Wrapper>
          <Route path="/" exact render={() => <RouteContainer component={<Home />} />} />
          <Route path="/movies/movie/:movieCd" exact component={MovieDetail} />
          <Route path="/search" component={Search} />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;

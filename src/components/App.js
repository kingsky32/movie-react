import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import { Helmet } from "react-helmet";
import GlobalStyles from "../styles/GlobalStyles";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Movies from "../routes/Movies";
import Ticket from "../routes/Ticket";
import Theaters from "../routes/Theaters";
import Header from "./Header";
import Event from "../routes/Event";

const Wrapper = styled.div`display: flex;`;

const App = props => {
  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <GlobalStyles />
      <Router>
        <Header />
        <Wrapper>
          <Route path="/" exact component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/theaters" component={Theaters} />
          <Route path="/event" component={Event} />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;

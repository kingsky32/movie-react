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
import RouteContainer from "./RouteContainer";

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
          <Route path="/" exact render={() => <RouteContainer component={<Home />} />} />
          <Route
            path="/movies"
            render={() => <RouteContainer title="Movies" component={<Movies />} />}
          />
          <Route
            path="/ticket"
            render={() => <RouteContainer title="Ticket" component={<Ticket />} />}
          />
          <Route
            path="/theaters"
            render={() => <RouteContainer title="Theaters" component={<Theaters />} />}
          />
          <Route
            path="/event"
            render={() => <RouteContainer title="Event" component={<Event />} />}
          />
        </Wrapper>
      </Router>
    </ThemeProvider>
  );
};

export default App;

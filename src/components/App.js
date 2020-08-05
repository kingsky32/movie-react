import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Theme from "../styles/Theme";
import { Helmet } from "react-helmet";
import GlobalStyles from "../styles/GlobalStyles";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "../routes/Home";
import Axios from "axios";
import { connect } from "react-redux";
import { setMovie } from "../stores/store";
const API_KEY = "0a692913bfb07ea3dd1bc75bd46dc55e";
const END_POINT =
  "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json";
const TARGET_DATE = "20120101";
const App = props => {
  const getData = async () => {
    try {
      const { data } = await Axios.get(`${END_POINT}?key=${API_KEY}&targetDt=${TARGET_DATE}`);
      setMovie(data);
      console.log(props);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  });

  return (
    <ThemeProvider theme={Theme}>
      <Helmet>
        <title>Movies</title>
      </Helmet>
      <GlobalStyles />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  return { movies: state };
};

const mapDispatchToProps = dispatch => {
  return {
    setMovie: data => dispatch(setMovie(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

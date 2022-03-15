import React from "react";
import { Route, Switch } from "react-router-dom";
import  Main  from "../pages/main/Main"
import  ArticleList  from '../pages/ArticleList';
import  Article  from '../pages/Article';

function Routes() {
  return (
    <div>
      <Switch>
          <Route path={"/"} exact component={Main} /> 
          <Route path={"/ArticleList"} exact component={ArticleList} /> 
          <Route path={"/Article/:articleId"} exact component={Article} />
          <Route path={"*"} component={Main} /> 
      </Switch>
    </div>
  )
};
export default Routes;

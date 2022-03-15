import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Article from "./Article";
import ArticleList from "./ArticleList";

function Board() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">
            <span>Main</span>
          </Link>
        </li>
        <li>
          <Link to="/Article/2">
            <span>board1</span>
          </Link>
        </li>
        <li>
          <Link to="/ArticleList">
            <span>board2</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Board;

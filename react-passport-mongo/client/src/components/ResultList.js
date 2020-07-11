import React from "react";
import Card from "@material-ui/core/Card";

function ResultList(props) {
  return (
    <Card className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id}>
          <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        </li>
      ))}
    </Card>
  );
}

export default ResultList;
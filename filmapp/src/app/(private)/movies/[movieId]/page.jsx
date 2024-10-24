import React from "react";

const MovieDetail = ({ params }) => {
  const { movieId } = params;
  console.log(movieId);
  return <div>MovieDetail</div>;
};

export default MovieDetail;

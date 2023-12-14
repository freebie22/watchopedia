import { useState } from "react";

const AddMovie = (props) => {
  const [name, setName] = useState("");

  function submitAddMovieForm(e) {
    e.preventDefault();
    props.handleAddMovieToList(name);
    setName("");
  }

  return (
    <form name="movieForm" onSubmit={(e) => submitAddMovieForm(e)}>
      <div className="row text-white">
        <div className="col-12 text-center py-1 h4 text-success">Add Movie</div>
        <div className="col-8 offset-1">
          <input
            className="form-control"
            name="movieName"
            type="text"
            placeholder="Movie Name..."
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-2">
          <button className="btn btn-success form-control">Add</button>
        </div>
        <hr className="mt-3" />
      </div>
    </form>
  );
};
export default AddMovie;

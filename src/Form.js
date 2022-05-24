import "./styles.css";

export default function Form() {
  return (
    <div>
      <form id="search-city">
        <input type="search" id="user-city" placeholder="Search City" />
        <input
          id="submit-city"
          type="submit"
          value="Search"
          className="btn btn-light"
        />
      </form>
    </div>
  );
}

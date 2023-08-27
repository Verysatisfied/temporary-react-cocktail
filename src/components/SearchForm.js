import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const seachValue = React.useRef("");

  React.useEffect(() => {
    seachValue.current.focus();
  }, []);
  const searchCocktail = () => {
    setSearchTerm(seachValue.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section seach">
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={seachValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

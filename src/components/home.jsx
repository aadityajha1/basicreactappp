import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Users from "./users";

const Home = () => {
  const [name, setName] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const updateName = (name) => {
    setName(name);
  };

  const handleSumbit = () => {
    updateName(nameInput);
    setIsClicked(true);
  };

  useEffect(() => {
    console.log("Im changed.");
  }, [name]);
  return (
    <>
      {isClicked && <Users name={name} />}
      <input
        type="text"
        name="name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button type="submit" onClick={handleSumbit}>
        Submit
      </button>

      <Link to={"/products"}>
        <button>Go to Products Page</button>
      </Link>
    </>
  );
};

export default Home;

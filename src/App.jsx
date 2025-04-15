import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  let [username, setUsername] = useState("");
  let [inputdebounce, setInputdebounce] = useState("");
  const is = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hank",
    "Ivy",
    "Jack",
    "Karen",
    "Leo",
    "Mia",
    "Nathan",
    "Olivia",
    "Paul",
    "Quinn",
    "Rachel",
    "Steve",
    "Tina",
    "Umar",
    "Vera",
    "Will",
    "Xander",
    "Yara",
    "Zane",
    "Aaron",
    "Bella",
    "Cody",
    "Diana",
    "Ethan",
    "Fiona",
    "George",
    "Holly",
    "Isaac",
    "Jasmine",
    "Kyle",
    "Luna",
    "Mason",
    "Nina",
    "Oscar",
    "Penny",
    "Quincy",
    "Rose",
    "Sam",
    "Tessa",
    "Ulysses",
    "Violet",
    "Wade",
    "Xenia",
    "Yusuf",
    "Zelda",
    "Adrian",
    "Bianca",
    "Caleb",
    "Daphne",
    "Elijah",
    "Freya",
    "Gavin",
    "Hailey",
    "Ian",
    "Jade",
    "Kevin",
    "Laura",
    "Miles",
    "Noah",
    "Ophelia",
    "Peter",
    "Queenie",
    "Ron",
    "Sophia",
    "Travis",
    "Uma",
    "Victor",
    "Wendy",
    "Ximena",
    "Yvonne",
    "Zack",
    "Amelia",
    "Brandon",
    "Cassie",
    "Derek",
    "Erin",
    "Felix",
    "Gloria",
    "Harvey",
    "Iris",
    "Jason",
    "Kara",
    "Liam",
    "Madeline",
    "rishabh",
    "Owen",
    "Paige",
    "Quinton",
    "Riley",
    "Sawyer",
    "Talia",
    "Uriah",
    "Vanessa",
  ];
  let [users, setUsers] = useState(is);
  let [filtereduser, setFiltereduser] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setInputdebounce(username);
    }, [1000]);
  }, [username]);
  useEffect(() => {
    let mynewusers = users.filter((item) => {
      if (username !== "") {
        return item.includes(username);
      }
    });
    setFiltereduser(mynewusers);
  }, [inputdebounce]);

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {filtereduser.map((item) => {
        return <div>{item}</div>;
      })}
    </>
  );
}

export default App;

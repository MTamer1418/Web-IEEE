import React from 'react';
// Import Components
import Tweet from "./components/Tweet"
import CreateTweet from "./components/CreateTweet"

function App() {
  const name= "Mohamed";
  return (
    <div className="App">
      <h1>Hello React</h1>
      <CreateTweet />
      <Tweet name={name} messsage={"This is a message"} />
    </div>
  );
}

export default App;

import {
  Button,
  FormControl,
  Input,
  InputLabel,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Message from "./components/Message";
import db from "./firebase/firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import { IconButton } from "@material-ui/core";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

const useStyles = makeStyles({
  app__form: {
    position: "fixed",
    bottom: 0,
    left: 0,
    margin: "1rem",
    padding: "1rem",
    zIndex: 1,
    width: "80%",
    backgroundColor: "#e9e9eb",
    borderRadius: "5px",
  },
  app__formControl: {
    display: "flex",
    flexDirection: "row",
  },
  app__input: {
    flex: 1,
  },
  app__iconButton: {
    flex: 0,
  },
});

function App() {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setUsername(prompt("Enter your NAME"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h2>Welcome to "iMessanger" app </h2>
      <form className={classes.app__form}>
        <FormControl className={classes.app__formControl}>
          <Input
            className={classes.app__input}
            placeholder="Enter message here..."
            value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
          <IconButton
            className={classes.app__iconButton}
            color="primary"
            variant="contained"
            type="submit"
            disabled={!input}
            onClick={sendMessage}
          >
            <SendOutlinedIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ data, id }) => (
          <Message key={id} username={username} message={data} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;

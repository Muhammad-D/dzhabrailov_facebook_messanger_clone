import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const useStyles = makeStyles({
  message__userCard: {
    backgroundColor: "rgb(105, 176, 231)",
  },
  message__guestCard: {
    backgroundColor: "rgb(234, 236, 238)",
  },
  message__cardContent: {
    padding: "24px",
  },
});

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = message.username === username;
  const classes = useStyles();

  return (
    <div ref={ref} className={`message ${isUser && "message__card"}`}>
      <Card
        className={
          isUser ? classes.message__userCard : classes.message__guestCard
        }
      >
        <CardContent className={classes.message__cardContent}>
          <div>
            <div className="message__avtorName">
              {!isUser && `${message.username || "Unknown user"}: `}
            </div>
            <div className="message__text">{message.message}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;

import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  textContainer: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  text: {
    verticalAlign: "super",
    color: theme.palette.secondary.main,
  },
}));

export default function Loading({ text = "Loading" }) {
  const classes = useStyles();
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, 300);

    return () => window.clearInterval(id);
  }, [text]);

  return (
    <div className="container">
      <Typography variant="h5" className={classes.textContainer}>
        <CircularProgress /> <span className={classes.text}> {content} </span>
      </Typography>
    </div>
  );
}

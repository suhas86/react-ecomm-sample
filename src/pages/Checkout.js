import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import CartContext from "../context/cart";

import UserForm from "../components/UserForm";
import ShippingForm from "../components/ShippingForm";
import ConfirmDetails from "../components/ConfirmDetails";
import PlaceOrder from "../components/PlaceOrder";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonContainer: {
    textAlign: "center",
    marginTop: theme.spacing(6),
  },
}));

function getSteps() {
  return ["Enter personal details", "Shipping Address", "Confirm details", "Place order"];
}
function getStepContent(step, handleChange, state) {
  switch (step) {
    case 0:
      return <UserForm handleChange={handleChange} state={state} />;
    case 1:
      return <ShippingForm handleChange={handleChange} state={state} />;
    case 2:
      return <ConfirmDetails state={state} />;
    case 3:
      return <PlaceOrder />;
    default:
      return "Unknown step";
  }
}
function checkoutReducer(state, action) {
  if (action.type === "changed") {
    return {
      ...state,
      [action.key]: action.value,
    };
  }
}
export default function Checkout() {
  const history = useHistory();
  const cart = React.useContext(CartContext);
  const [state, dispatch] = React.useReducer(checkoutReducer, {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    pincode: "",
  });
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      cart.clearAll();
      history.push("/");
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleChange = ({ name, value }) => {
    dispatch({ type: "changed", key: name, value });
  };
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep, handleChange, state)}
            <div className={classes.buttonContainer}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button variant="contained" color="primary" size="large" onClick={handleNext} className={classes.button}>
                {activeStep === steps.length - 1 ? "Place order" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
export default function ShippingForm({ state, handleChange }) {
  const { address, city, pincode } = state;
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Address"
            id="address"
            value={address}
            variant="outlined"
            multiline
            rows={4}
            size="small"
            onChange={(e) => handleChange({ name: "address", value: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="City"
            id="city"
            value={city}
            variant="outlined"
            size="small"
            onChange={(e) => handleChange({ name: "city", value: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Pincode"
            id="pincode"
            value={pincode}
            variant="outlined"
            size="small"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => handleChange({ name: "pincode", value: e.target.value })}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

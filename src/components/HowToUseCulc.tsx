import { Grid } from '@mui/material'


export default function DeletePayButton(prop: any) {
  let style = {
    // backgroundColor: "gray",
    color: "primary",
    margin: 0,
    padding: 3,
  };

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column">
      <Grid item>
        <h4 style={style}>Step1</h4>
      </Grid>
      <Grid item>
        <img src="/images/creategroup.png" width={350} />
      </Grid>
      <Grid item>
        <h4 style={style}>Step2</h4>
      </Grid>
      <Grid item>
        <img src="/images/top.png" width={350} />
      </Grid>
      <Grid item>
        <h4 style={style}>Step3</h4>
      </Grid>
      <Grid item>
        <img src="/images/addpay.png" width={350} />
      </Grid>
      
    </Grid>


  );
}
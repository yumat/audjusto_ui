import React from 'react';
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material'
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';

import usePageTracking from "../components/usePageTracking"

import ButtonAppBar from "../components/ButtonAppBar";
import MoveCreateGroupPageButton from "../components/MoveCreateGroupPageButton";


const Home: React.FC = () => {
  let style = {
    // backgroundColor: "gray",
    // color: "#FFF",
    margin: 0,
    padding: 3,
  };
  usePageTracking();
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
        {/* <Typography> */}
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <Grid item>
            <h3 style={style}>割り勘の計算結果と清算方法を自動提供</h3>
          </Grid>
          <Grid item>
            <img src="/images/title.png" width={350} />
          </Grid>
          <Grid item>
            {/* <img src="/images/transaction.png" width={350} /> */}
          </Grid>
          <Grid item>
            <MoveCreateGroupPageButton />
          </Grid>
          <Grid item>
            <h3 style={style}>Audjustoの機能</h3>
          </Grid>
          <Grid item>
            <h4 style={style}>割り勘計算の自動化</h4>
          </Grid>
          <Grid item>
            Audjustoは参加数で正確に割り勘を計算し、<br />瞬時に結果を提供します。<br />
          </Grid>
          <Grid item>
            <h4 style={style}>簡単なインターフェース</h4>
          </Grid>
          <Grid item>
            会員登録不要で利用できます。<br />
            Audjustoのシンプルなインターフェースでは<br />
            手間のかかる操作が一切不要です。<br />
          </Grid>
        </Grid>
        {/* <MoveCreateGroupPageButton /> */}
      </Box>
    </>
  )
}

export default Home;




import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material'

import usePageTracking from "../components/usePageTracking"

import ButtonAppBar from "../components/ButtonAppBar";
import MoveCreateGroupPageButton from "../components/MoveCreateGroupPageButton";
import MoveCreateScheduleGroupPageButton from '../components/MoveCreateScheduleGroupPageButton';


const Home: React.FC = () => {
  let style = {
    // backgroundColor: "gray",
    // color: "#FFF",
    margin: 0,
    padding: 0,
  };
  usePageTracking();
  return (
    <>
      <ButtonAppBar />
      <Box component="main" sx={{ p: 1 }}>
        <Toolbar />
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <Grid item>
            <h3 style={style}>日程調整と割り勘計算結果の共有</h3>
          </Grid>
          <Grid item>
            <img src="/images/title.png" width={350} />
          </Grid>
          {/* <Grid item>
            <img src="/images/all.png" width={400} />
          </Grid> */}
          <Grid item>
            <MoveCreateScheduleGroupPageButton /><MoveCreateGroupPageButton />
          </Grid>
          <Grid item>
            <h3 style={style}>Audjustoの2大機能</h3>
          </Grid>
          <Grid item>
            <h6 style={style}>以下2機能を単体での利用はもちろん連携した利用も可能です。</h6>
          </Grid>
        </Grid>
      </Box>
      <Box component="main" sx={{ p: 1, backgroundColor: 'lightgreen', border: '5px solid white', borderRadius: '20px' }}>
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <Grid item>
            <h3 style={style}>スケジュール調整ツール</h3>
          </Grid>
          <Grid item>
            Audjustoは出欠状況を入力することで<br />イベントの日程調整をできます。<br />
          </Grid>
          <Grid item>
            <img src="/images/schedule.png" width={250} />
          </Grid>
        </Grid>
      </Box>
      <Box component="main" sx={{ p: 1, backgroundColor: 'lightblue', border: '5px solid white', borderRadius: '20px' }}>
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <Grid item>
            <h3 style={style}>割り勘計算の自動化</h3>
          </Grid>
          <Grid item>
            Audjustoは参加者で正確に割り勘を計算し、<br />瞬時に結果を提供します。<br />
          </Grid>
          <Grid item>
            <img src="/images/transaction.png" width={250} />
          </Grid>
        </Grid>
      </Box>

      <Box component="main" sx={{ p: 1 }}>
        <Grid container justifyContent="center" alignItems="center" direction="column">
          <Grid item>
            <h3 style={style}>Audjustoの特徴</h3>
          </Grid>
          <Grid item>
            <h3 style={style}>日程調整から割り勘計算まで</h3>
          </Grid>
          <Grid item>
            イベントの日程調整から割り勘計算まで<br />シームレスに行います。<br />
            もちろん日程調整、割り勘計算の別々での<br />利用も可能です。
          </Grid>
          <Grid item>
            <h4 style={style}>簡単なインターフェース</h4>
          </Grid>
          <Grid item>
            会員登録不要で利用できます。<br />
            シンプルなインターフェースで<br />
            手間のかかる操作が一切不要です。<br />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Home;
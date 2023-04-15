import React from "react";
import { useMemo, useState } from "react";
import classes from "../Css/State.module.css";
import DownloadForOfflineSharpIcon from "@mui/icons-material/DownloadForOfflineSharp";
import RefreshSharpIcon from "@mui/icons-material/RefreshSharp";
import SyncAltSharpIcon from "@mui/icons-material/SyncAltSharp";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import LoopRoundedIcon from "@mui/icons-material/LoopRounded";
function Statecomponent(props) {
   
  //const [churnrate,setChurnrate] =  useState(0)
  const totalinstall = props.sendingdata.map((item) => {
    return item.totalinstall;
  });
  const totaluninstall = props.sendingdata.map((item) => {
    return item.totaluninstall;
  });

  // console.log(props.sendingdata[0].totalinstall,'from state component')

  //  maping.reduce((initial,after)=>{
  //                console.log(initial + after)
  //   })
  let baginstall = 0;
  let baguninstall = 0;

  for (let i = 0; i < totalinstall.length; i++) {
    baginstall = baginstall + totalinstall[i];
    baguninstall = baguninstall + totaluninstall[i];
  }
  const activeinstall = baginstall - baguninstall;

  let churnrate = (
    activeinstall * 100 != 0 ? (activeinstall * 100) / baginstall : 0
  ).toFixed(2);

  return (
    <div className={classes.State}>
      <div className={classes.topstate}>
        <span className={classes.svg}>
          <span>
            <DownloadForOfflineSharpIcon />
          </span>
          <span className={classes.inside}>
            <p>{baginstall}</p>
            <p>App Installed</p>
          </span>
        </span>
        {/* ************ */}
        <span className={classes.svg}>
          <span>
            <RefreshSharpIcon />
          </span>
          <span className={classes.inside}>
            <p>{activeinstall}</p>
            <p>Active Installs</p>
          </span>
        </span>
        {/* ************************/}
        <span className={classes.svg}>
          <span>
            <SyncAltSharpIcon />
          </span>
          <span className={classes.inside}>
            <p>{churnrate}%</p>
            <p>Churn Rate</p>
          </span>
        </span>
      </div>
      <div className={classes.topstate}>
        {/* ************************ */}
        <span className={classes.svg}>
          <span>
            <SportsBasketballIcon />
          </span>

          <span className={classes.inside}>
            <p>{baguninstall}</p>
            <p>App Un-Installed</p>
          </span>
        </span>
        {/* ************************ */}
        <span className={classes.svg}>
          <span>
            <CheckBoxRoundedIcon />
          </span>
          <span className={classes.inside}>
            <p>5</p>
            <p>Alive Apps users</p>
          </span>
        </span>
        {/*   ************************ */}
        <span className={classes.svg}>
          <span>
            <LoopRoundedIcon />
          </span>
          <span className={classes.inside}>
            <p>0.00%</p>
            <p>Alive Churn Rate</p>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Statecomponent;

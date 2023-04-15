import React, { useMemo } from "react";
import classes from "../Css/Datapage.module.css";
import "../Css/Pagination.css";
import moment from "moment";
import axios from "axios";
import { useEffect, useState } from "react";
import AdbIcon from "@mui/icons-material/Adb";
import AppleIcon from "@mui/icons-material/Apple";
import { DateRangePicker } from "react-date-range";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";

import { DateRange } from "react-date-range";
function DataPage(props) {
  const [calenderstate, setCalenderState] = useState(null);
  const [data, setData] = useState([]);
  const [alldata, setAlldata] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [todosperpage, settodosperpage] = useState(50);
  const [currentpage, setcurrentPage] = useState(1);
  const numofTotalPages = Math.ceil(data.length / todosperpage);
  const pages = [...Array(numofTotalPages + 1).keys()].slice(1);

  const indexofLastTodo = currentpage * todosperpage;
  const indexofFirstTodo = indexofLastTodo - todosperpage;

  const visibleTodos = data.slice(indexofFirstTodo, indexofLastTodo);
  useEffect(() => {
    const datasendHandler = () => {
      props.statadata(data);
    };
    datasendHandler();
  });

  const calenderCloseHandler = () => {
    setCalenderState(true);
  };

  useEffect(() => {
    axios
      .get(
        "https://admindevapi.wowtalent.live/api/admin/dashboard/installstatasticlist?fromdate=2022-04-01&todate=2022-08-24&page=1&limit=10"
      )
      .then((res) => {
        setData(res.data.data.data);
        setAlldata(res.data.data.data);
      });
  }, []);
  /**********Pagination**************** */
  const prevPageHandler = () => {
    if (currentpage !== 1) setcurrentPage(currentpage - 1);
  };

  const nextPageHandler = () => {
    if (currentpage !== numofTotalPages) setcurrentPage(currentpage + 1);
  };
   

  /*******date range******** */
  const handleSelect = (date) => {
    let filtered = alldata.filter((product) => {
      //let productDate = new Date(product['createdAt']);
      //     let productDate =  moment(product.created_At).utc().format("DD-MM-YYYY").toLocaleString()
      //  let currentdate = moment(date.selection.startDate).utc().format("DD-MM-YYYY").toLocaleString()

      //  let lastdata = moment(date.selection.endDate).utc().format("DD-MM-YYYY").toLocaleString()

      // let productDate = new Date(product.created_At ).toLocaleString()
      // let currentdate = new Date(date.selection.startDate ).toLocaleString()
      // let lastdata = new Date(date.selection.endDate).toLocaleString()
      //  console.log(productDate,'productdate inside handleset')
      //  console.log(currentdate ,'currentdateinside hansleset' )
      //  console.log(lastdata ,'lastdata inside handleset')
      //  console.log(date.selection.startDate,'startdate inside handleset')
      //  console.log(date.selection.endDate,'enddate  inside handleset')
      const productDate = new Date(product.created_At);
      const currentdate = date.selection.startDate;
      const lastdata = date.selection.endDate;
      console.log(
        productDate.getFullYear(),
        productDate.getMonth(),
        productDate.getDate(),
        "productdate inside handleset"
      );
      console.log(
        date.selection.startDate.getFullYear(),
        date.selection.startDate.getMonth(),
        date.selection.startDate.getDate()
      );
      console.log(
        date.selection.endDate.getFullYear(),
        date.selection.endDate.getMonth(),
        date.selection.endDate.getDate()
      );
      // return (
      //   productDate >= currentdate   && productDate <= lastdata
      // )

      let year =
        productDate.getFullYear() >= currentdate.getFullYear() &&
        productDate.getFullYear() <= lastdata.getFullYear();
      let month =
        productDate.getMonth() >= currentdate.getMonth() &&
        productDate.getMonth() <= lastdata.getMonth();
      let dateclen =
        productDate.getDate() >= currentdate.getDate() &&
        productDate.getDate() <= lastdata.getDate();
      return    (year && month && dateclen );
    });

    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setData(filtered);
    console.log(filtered, "filtered");
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  /*********Monthmanange*************/
    const monthname =  visibleTodos.map((item)=>{
     let x =  new Date(
        item.created_At
      ).getMonth()
      return x
    })
    
    let month ;
    let monthnumber;
    for(let  i of monthname){
     monthnumber= i
    }
   
    switch(monthnumber){
      case 0:month= 'Jan';
      break;
      case 1:month= 'Feb';
      break;
      case 2:month= 'March';
      break;
      case 3:month= 'April';
      break;
      case 4:month=' May';
      break;
      case 5:month= 'June';
      break;
      case 6:month= 'July';
      break;
      case 7:month= 'Aug';
      break;
      case 8:month= 'Sep';
      break;
      case 9:month= 'Oct';
      break;
      case 10:month=' Nov';
      break;
      case 11:month= 'Dec';
      break;
       default: ;
       

    }
    console.log(month)

  return (
    <div className={classes.data}>
      <div className={classes.show}>
        <div>
          <span>
            <label>Show</label>
            <select
              className={classes.selectentries}
              onChange={(e) => settodosperpage(e.target.value)}
            >
              <option value="2">2</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option Value="50" selected>
                50
              </option>
              <option value="100">100</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </select>
            <label>Entries</label>
          </span>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              marginRight: "25px",
              padding: "8px",
              fontWeight: "bold",
              paddingRight: "120px",
              paddingLeft: "15px",
            }}
            onClick={calenderCloseHandler}
          >
            Select Duration
          </label>
          {calenderstate && (
            <span className={classes.daterange}>
              <section onClick={() => setCalenderState(false)}>
                Select Duration
                <CalendarMonthTwoToneIcon />
              </section>
              <DateRange
                ranges={[selectionRange]}
                onChange={handleSelect}
                rangeColors={["rgb(255, 123, 0)"]}
                className={"celender"}
              />
            </span>
          )}
        </div>
      </div>

      <div className={classes.detailbar}>
        <div>
          <span>Date</span>
          <span>Day Installs</span>
          <span>Plateform</span>
          <span>Day Unistalls</span>
          <span>Plateform</span>
          <span>Churn Rate</span>
          <span style={{ marginRight: "0px" }}>Churn Plateform</span>
        </div>
      </div>
      {/* **************** */}

      {visibleTodos.map((item) => (
        <li style={{ listStyle: "none" }}>
          <div className={classes.map}>
            <span>
              {` ${new Date(item.created_At).getDate()} ${month} ${new Date(item.created_At).getFullYear()} `}
              {/* {new Date(item.created_At ).toLocaleString()} */}
            </span>
            <span>{item.totalinstall}</span>
            <span className={classes.android} style={{ marginLeft: "36px" }}>
              <small>
                <div>
                  {" "}
                  <AdbIcon />
                  {item.android_install}
                </div>
                <div>
                  <AppleIcon />
                  {item.ios_install}
                </div>
              </small>{" "}
            </span>

            <span style={{ marginLeft: "50px", marginRight: "50px" }}>
              {item.totaluninstall}
            </span>
            <span
              className={classes.android}
              style={{ marginLeft: "50px", marginRight: "50px" }}
            >
              <small>
                <div>
                  <AdbIcon />
                  {item.android_uninstall}
                </div>
                <div>
                  {" "}
                  <AppleIcon />
                  {item.ios_uninstall}
                </div>{" "}
              </small>
            </span>
            <span style={{ marginLeft: "20px", marginRight: "50px" }}>
              {item.totalchurn}{" "}
            </span>

            <span className={classes.android} style={{ marginLeft: "30px" }}>
              <small>
                {" "}
                <div>
                  {" "}
                  <AdbIcon />
                  {item.android_churn}
                </div>
                <div>
                  {" "}
                  <AppleIcon />
                  {item.ios_churn}{" "}
                </div>{" "}
              </small>
            </span>
          </div>
        </li>
      ))}

      {/*}   <div> 
  <table >
  <span className="head"> 
    <thead  >
        <tr  >
            <th className="p-3">Date</th>
            <th className="p-3 
    ">Day Installs</th>
            <th className="p-3">Plateform</th>
            <th className="p-3">Day Unistalls</th>
            <th className="p-3">Plateform</th>
            <th className="p-3">Churn Rate</th>
            <th className="p-3">Churn Plateform</th>
        </tr>

    </thead>
    </span>
    <tbody>
    {visibleTodos.map((item) => (
<tr   >
            <td>{moment(item.created_At).utc().format("DD-MM-YYYY")}{" "}</td>
            <td>{item.totalinstall}</td>
            <td > <div><AdbIcon />
                  {item.android_install}  </div><div><AppleIcon />
                  {item.ios_install}</div></td>
            <td>{item.totaluninstall}</td>
            <td   > <div><AdbIcon />
              {item.android_uninstall}
              </div>
              
              <div><AppleIcon />
              {item.ios_uninstall}</div></td>
            <td>{item.totalchurn}</td>
            <td  >  <div><AdbIcon />
              {item.android_churn}</div> 
              
              <div><AppleIcon />
              {item.ios_churn}</div></td>

        </tr>

    ))}
        
    </tbody>
</table>
       </div>   */}
      <div className={classes.outerPagination}>
        <div className={classes.pagination}>
          {" "}
          <span onClick={prevPageHandler}>
            <NavigateBeforeRoundedIcon />
          </span>
          <p>
            {pages.map((page) => (
              <span
                key={page}
                onClick={() => setcurrentPage(page)}
                className={`${currentpage === page ? "active" : ""}`}
              >{`${page} `}</span>
            ))}
          </p>
          <span onClick={nextPageHandler}>
            <NavigateNextRoundedIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default DataPage;

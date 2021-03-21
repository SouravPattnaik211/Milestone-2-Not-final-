// import React, {useState} from 'react'
// import axios from 'axios'
// import {CircularProgress, TableBody, TableCell, TableHead, TableRow, Checkbox} from '@material-ui/core'
// import InfiniteScroll from 'react-infinite-scroll-component'
// import { pxToRem, pxToVw, pxToVh } from '../utils/theme.js'

// export default function App() 
// {
//   let [isNext, isNextFunc] = React.useState(false)
//   let [pageCount, setCount] = React.useState(1)
//   const url = `http://localhost:8080/Summer_Internship_Backend/Fetch`
//   const [responseData, setResponseData] = useState([])
//   const loadMoreData = () => {
//     setCount(pageCount + 1);
// };
// console.log(pageCount);
// React.useEffect( () => {
// axios
// .get(url)
// .then((response) => {
//     setResponseData([...responseData, ...response.data]);
//     isNextFunc(true)
// })
// .catch((error) => {
//     console.log(error)
// })
// },[pageCount]);
// console.log("After axios " ,pageCount);

// return (
// <div id="scrollableDiv" style={{overflowY: `scroll`, display:`flex`, height: `70vh`, width:`100vw`, overflowX: 'none'}}>
// <InfiniteScroll
//         dataLength={responseData.length}
//         next={loadMoreData}
//         hasMore={isNext}
//         loader={
//             <div
//             style={{height: '80%', paddingLeft: '35%', overflow: 'hidden'}}
//             >
//             <CircularProgress />
//             </div>
//         }
//         scrollableTarget="scrollableDiv"
//         >
//     <TableHead>
//         <TableRow>
//             <TableCell>
//             <Checkbox
//               value="checkedA"
//               color="primary"
//               inputProps={{ 'aria-label': 'Checkbox A' }}
//             />
//             </TableCell>
//             <TableCell>
//               Customer Name
//             </TableCell>
//             <TableCell>
//               Customer#
//             </TableCell>
//             <TableCell>
//               Invoice#
//             </TableCell>
//             <TableCell>
//               Invoice Amount
//             </TableCell>
//             <TableCell>
//               Due Date
//             </TableCell>
//             <TableCell>
//               Predicted Payment Date
//             </TableCell>
//             <TableCell align='right'>
//               Predicted Aging Bucket
//             </TableCell>
//             <TableCell align='right'>
//               Notes
//             </TableCell>
//         </TableRow>
//     </TableHead>
//     <TableBody>
// {responseData.map((response)=>(
//   <TableRow>
//     <TableCell>
//     <Checkbox
//       value="checkedA"
//       color="primary"
//       inputProps={{ 'aria-label': 'Checkbox A' }}
//     />
//     </TableCell>
//     <TableCell>
//         {response.name_customer}
//     </TableCell>
//     <TableCell>
//         {response.cust_number}
//     </TableCell>
//     <TableCell>
//         {response.doc_id}
//     </TableCell>
//     <TableCell>
//         {response.total_open_amount}
//     </TableCell>
//     <TableCell>
//         {response.due_in_date}
//     </TableCell>
//     <TableCell>
//         {'--'}
//     </TableCell>
//     <TableCell>
//         {'--'}
//     </TableCell>
//     <TableCell align="right">
//         {response.due_in_date}
//     </TableCell>
//   </TableRow>
// ))}

//   </TableBody>
//     </InfiniteScroll>
//   </div>
// )
// }

import React, {useState} from 'react'
import axios from 'axios'
import {CircularProgress, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import InfiniteScroll from 'react-infinite-scroll-component'
import Checkbox from "@material-ui/core/Checkbox";
import {pxToRem, pxToVw ,  pxToVh} from "../utils/theme";
import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
Checkbox: {
    color:'white', 
    height: pxToRem(16),
    width: pxToRem(16),
},
HeadCells: {
    color: "#97A1A9",
    backgroundColor: "#2D424F",
    height : pxToRem(20),
    fontSize : pxToRem(18),
    transform: 'Titlecase'

},
CheckboxTableCell : {
    minWidth:2,
    backgroundColor:"#2D424F", 
    height:"2.5vh"
},
TableCell: {
    color: "#FFFFFF",
    fontFamily: "'Ubuntu', sans-serif",
    fontSize: "calc(0.75vh + 0.75vw)",

}
}))

export default function App() {
let [isNext, isNextFunc] = React.useState(false)
let [pageCount, setCount] = React.useState(1)
const url = `http://localhost:8080/Summer_Internship_Backend/Fetch`
const [responseData, setResponseData] = useState([])

const loadMoreData = () => 
{
    setCount(pageCount + 1);
};

console.log(pageCount);
React.useEffect( () => 
{
axios
.get(url)
.then((response) => {
    setResponseData([...responseData, ...response.data]);
    isNextFunc(true)
})
.catch((error) => {
    console.log(error)
})
},[pageCount]);
console.log("After axios " ,pageCount);

const classes = useStyles();

return (
<div id="scrollableDiv" style={{overflow: `scroll`, display:`flex`, height: `100vh`, width:`100vw`}}>
<InfiniteScroll
        dataLength={responseData.length}
        next={loadMoreData}
        hasMore={isNext}
        loader={
            <div
            style={{height: '80%', paddingLeft: '35%', overflow: 'hidden'}}
            >
            <CircularProgress />
            </div>
        }
        scrollableTarget="scrollableDiv"
        >
            <TableHead>
          <TableRow  > 
           <TableCell className = {classes.CheckboxTableCell}>
                            <Checkbox className={classes.Checkbox} color='default' style={{color:'white', height:"2.5vh"}}/>
                        </TableCell>
             <TableCell className = {classes.HeadCells} style={{ minWidth: pxToVw(135)}}
             id="name_customer"> Customer Name</TableCell>
            <TableCell className = {classes.HeadCells} align="left" style={{ minWidth: pxToVw(135)}}
            id="cust_number" >  Customer #</TableCell>
            <TableCell className = {classes.HeadCells} align="left" style={{ minWidth: pxToVw(95)}}
            id="invoice_id">Invoice #</TableCell>
            <TableCell className = {classes.HeadCells} align="left" style={{ minWidth: pxToVw(95)}}
            id="total_open_amount">Invoice Amount</TableCell>
            <TableCell  className = {classes.HeadCells} align="left" style={{ minWidth: pxToVw(120)}}
            id="due_in_date">Due Date</TableCell>
            <TableCell className = {classes.HeadCells} align="left"style={{ minWidth: pxToVw(141)}}
             id="payment_date">Predicted Payment Date</TableCell>
            <TableCell className = {classes.HeadCells} align="left" style={{ minWidth: pxToVw(148)}}
            id="aging_bucket">Predicted Aging Bucket</TableCell>
            <TableCell  className = {classes.HeadCells} align="left" style={{ minWidth: pxToVw(197)}}
            id="notes">Notes</TableCell>
          </TableRow>
        </TableHead>
    
    <TableBody>
{responseData.map((response,index)=>(
<TableRow  style ={ index % 2? { background : "#2F4451" }:{ background : "#283A46" } } >
<TableCell style ={ index % 2? { backgroundColor : "#2F4451" }:{ backgroundColor : "#283A46" }}>
                                <Checkbox color='default' className = {classes.Checkbox}style={{color:"white", height:"0.8vh"}}/>
                            </TableCell>
                            <TableCell className={classes.TableCell}>{response.name_customer}</TableCell>
                            <TableCell className={classes.TableCell}>{response.cust_number}</TableCell>
                            <TableCell className={classes.TableCell}>{response.doc_id }</TableCell>
                            <TableCell className={classes.TableCell}>{response.total_open_amount}</TableCell>
                            <TableCell className={classes.TableCell}>{response.due_in_date}</TableCell>
                            <TableCell className={classes.TableCell} style={{textAlign:"right"}}>--</TableCell>
                            <TableCell className={classes.TableCell} style={{textAlign:"left"}}>--</TableCell>
                            <TableCell className={classes.TableCell}>Lorem Ipsum dolor..</TableCell>
    
</TableRow>
                ))}
        </TableBody>
        </InfiniteScroll>
    </div>
)
}
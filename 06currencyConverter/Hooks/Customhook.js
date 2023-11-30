import { useState , useEffect } from "react";

    function currencyInfo(currency) {
        const [data , setData] = useState({})

        useEffect(() =>{
            fetch ( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((a) => a.json())
            .then((b) => setData(b[currency]))
            },[currency]);
            console.log(data)
            return data;
    };

    export default currencyInfo;
 /**function useState()
  * return {
  * var,
  * fun
  *
  * }
  * var fectedData =f()
  * var jsonData = fectedData.json()
  * setData(jsondata[currency])
  * function logging(item){
  * return item*2;
  * }==
  *  (item)=> item*2;
  * 
  * consol(logging(5)) 
  * 
  * for(){
  * item
  * 
  * }
  * itemsId = arr.map((items)=> items.id)
  * var lessthanfive = arr.filter((item)=>item.value <5)
  * arr.reduce()
  * 
  * function filter(fn){
  * var temop;
  *   * for(i=0; i<arr.lngth; i++){
  * if(fn(arr[i]){
  * temp.pus()?)
  * }
  * }
  * return temp
  * }
  * 
  * 
  */
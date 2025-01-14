import React,{useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

function NasaData() {

const [nasaInfo, setNasaInfo] = useState([]);

useEffect(() => {
axios
.get(`https://api.nasa.gov/planetary/apod?api_key=QByWJ6afgWZCdKjOQOtC8QM5nEleB5SG3gdupwej&date=2020-04-20`)
.then(res => {
    console.log("Res data : ", res);
    setNasaInfo(res.data);

})

.catch(err => {
    console.log("Err msg : ", err);
});
}, []);

return (
    <div className = "dataContainer"> 
    <NasaCard data ={nasaInfo} />
    </div>
)
}

export default NasaData;
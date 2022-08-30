import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { useDispatch } from "react-redux";
import TYPES from "../redux/types";

const Home = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state);

    useEffect(() => {
        getData();
      }, []);

    const getData = () => {
        axios
          .get("https://reqres.in/api/users?page=2")
          .then((res) => {
            dispatch({
                type: TYPES.FETCH_DATA,
                payload: res.data,
            })
          })
          .catch((err) => console.log(err));
    }

    console.log("Reducer", data);

    return (
        <div>
            <h1>Test</h1>
        </div>
    )
}

export default Home;
import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../redux/actions/dataAction";

const Home = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state);

    useEffect(() => {
        dispatch(getData);
      }, []);

    return (
        <div>
            <h1>Test</h1>
            {
                data.data.map(item => (
                    <div>
                        <h1>{item.first_name}</h1>
                        <img src = {item.avatar} />
                    </div>
                ))
            }
        </div>
    )
}

export default Home;
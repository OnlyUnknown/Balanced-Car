import '../styling/Carinfo.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { showItem } from '../features/show/showActions';
import Navigation from './Nav';
import Spinner from './Spinner';
/* eslint-disable */

const Carinfo = () => {
  const { item, loading, success } = useSelector((state) => state.show);
  const dispatch = useDispatch();
  let { cid } = useParams();

  useEffect(() => {
    const classname = "car";
    const id = cid;
    dispatch(showItem({ classname, id }));
  }, [dispatch, cid]);

  // Function to convert and parse the tires_age string
  const parseTiresAge = (tiresAgeString) => {
    if (!tiresAgeString) return {};

    // Convert the string to a valid JSON format
    let stringData = tiresAgeString.replace(/=>/g, ':').replace(/"(\w+)"\s*:\s*"/g, '"$1": "');

    // Parse the string into a JavaScript object
    let dataObject;
    try {
      dataObject = JSON.parse(stringData);
    } catch (e) {
      console.error('Invalid JSON format', e);
      return {};
    }
    return dataObject;
  };

  // Parse the tires_age string into an object
  const tiresAge = item?.tires_age ? parseTiresAge(item.tires_age) : {};

  return (
    <>
      <Navigation />
      {success === true ? (
        <div className="border">
          <div className="carpic">Car pic</div>
          <div className="carinfo">
          <div>Id: {item.id}</div>
            <div>Name: {item.name}</div>
            <div>
              Tires age:
              <ul>
                <li>Right Front: {tiresAge.tirerf}</li>
                <li>Left Front: {tiresAge.tirelf}</li>
                <li>Right Back: {tiresAge.tirerb}</li>
                <li>Left Back: {tiresAge.tirelb}</li>
              </ul>
            </div>
            <div>Oil Milage: {item.oil_milage}</div>
            <div>Transmission Milage: {item.transmission_milage}</div>
            <div>Milage: {item.milage}</div>
            <div>Note: {item.note}</div>
            <div>Modle: {item.model}</div>
            <div>Car Type {item.car_type}</div>
            <div>Transmission Type: {item.transmission_type}</div>
            <div>Is it for bidding: {item.for_bidding.toString()}</div>
            <div>Last bid: {item.last_bid}</div>
            <div>Buy Limit: {item.buy_limit}</div>
            <div>Is it commercial: {item.commercial.toString()}</div>
            <div>Is it public?: {item.public.toString()}</div>
            <div>Chassis Number: {item.chassis_number}</div>
          </div>
        </div>
      ) : (
        loading === true ? (
          <Spinner/>
        ) : (
          <div>empty</div>
        )
      )}
    </>
  );
};

export default Carinfo;

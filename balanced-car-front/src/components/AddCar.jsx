import '../styling/AddCar.scss';
import Navigation from './Nav';

const AddCar = () => (
  <>
    <Navigation />
    <div className="signup">
      <h3 className="title">Add a car</h3>
      <div className="shadow-box">
        <div className="car_box_pic">
          Pic
        </div>
        <div className="info_box">
          <input placeholder="Car Name" />
          <input placeholder="Car type" />
          <input placeholder="Tansition type" />
          <input placeholder="Model" />
          <input placeholder="Transition Kilos" />
          <input placeholder="Milage" />
          <input placeholder="Auto Milage" />
          <div className="tires">
            <input placeholder="Tire age 1" />
            <input placeholder="Tire age 2" />
            <input placeholder="Tire age 3" />
            <input placeholder="Tire age 4" />
          </div>
          <input placeholder="Oil Milage" />
          <input placeholder="Last price" />
          <textarea placeholder="Note" />
        </div>
      </div>
    </div>
  </>
);

export default AddCar;

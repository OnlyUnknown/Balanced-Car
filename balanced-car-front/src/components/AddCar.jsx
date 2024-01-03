import '../styling/AddCar.scss';

const AddCar = () => (
  <div className="signup">
    <h3 className="title">Add a car</h3>
    <div className="shadow-box">
      <input placeholder="Car Name" />
      <input placeholder="Tansition type" />
      <input placeholder="Model" />
      <input placeholder="Transition Kilos" />
      <input placeholder="Milage" />
      <input placeholder="Auto Milage" />
      <div className="tires">
        <input placeholder="Tires age 1" />
        <input placeholder="Tires age 2" />
        <input placeholder="Tires age 3" />
        <input placeholder="Tires age 4" />
      </div>
      <input placeholder="Oil Milage" />
      <textarea placeholder="Note" />
    </div>
  </div>

);

export default AddCar;

import creditCardImg from "../assets/credit-card.png";
import visa from "../assets/visa.png";
const CheckoutPage = () => {
  return (
    <div className="checkout container mx-auto flex max-w-4xl  flex-col bg-gray-300 pt-5 text-gray-700 text-gray-700 sm:flex-row">
      <div className="payment flex w-full flex-col gap-5 p-10 sm:w-[50%]">
        <form className="space-y-3">
          <h2>Billing Detail</h2>
          <div>
            <label htmlFor="Name">
              Name
              <input
                className="p-2"
                placeholder="Enter Your Name..."
                type="text"
                name="Name"
                id="Name"
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              Email
              <input
                className="p-2"
                placeholder="enter Your Email..."
                type="text"
                name="email"
                id="email"
              />
            </label>
          </div>
          <div>
            <label htmlFor="car">
              Country
              <select
                className="h-10 w-full cursor-pointer"
                name="car"
                id="car"
              >
                <option value="United State">United State</option>
                <option value="Canada">Canada</option>
                <option value="Uk">Uk</option>
              </select>
            </label>
          </div>
          <div className="addres-detail flex gap-2">
            <label htmlFor="">
              State/Country
              <input className="p-2" type="text" />
            </label>
            <label htmlFor="">
              Zip/Postal Code
              <input className="p-2" type="text" />
            </label>
          </div>
          <h2>Payment Method</h2>
          <div className="credit-card flex items-center justify-between whitespace-nowrap border-2 border-blue-500 p-2 ring-2">
            <label className="flex items-center gap-2" htmlFor="creditCard">
              <input
                className=""
                type="radio"
                name="creditCard"
                id="creditCard"
              />
              Credit Card
            </label>
            <img className="w-full w-[150px]" src={creditCardImg} alt="card" />
          </div>
          <div className="relative">
            <label htmlFor="cardNum">
              Card number
              <input
                className="p-2"
                placeholder="4322 4567 123 9891"
                type="text"
                id="cardNum"
                name="cardNum"
              />
              <img
                className="absolute top-[40px] right-2 w-[35px]"
                src={visa}
                alt=""
              />
            </label>
          </div>
          <div className="form-row flex items-center gap-3">
            <label className="inline w-[70%]">
              Expiration Date <br />
              <select className=" mr-2 w-[50%] p-2" type="text">
                <option value="Month">Month</option>
                <option value="">date</option>
                <option value="">date</option>
              </select>
              <select className="w-[40%] p-2" type="text">
                <option value="Year">Year</option>
                <option value="date">date</option>
                <option value="date">date</option>
              </select>
            </label>
            <label className="w-[30%] whitespace-nowrap " htmlFor="">
              Security code <br />
              <input className="p-2" type="num" placeholder="Three digits" />
            </label>
          </div>
        </form>
      </div>
      <div className="cart-summary w-[50%]">col2</div>
    </div>
  );
};

export default CheckoutPage;

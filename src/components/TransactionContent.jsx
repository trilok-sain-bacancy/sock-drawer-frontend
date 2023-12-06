import TransactionBox from "./TransactionBox";
import dollarIcon from '../assets/images/Dollar-Square.svg';
import gIcon from "../assets/images/G-icon.svg";

const TransactionContent = ({ buttonText }) => {
    return (
      <>
        <div className="box p-3  mt-4 mb-3 d-flex align-items-center">
          {/* Content for Spending */}
          <TransactionBox label="Spend" value="15.00-20000.00" image={dollarIcon} currency="USD" />
        </div>
        <div className="box p-3  mt-4 mb-3 d-flex align-items-center">
          {/* Content for Receiving */}
          <TransactionBox label="Receive" value="0000.00" image={gIcon} currency="GRN" />
        </div>
        <button className="btn verify_btn w-100 p-2 p-lg-2 fw-bold text-white mt-3" type="submit">{buttonText}</button>
      </>
    );
  };

export default TransactionContent;
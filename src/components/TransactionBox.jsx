const TransactionBox = ({ label, value, image, currency }) => {
    return (
      <>
      <div>
        <label htmlFor="" className="mb-2">
          {label}
        </label>
        <p className="text2 mb-0">
          {value}
        </p>
        </div>
        <div className="ms-auto py-2 px-3 bg-white border d-flex border_round  ">
          <img src={image} className="img-fluid" alt="Currency" />
          <p className="mb-0 ms-2">{currency}</p>
        </div>
        </>
    );
  };

  export default TransactionBox;
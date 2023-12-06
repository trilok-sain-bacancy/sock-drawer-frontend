import TransactionContent from "./TransactionContent";

const BuySellTab = () => {
    return (
      
        <div className="col-xl-6">
          <div className="box_inner_child">
            <ul className="nav nav-tabs p-2" id="myTab" role="tablist">
              <li className="nav-item text-center" role="presentation">
                <button className="nav-link active w-100" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Buy GRN</button>
              </li>
              <li className="nav-item text-center" role="presentation">
                <button className="nav-link w-100" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Sell GRN</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              {/* Content for Buy GRN Tab */}
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <TransactionContent buttonText="Verify & Buy" />
              </div>
              {/* Content for Sell GRN Tab */}
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <TransactionContent buttonText="Verify & Sell" />
              </div>
            </div>
          </div>
        </div>
        
    );
  };

  export default BuySellTab
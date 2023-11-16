import "./style.scss";

document.querySelector("#app").innerHTML = `
  <div>  
    <div class="form">
      <h1>Travel Reservation form</h1>
      <p class="mandotory"> *denotes mandotory</p>
      <div class="field">
        <input type="text" name="" required="">
        <label>Full Name*</label>
      </div>
      <div class="field">
        <input type="text" name="" required="">
        <label>Email Address*</label>
      </div>
      <div class="custom-select">
        <select>
          <option value="">GOA</option>
          <option value="">One Way</option>
        </select>
    </div>
    <div class ="field date">
      <label for="fname">Arrival Date*:</label><br>
      <input type="date" id="fname" placeholder="MM/DD/YYYY">
    </div>
    <div class="container">
      <h2>Wahat would you want to avail*:</h2>
        <ul>
          <li>
            <input type="radio" id="f-option" name="selector">
            <label for="f-option">Boarding</label>    
            <div class="check"></div>
          </li>
          <li>
            <input type="radio" id="s-option" name="selector">
            <label for="s-option">Fooding</label>
            <div class="check"><div class="inside"></div></div>
          </li>
          <li>
            <input type="radio" id="t-option" name="selector">
            <label for="t-option">Sight Seeing</label>    
            <div class="check"><div class="inside"></div></div>
          </li>
        </ul>
    </div>
    <div class="field discount">
      <input type="text" name="" required="">
      <label>Discount Code</label>
    </div>
    <div class="termsAndConditions">
      <label class ="tLabel">I agree to the Terms and Conditions*. </label>
      <div class="btn-switch">
        <input type="radio" id="yes" name="switch" class="btn-switch__radio btn-switch__radio_yes" />
        <input type="radio" checked id="no" name="switch" class="btn-switch__radio btn-switch__radio_no" />		
        <label for="yes" class="btn-switch__label btn-switch__label_yes"><span class="btn-switch__txt">Yes</span></label>								  
        <label for="no" class="btn-switch__label btn-switch__label_no"><span class="btn-switch__txt">No</span></label>							
      </div>
    </div>
    <div class="card">
      <button id="counter" type="button">Complete Rreservation</button>
      </div>
    </div>
  </div>
`;

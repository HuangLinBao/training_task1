import "./style.css";

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
      <div class="select">
        <details class="custom-select">
          <summary class="radios">
            <input type="radio" name="item" id="default" title="Select Touring Package" checked>
            <input type="radio" name="item" id="item1" title="Item 1">
            <input type="radio" name="item" id="item2" title="Item 2">
          </summary>
        <ul class="list">
          <li>
            <label for="item1">
              Item 1
              <span></span>
            </label>
          </li>
          <li>
          <label for="item2">Item 2</label>
          </li>
        </ul>
      </details>
    </div>
      <div class ="field date">
        <label for="fname">Arrival Date*:</label><br>
        <input type="date" id="fname" placeholder="MM/DD/YYYY"><br><br>
      </div>
      <div class="avail_rb">
      <label for="fname">What would you want to avail*:</label><br>
      <input type="radio" id="boarding" name="avail" value="boarding">
        <label for="boarding">Boarding</label><br>
        <input type="radio" id="fooding" name="avail" value="fooding">
        <label for="fooding">Fooding</label><br>
        <input type="radio" id="sightSeeing" name="avail" value="sightSeeing">
        <label for="sightSeeing">Sight seeing</label>
      </div>
      <div class="field">
        <input type="text" name="" required="">
        <label>Discount Code</label>
      </div>
      <div class="card">
        <button id="counter" type="button">Complete Rreservation</button>
      </div>
    </div>
  </div>
`;

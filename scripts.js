`Feature: Whole Number Divider
As a user
I want to be able to 
divide two numbers and get a whole number result.

Scenario: Dividing two numbers
Given I have entered <dividend> and <divider>
Then I should get <result> as a whole number.

 Examples:
  | dividend | divider | result |
  | ---      | ---     | ---    |
  | 20       | 10      | 2      |
  | 20       | 3       | 6      |

  Scenario: Dividing by zero
  Given I have entered 0 and <divider>
  Then I should get an error message. 
  "Unable to divide by zero" 
  
  Scenario: Invalid Input
  Given I have entered <dividend> and <divider>
  When <dividend> and <dividend> is not a number
  Then I should get an error message.
  "Please enter a valid number." `;

  
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  const  resultValue = Math.trunc(dividend / divider);

  if (dividend === "" || divider === "") {
    result.innerText = "Division not performed. Both values are required in inputs. Try again.";
    return; 
  };

  if (isNaN(dividend) || isNaN(divider)) {

    document.body.innerHTML = "";
    document.body.style.backgroundColor = "Grey";
    const crashText = document.createElement("p");
    crashText.innerText = "Something critical went wrong. Please reload the page.";
    crashText.style.color = "Black";
    crashText.style.fontSize = "24px";
    crashText.style.textAlign = "center";
    crashText.style.position = "absolute";
    crashText.style.top = "50%";
    crashText.style.width = "100%";
    document.body.appendChild(crashText);
    debugger;
    throw new Error("Please enter a valid number."); 
    
  };

  if (divider === 0) {
  result.innerText = "Division not performed. Invalid number provided. Try again";
  console.log("Invalid Division."), new Error("Unable to divide by zero.");
  return;
  };

    result.innerText = resultValue;
  });
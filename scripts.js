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
  when <dividend> and <dividend> is not a number
  Then I should get an error message.
  "Please enter a valid number." `;

  
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

Given: (step) => {};
When: (step) => {};
Then: (step) => {};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;
});
/* on form submit: 
  - gather all employee data
  - add that data to the emp. list
  - re-run the monthly cost calculation
  - display the new monthly cost calculation
*/

const employeeTableBody = document.getElementById("employee-table-body");
const employeeForm = document.forms.addEmployeeForm;
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const idInput = document.getElementById('employee-id');
const titleInput = document.getElementById('title');
const annualSalaryInput = document.getElementById('annual-salary');


const addEmployee = e => {

}

employeeForm.addEventListener('submit', addEmployee);



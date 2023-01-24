/* on form submit: 

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
const monthlyCost = document.getElementById('monthly-cost')

let annualSalaryTotal = 0;

const formatSalary = (salary) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });
    return formatter.format(salary);
}

const calculateMonthlyCost = () => {
    const cost = Math.round(annualSalaryTotal / 12);
    monthlyCost.innerText = formatSalary(cost);
    if (cost > 20000) {
        alert('The monthly salary cost exceeds $20,000.');
    }
}

const addEmployee = e => {
    e.preventDefault();
    const employee = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        employeeId: idInput.value,
        title: titleInput.value,
        annualSalary: annualSalaryInput.value
    };

    const newRow = employeeTableBody.insertRow();
    newRow.innerHTML = `
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.employeeId}</td>
    <td>${employee.title}</td>
    <td>${formatSalary(employee.annualSalary)}</td>
    <td><button >Delete</button></td>
    `

    annualSalaryTotal += employee.annualSalary;


    calculateMonthlyCost();

    // How to get the delete button to delete that specific employee?
}
employeeForm.addEventListener('submit', addEmployee);



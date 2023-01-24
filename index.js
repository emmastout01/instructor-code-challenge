const employeeForm = document.forms.addEmployeeForm;
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const idInput = document.getElementById('employee-id');
const titleInput = document.getElementById('title');
const annualSalaryInput = document.getElementById('annual-salary');
const employeeTableBody = document.getElementById("employee-table-body");
const monthlyCostDisplay = document.getElementById('monthly-cost');
const totalCostWarning = document.getElementById('total-cost-warning');

let annualSalaryTotal = 0;

const formatSalary = salary => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });
    return formatter.format(salary);
}

const calculateMonthlyCost = () => {
    const monthlyCost = Math.round(annualSalaryTotal / 12);
    monthlyCostDisplay.innerText = formatSalary(monthlyCost);
    if (monthlyCost > 20000) {
        const alertMessage = 'Warning: The monthly salary cost exceeds $20,000.'
        alert(alertMessage);
        totalCostWarning.innerText = alertMessage;
    }
}

const deleteEmployee = (employeeRow, salary) => {
    employeeRow.remove();
    annualSalaryTotal -= salary;
    calculateMonthlyCost();
}

const clearInputFields = () => {
    firstNameInput.value = '';
    lastNameInput.value = '';
    idInput.value = '';
    titleInput.value = '';
    annualSalaryInput.value = '';
}

const addEmployee = e => {
    e.preventDefault();

    const employee = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        employeeId: idInput.value,
        title: titleInput.value,
        annualSalary: parseInt(annualSalaryInput.value)
    };

    // Create a new row and add employee data to the row
    const newRow = employeeTableBody.insertRow();
    newRow.innerHTML = `
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.employeeId}</td>
    <td>${employee.title}</td>
    <td>${formatSalary(employee.annualSalary)}</td>
    `;

    // Create a delete button and add it to the new row
    const newCell = newRow.insertCell();
    const deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.className = "button";
    deleteButton.value = "Delete";
    deleteButton.addEventListener('click', () => deleteEmployee(newRow, employee.annualSalary));
    newCell.appendChild(deleteButton);

    // Add employee salary to cost total and calculate a new monthly cost
    annualSalaryTotal += employee.annualSalary;
    calculateMonthlyCost();

    // Clear input fields
    clearInputFields();
}

employeeForm.addEventListener('submit', addEmployee);
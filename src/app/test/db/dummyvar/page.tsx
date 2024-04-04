import { createEmployee, createLineManager, createUser } from "@/db/create";

// Function to create an employee with pay tickets
function createRanEmployee(
  email: string,
  firstName: string,
  lastName: string,
  userStatus: "employee" | "lineManager" | "admin"
): Employee {
  const userDetails: User = {
    email: email,
    firstName: firstName,
    lastName: lastName,
    userStatus: userStatus,
  };

  createUser(userDetails);

  const lineManager: User = {
    email: "line.manager@example.com",
    firstName: "Line",
    lastName: "Manager",
    userStatus: "lineManager",
  };

  const payTickets: PayTicket[] = [];

  // Create eight pay tickets for the employee
  for (let i = 0; i < 12; i++) {
    const amount = Math.floor(Math.random() * 1000) + 1; // Random amount between 1 and 1000
    const currency = "USD"; // Assuming currency is USD
    const dateMade = new Date(); // Current date
    const status =
      Math.random() < 0.33
        ? "accepted"
        : Math.random() < 0.66
        ? "rejected"
        : "pending"; // Randomly assign status

    const aTicket: PayTicket = {
      amount: amount,
      currency: currency,
      dateMade: dateMade,
      status: status,
    };

    payTickets.push(aTicket);
  }
  const anEmployee: Employee = { userDetails, lineManager, payTickets };
  createEmployee(anEmployee);
  return anEmployee;
}

// Create three employees
const employee1 = createRanEmployee(
  "Rotichmax@outlook.com",
  "Maxwell",
  "Rotich",
  "employee"
);
const employee2 = createRanEmployee(
  "employee2@example.com",
  "Jane",
  "Smith",
  "employee"
);
const employee3 = createRanEmployee(
  "employee3@example.com",
  "Alice",
  "Johnson",
  "employee"
);

// Create a line manager for all three employees
const lineManager: LineManager = {
  userDetails: {
    email: "line.manager@example.com",
    firstName: "Line",
    lastName: "Manager",
    userStatus: "lineManager",
  },
  employees: [employee1, employee2, employee3],
  payTickets: [],
};

createLineManager(lineManager);

// Output the created data
console.log("Employee 1:", employee1);
console.log("Employee 2:", employee2);
console.log("Employee 3:", employee3);
console.log("Line Manager:", lineManager);
console.log("works");

export default function Home() {
  return <h1>Works Inshallah</h1>;
}

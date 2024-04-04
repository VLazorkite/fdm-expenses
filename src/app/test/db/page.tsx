import { createEmployee, createLineManager, createUser } from "@/db/create";

// Sample PayTickets
const payTickets: PayTicket[] = [
  { amount: 100, currency: "USD", dateMade: new Date(), status: "accepted" },
  {
    amount: 200,
    currency: "USD",
    dateMade: new Date(),
    status: "pending",
    response: "Waiting for approval",
  },
  {
    amount: 150,
    currency: "USD",
    dateMade: new Date(),
    status: "rejected",
    response: "Not enough funds",
  },
];

// Sample Users
const user1: User = {
  email: "user1@example.com",
  firstName: "John",
  lastName: "Doe",
  userStatus: "employee",
};
const user2: User = {
  email: "user2@example.com",
  firstName: "Jane",
  lastName: "Smith",
  userStatus: "lineManager",
};
const user3: User = {
  email: "user3@example.com",
  firstName: "Alice",
  lastName: "Johnson",
  userStatus: "admin",
};

// Sample Employees
const employee1: Employee = {
  userDetails: user1,
  lineManager: user2,
  payTickets: payTickets.slice(0, 2),
};
const employee2: Employee = {
  userDetails: user2,
  lineManager: user2,
  payTickets: payTickets.slice(1, 3),
};

// Sample Line Managers
const lineManager1: LineManager = {
  userDetails: user2,
  employees: [employee1],
  payTickets: payTickets.slice(0, 1),
};
const lineManager2: LineManager = {
  userDetails: user3,
  employees: [employee2],
  payTickets: payTickets.slice(1, 2),
};

createUser(user1);
createUser(user2);
createUser(user3);

createEmployee(employee1);
createEmployee(employee2);

createLineManager(lineManager1);
createLineManager(lineManager2);

export default async function Db() {
  return (
    <>
      <h1>If it works</h1>
    </>
  );
}

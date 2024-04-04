interface PayTicket {
  amount: number;
  currency: string;
  dateMade: date;
  status: "accepted" | "rejected" | "pending";
  response?: string;
}
interface User {
  email: string;
  firstName: string;
  lastName: string;
  userStatus: "employee" | "lineManager" | "admin";
}

interface Employee {
  userDetails: User;
  lineManager: User;
  payTickets: PayTicket[];
}

interface LineManager {
  userDetails: User;
  employees: Employee[];
  payTickets: PayTicket[];
}

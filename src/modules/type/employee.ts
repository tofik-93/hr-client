export interface Employee {
  id: number;          // DB Primary Key
  employeeId: string;  // BKG-001 (System Generated)
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  jobRole: string;     // From FR-HR-03
  status: 'Active' | 'Inactive';
}
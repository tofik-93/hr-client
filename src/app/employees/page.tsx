import EmployeeList from '@/modules/pages/EmployeeList';

export default function EmploymentDashboard() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Employment Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          + Add Employee
        </button>
      </div>
      <EmployeeList /> {/* Logic inside modules/coreHR/pages/ */}
    </div>
  );
}
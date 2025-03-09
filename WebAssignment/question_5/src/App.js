import { useState } from "react";

export default function EmployeeSalaryCalculator() {
  const [salary, setSalary] = useState(0);
  const [finalSalary, setFinalSalary] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateSalary = () => {
    let taxPercentage = 0;
    if (salary > 50000) {
      taxPercentage = 10;
    } else if (salary > 35000) {
      taxPercentage = 5;
    }
    const taxAmount = (salary * taxPercentage) / 100;
    setTax(taxAmount);
    setFinalSalary(salary - taxAmount);
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gray-200 min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">
          Employee Salary Calculator
        </h1>
        <input
          type="number"
          className="p-2 border border-gray-400 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter salary"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
        />
        <button
          onClick={calculateSalary}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Calculate
        </button>
        {finalSalary > 0 && (
          <div className="mt-4 p-4 bg-gray-100 shadow-md rounded-lg text-left">
            <p className="text-lg">
              <strong>Original Salary:</strong> ${salary}
            </p>
            <p className="text-lg text-red-600">
              <strong>Tax Deducted:</strong> ${tax} ({(tax / salary) * 100}%)
            </p>
            <p className="text-lg text-green-600">
              <strong>Final Salary:</strong> ${finalSalary}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

import { useState } from "react";
import "../styles/BloodSearch.scss"; // Import SCSS file

const donorsData = [
    { id: 1, name: "Arun Kumar", bloodGroup: "A+" },
    { id: 2, name: "Priya Sharma", bloodGroup: "O-" },
    { id: 3, name: "Rahul Singh", bloodGroup: "B+" },
    { id: 4, name: "Divya Patel", bloodGroup: "AB-" },
    { id: 5, name: "Vikram Reddy", bloodGroup: "A-" },
    { id: 6, name: "Karthik Raj", bloodGroup: "B+" },
    { id: 7, name: "Revathi S", bloodGroup: "O+" },
    { id: 8, name: "Saravanan M", bloodGroup: "A+" },
    { id: 9, name: "Meena K", bloodGroup: "AB+" },
    { id: 10, name: "Gopinath V", bloodGroup: "B-" },
    { id: 11, name: "Lakshmi Priya", bloodGroup: "O-" },
    { id: 12, name: "Balaji P", bloodGroup: "A-" },
    { id: 13, name: "Anbu Selvan", bloodGroup: "B+" },
    { id: 14, name: "Devi Priya", bloodGroup: "AB-" },
    { id: 15, name: "Sathish Kumar", bloodGroup: "O+" },
    { id: 16, name: "Maheshwari G", bloodGroup: "A+" },
    { id: 17, name: "Muthu Kumaran", bloodGroup: "B-" },
    { id: 18, name: "Sundar C", bloodGroup: "O+" },
    { id: 19, name: "Bharathi R", bloodGroup: "A-" },
    { id: 20, name: "Janani M", bloodGroup: "AB+" }
  ];
  

export default function BloodSearch() {
  const [search, setSearch] = useState("");

  const filteredDonors = donorsData.filter((donor) =>
    donor.bloodGroup.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blood-search-container">
      <h1>Search for Blood Group</h1>
      <input
        type="text"
        placeholder="Enter Blood Group (e.g. A+)"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <ul className="donor-list">
        {filteredDonors.length > 0 ? (
          filteredDonors.map((donor) => (
            <li key={donor.id} className="donor-item">
              {donor.name} - <span>{donor.bloodGroup}</span>
            </li>
          ))
        ) : (
          <p className="no-result">No donors found</p>
        )}
      </ul>
    </div>
  );
}

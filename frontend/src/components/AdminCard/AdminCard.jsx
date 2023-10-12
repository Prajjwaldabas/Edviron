import React from "react";
import "./AdminCard.css";
const AdminCard = ({ admins }) => {
  return (
    <div className="admin-container">
      <p className="admin-heading">Admins</p>

      <div className="admininfo">
        <div className="admin-name-Info fd-col w-100">
          <div className="flex aic w-100 jcsa nameContainer">
            <p className="greyText">Name</p>
            <p className="greyText">Role</p>
          </div>

          <div className="flex fd-col scroll-container">
            <div className="flex fd-col scrollable-content">
              {admins.map((admin, index) => (
                <div className="flex aic w-100  scroll">
                  <p className="admin-names">{admin.name}</p>
                  <p className="admin-names">{admin.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;

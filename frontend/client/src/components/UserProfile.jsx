import React from "react";
import { useState, useEffect } from "react";
import * as jwt_decode from "jwt-decode";

function UserProfile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function loadUserData() {
      const userData = sessionStorage.getItem("User");

      if (!userData) {
        console.error("No user data found in sessionStorage");
        return;
      }

      const parsedData = JSON.parse(userData);

      if (!parsedData.token) {
        console.error("No token found in stored user data");
        return;
      }
      const decodedUser = jwt_decode.jwtDecode(parsedData.token);
      setUser({
        decodedUser,
        profilePic:
          decodedUser.profilePic ||
          "https://static-00.iconduck.com/assets.00/profile-default-icon-2048x2045-u3j7s5nj.png",
        name: decodedUser.name,
        email: decodedUser.email,
        activePurchases: decodedUser.activePurchases || [],
        pastPurchases: decodedUser.pastPurchases || [],
      });
    }
    loadUserData();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        {/* Header Section */}
        <div className="flex items-center p-6 border-b border-gray-200">
          <img
            className="w-20 h-20 rounded-full object-cover"
            src={user.profilePic}
            alt="Profile"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              {user.name}
            </h2>
            <p className="text-gray-600">{user.email}</p>
            <p className="mt-2 text-sm text-gray-500">{user.bio}</p>
          </div>
        </div>

        {/* Purchases Section */}
        <div className="p-6">
          {/* Active Purchases */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Active Purchases
            </h3>
            {user.activePurchases?.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {user.activePurchases.map((purchase) => (
                  <li
                    key={purchase.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {purchase.item}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Purchase Date:{" "}
                        {new Date(purchase.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-gray-800 font-semibold">
                      €{purchase.price.toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500">No active purchases found.</p>
            )}
          </div>

          {/* Past Purchases */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">
              Past Purchases
            </h3>
            {user.pastPurchases?.length > 0 ? (
              <ul className="mt-4 space-y-4">
                {user.pastPurchases.map((purchase) => (
                  <li
                    key={purchase.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow"
                  >
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {purchase.item}
                      </h4>
                      <p className="text-sm text-gray-500">
                        Purchase Date:{" "}
                        {new Date(purchase.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-gray-800 font-semibold">
                      €{purchase.price.toLocaleString()}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-gray-500">No past purchases found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserProfile;

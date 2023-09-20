// Alerts.js
import React, { useState } from 'react';
import '../css/Alerts.css';

const Alerts = () => {
  // Dummy data for items and their current quantity
  const items = [
    { id: 1, name: 'Product A', quantity: 15 },
    { id: 2, name: 'Product B', quantity: 8 },
    { id: 3, name: 'Product C', quantity: 5 },
    { id: 4, name: 'Product D', quantity: 20 },
    { id: 1, name: 'Product A', quantity: 15 },
    { id: 2, name: 'Product B', quantity: 8 },
    { id: 3, name: 'Product C', quantity: 5 },
    { id: 4, name: 'Product D', quantity: 20 },
    // Add more items
  ];

  // State to manage alert levels
  const [alertLevels, setAlertLevels] = useState(
    items.reduce((levels, item) => {
      levels[item.id] = 10; // Default alert level for each item
      return levels;
    }, {})
  );

  // Function to update alert levels
  const handleAlertLevelChange = (itemId, newLevel) => {
    setAlertLevels({ ...alertLevels, [itemId]: newLevel });
  };

  // Reorder the items based on alert level
  const sortedItems = [...items].sort(
    (a, b) => alertLevels[a.id] - alertLevels[b.id]
  );

  return (
    <div className="alerts-page">
      <h2>Alerts</h2>
      <div className="items-list">
        {sortedItems.map((item) => (
          <div className={`item ${item.quantity < alertLevels[item.id] ? 'below-alert' : ''}`} key={item.id}>
            <div className="item-info">
            {item.quantity < alertLevels[item.id] && <div className="red-bell">🔔</div>}
              <h3>{item.name}</h3>
              <p>Current Quantity: {item.quantity}</p>
            </div>
            <div className="alert-controls">
              <label>Set Alert Level:</label>
              <input
                type="number"
                value={alertLevels[item.id]}
                onChange={(e) =>
                  handleAlertLevelChange(item.id, parseInt(e.target.value))
                }
              />
              <button>Add Stock</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;

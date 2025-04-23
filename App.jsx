
import React, { useState } from "react";
import dashboardData from "./dashboardData.json";

function App() {
  const [categories, setCategories] = useState(dashboardData.categories);

  const addWidget = (categoryId) => {
    const widgetName = prompt("Enter Widget Name:");
    const widgetContent = prompt("Enter Widget Content:");
    if (!widgetName || !widgetContent) return;

    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: [
            ...category.widgets,
            {
              id: widgetName.toLowerCase().replace(/\s+/g, '-'),
              name: widgetName,
              type: "text",
              content: widgetContent
            }
          ]
        };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map(category => {
      if (category.id === categoryId) {
        return {
          ...category,
          widgets: category.widgets.filter(widget => widget.id !== widgetId)
        };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <img src="/dashboard-color-visual.png" alt="Dashboard Color Overview" style={{ maxWidth: "100%", marginBottom: 20, borderRadius: 10 }} />
      {categories.map(category => (
        <div key={category.id}>
          <h1>{category.name}</h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {category.widgets.map(widget => (
              <div key={widget.id} style={{ background: "#fff", padding: 20, borderRadius: 10, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", position: "relative" }}>
                <strong>{widget.name}</strong>
                <p>{widget.content || widget.data}</p>
                <button onClick={() => removeWidget(category.id, widget.id)} style={{ position: "absolute", top: 5, right: 5 }}>×</button>
              </div>
            ))}
            <div onClick={() => addWidget(category.id)} style={{ background: "#fff", padding: 20, borderRadius: 10, border: "2px dashed #ccc", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span>+ Add Widget</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;

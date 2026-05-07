import React, { useState } from "react";
import servicesData from "../dbs/services.json";
import "../assets/services.css";

function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = servicesData.services.map((service) => service.category);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData.services
      : servicesData.services.filter(
          (service) => service.category === selectedCategory
        );

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Professional Services</h2>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="services-filter"
        >
          <option value="All">All Services</option>

          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="services-list">
        {filteredServices.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.category}</h3>

            <ul>
              {service.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <>
                      {item.title}{" "}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="service-link"
                      >
                        [Link]
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
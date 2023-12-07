import React, { useState } from "react";

const Accordion: React.FC = () => {
  const [accordions, setAccordions] = useState([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
  ]);

  const toggleAccordion = (id: number) => {
    const updatedAccordions = accordions.map((accordion) =>
      accordion.id === id
        ? { ...accordion, isOpen: !accordion.isOpen }
        : accordion
    );
    setAccordions(updatedAccordions);
  };



  return (
    <div>
      {accordions.map((accordion) => (
        <div
          key={accordion.id}
          className="border rounded-md mb-1 overflow-hidden"
        >
          <div
            className="flex items-center justify-between p-4 bg-gray-200 cursor-pointer"
            onClick={() => toggleAccordion(accordion.id)}
          >
            <h3 className="text-lg font-semibold">
              Accordion Title {accordion.id}
            </h3>
            <span className="text-xl transition-transform transform">
              {accordion.isOpen ? "-" : "+"}
            </span>
          </div>
          <div
            className={`overflow-y-auto transition-height duration-300 ease-in-out ${
              accordion.isOpen ? "h-auto" : "h-0"
            }`}
            style={{ maxHeight: accordion.isOpen ? "200px" : "0px" }}
          >
            <div className="p-4 bg-white">
              <p className="text-gray-700">
                {/* Generate long content for demonstration */}
                {Array.from({ length: 20 }, (_, index) => (
                  <span key={index}>
                    Accordion {accordion.id} Content Line {index + 1}.{" "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

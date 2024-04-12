/* eslint-disable no-unused-vars */
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import data from "../utilities/data.json";

const Map = () => {
  return (
    <>
      <div className="m-auto w-[98vw] h-[95vh]">
        <VectorMap
          map={worldMill}
          containerStyle={{
            width: "1000px",
            height: "575px",
          }}
          backgroundColor="#282c34"
          onRegionTipShow={(event, label) => {
            const countryData = data[label.html()];
            if (countryData) {
              const environmentalData = Object.entries(countryData).map(
                ([category, dataPoints]) => {
                  const years = Object.keys(dataPoints);
                  const values = years.map(
                    (year) => `${year}: ${dataPoints[year]}`
                  );
                  return `
                    <div>
                      <p class="font-bold">${category}</p>
                      <ul>${values.map((value) => `<li>${value}</li>`)}</ul>
                    </div>
                  `;
                }
              );

              return label.html(`
                <div class="p-3 bg-white rounded-md min-h-20 w-80 text-black">
                  <div class="flex flex-col items-center gap-4">
                    <p class="font-bold">${label.html()}</p>
                    ${environmentalData.join("")}
                  </div>
                </div>
              `);
            }

            return label.html(`
              <div class="p-3 bg-white rounded-md min-h-20 w-40 text-black">
                <div class="flex flex-col items-center gap-4">
                  <p class="font-bold">${label.html()}</p>
                  <p>No data available</p>
                </div>
              </div>
            `);
          }}
        />
      </div>
    </>
  );
};

export default Map;
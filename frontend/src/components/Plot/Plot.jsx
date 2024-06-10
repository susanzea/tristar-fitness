import { useState, useEffect } from "react";
import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import SelectMenu from "../Shared Components/Select";
import Card from "../Shared Components/Card";
import "../../styles/components/Plot/_Plot.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PlotSection = ({ weekStart }) => {
  const [workoutTypeOptions, setWorkoutTypeOptions] = useState([
    {
      value: "",
      label: "",
    },
  ]);
  const [plotData, setPlotData] = useState([]);

  useEffect(() => {
    // fetch workout types and set
    const workoutTypes = [
      {
        created_at: "Sat, 08 Jun 2024 21:48:28 GMT",
        id: 2,
        name: "golfing",
      },
      {
        created_at: "Sat, 08 Jun 2024 21:48:28 GMT",
        id: 3,
        name: "ice skating",
      },
      {
        created_at: "Sun, 09 Jun 2024 09:05:15 GMT",
        id: 8,
        name: "tennis",
      },
      {
        created_at: "Sat, 08 Jun 2024 21:48:28 GMT",
        id: 4,
        name: "walking",
      },
      {
        created_at: "Sat, 08 Jun 2024 21:48:28 GMT",
        id: 5,
        name: "yoga",
      },
    ];

    const options = workoutTypes.map((t) => {
      return { value: t.id, label: t.name };
    });
    console.log(options);

    setWorkoutTypeOptions([{ value: "", label: "all" }, ...options]);

    const totalWorkoutDurationPerWeekday = Object.values({
      "2024-06-02 00:00:00": 0,
      "2024-06-03 00:00:00": 0,
      "2024-06-04 00:00:00": 0,
      "2024-06-05 00:00:00": 0,
      "2024-06-06 00:00:00": 0,
      "2024-06-07 00:00:00": 40,
      "2024-06-08 00:00:00": 0,
    });

    setPlotData(totalWorkoutDurationPerWeekday);
  }, []);

  return (
    <Card>
      <div id='plot-container'>
        <div>
          <SelectMenu options={workoutTypeOptions} />
        </div>
        <BarChart
          series={[{ data: plotData, color: "#3245e5" }]}
          height={290}
          xAxis={[
            {
              data: ["Sat", "Mon", "Tues", "Wed", "Thu", "Fri", "Sun"],
              scaleType: "band",
            },
          ]}
          yAxis={[{ label: "duration (min)", color: "#FFFFF" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          sx={() => ({
            [`.${barElementClasses.root}`]: {
              strokeWidth: 2,
            },
            [`.${axisClasses.root}`]: {
              [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                stroke: "#FFFFFF",
                strokeWidth: 1,
              },
              [`.${axisClasses.tickLabel}`]: {
                fill: "#FFFFFF",
              },
            },
            "& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label": {
              strokeWidth: "0.4",
              fill: "#FFFFFF",
            },
            border: `1px solid rgba(${"255,255,255"}, 0.1)`,
            backgroundImage: `linear-gradient(rgba(${"255,255,255"}, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(${"255,255,255"}, 0.1) 1px, transparent 1px)`,
            backgroundSize: "35px 35px",
            backgroundPosition: "20px 20px, 20px 20px",
          })}
        />
      </div>
    </Card>
  );
};

export default PlotSection;

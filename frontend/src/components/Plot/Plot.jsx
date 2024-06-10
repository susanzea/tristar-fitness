import { useState, useEffect } from "react";
import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import Card from "../Shared Components/Card";
import "../../styles/components/Plot/_Plot.scss";

const PlotSection = ({ weekStart }) => {
  const [workoutTypes, setWorkoutTypes] = useState([]);
  const [plotData, setPlotData] = useState([]);

  useEffect(() => {
    // fetch workout types and set
    setWorkoutTypes([
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
    ]);
    // fetch workout sessions and set
    // loop for week
    debugger;

    const totalWorkoutDurationPerWeekday = Object.values({
      "2024-06-02 00:00:00": 0,
      "2024-06-03 00:00:00": 0,
      "2024-06-04 00:00:00": 0,
      "2024-06-05 00:00:00": 0,
      "2024-06-06 00:00:00": 0,
      "2024-06-07 00:00:00": 40,
      "2024-06-08 00:00:00": 0,
    });

    debugger;
    setPlotData(totalWorkoutDurationPerWeekday);
  }, []);

  return (
    <Card>
      <div id='plot-container'>
        <div>hi</div>
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
            "& .MuiChartsAxis-label": {
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

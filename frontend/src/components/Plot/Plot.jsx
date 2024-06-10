import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import Card from "../Shared Components/Card";

const PlotSection = () => {
  return (
    <Card>
      <div>hi</div>
      <BarChart
        series={[{ data: [35, 44, 24, 34, 20, 10, 15], color: "#3245e5" }]}
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
            // fill: theme.palette.background.paper,
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
          //change left yAxis label styles
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
    </Card>
  );
};

export default PlotSection;

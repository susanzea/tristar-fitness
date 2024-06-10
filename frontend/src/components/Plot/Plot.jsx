import { BarChart } from "@mui/x-charts/BarChart";
import Card from "../Shared Components/Card";
const PlotSection = () => {
  return (
      <Card>
        <div>hi</div>
        <BarChart
          series={[{ data: [35, 44, 24, 34, 20, 10, 15] }]}
          height={290}
          xAxis={[
            {
              data: ["Sat", "Mon", "Tues", "Wed", "Thu", "Fri", "Sun"],
              scaleType: "band",
            },
          ]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      </Card>
  );
};

export default PlotSection;

import { TRADING_HOURS } from "@/lib/config";

export function TradingHours() {
  return (
    <div className="lines">
      {TRADING_HOURS.map((item) => (
        <div className="hour-line" key={item.days}>
          <span>{item.days}</span>
          <span>{item.hours}</span>
        </div>
      ))}
    </div>
  );
}

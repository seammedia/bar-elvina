import { HOLIDAY_HOURS, TRADING_HOURS } from "@/lib/config";

export function TradingHours({ holidays = false }: { holidays?: boolean }) {
  const showHolidays = holidays && Date.now() < new Date(HOLIDAY_HOURS.until).getTime();
  return (
    <div className="lines">
      {TRADING_HOURS.map((item) => (
        <div className="hour-line" key={item.days}>
          <span>{item.days}</span>
          <span>{item.hours}</span>
        </div>
      ))}
      {showHolidays && (
        <>
          <div className="hour-line hour-line-heading">
            <span>{HOLIDAY_HOURS.title}</span>
          </div>
          {HOLIDAY_HOURS.lines.map((item) => (
            <div className="hour-line" key={item.days}>
              <span>{item.days}</span>
              <span>{item.hours}</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

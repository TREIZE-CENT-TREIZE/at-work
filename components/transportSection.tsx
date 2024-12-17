type Transport = {
  line: string;
  station?: string;
  time: string;
};

type TransportSectionProps = {
  title: string;
  icon: React.ReactNode;
  items: Transport[];
  source?: string;
};

export const TransportSection = ({
  title,
  icon,
  items,
  source,
}: TransportSectionProps) => (
  <div className="p-4 rounded-lg">
    <h2 className="text-lg font-normal mb-4 flex items-center gap-2 bg-gray-100 p-1">
      {icon}
      <p className="break-words">
        <span>{title}</span>
      </p>
    </h2>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b pb-1 text-gray-500"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold">{item.line}</span>
            {item.station && <span>{item.station}</span>}
          </div>
          <span>{item.time}</span>
        </div>
      ))}
    </div>
    {source && (
      <p className="text-sm text-gray-500 mt-4 italic">Source : {source}</p>
    )}
  </div>
);

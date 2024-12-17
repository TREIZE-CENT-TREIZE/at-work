export const StatItem = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="flex flex-col items-start">
    <span className="text-primary font-medium text-xl lg:text-2xl">
      {value}
    </span>
    <span className="text-gray-600 text-xs lg:text-sm whitespace-pre-line mt-1">
      {label}
    </span>
  </div>
);

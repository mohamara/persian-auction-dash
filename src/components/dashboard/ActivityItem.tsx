
type ActivityItemProps = {
  avatar: string;
  name: string;
  action: string;
  target: string;
  time: string;
};

const ActivityItem = ({ avatar, name, action, target, time }: ActivityItemProps) => {
  return (
    <div className="flex items-start space-x-4 space-x-reverse py-3 border-b border-gray-100 last:border-0">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary text-white">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm">
          <span className="font-medium">{name}</span>{" "}
          <span className="text-gray-600">{action}</span>{" "}
          <span className="font-medium">{target}</span>
        </p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;

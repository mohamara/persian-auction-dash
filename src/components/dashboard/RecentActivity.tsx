
import ActivityItem from "./ActivityItem";

const RecentActivity = () => {
  const activities = [
    {
      avatar: "",
      name: "علی حسینی",
      action: "مزایده جدیدی ایجاد کرد:",
      target: "تجهیزات کارخانه",
      time: "۱۵ دقیقه پیش",
    },
    {
      avatar: "",
      name: "مریم اکبری",
      action: "در مزایده شرکت کرد:",
      target: "خودروهای سازمانی",
      time: "۴۵ دقیقه پیش",
    },
    {
      avatar: "",
      name: "رضا محمدی",
      action: "قیمت پیشنهادی خود را افزایش داد:",
      target: "املاک تجاری",
      time: "۱ ساعت پیش",
    },
    {
      avatar: "",
      name: "سارا کریمی",
      action: "مزایده را بست:",
      target: "تجهیزات پزشکی",
      time: "۲ ساعت پیش",
    },
    {
      avatar: "",
      name: "امیر جعفری",
      action: "مشتری جدید اضافه کرد:",
      target: "شرکت همراه سیستم",
      time: "۳ ساعت پیش",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
      <h2 className="text-xl font-semibold mb-4">فعالیت‌های اخیر</h2>
      <div className="space-y-0">
        {activities.map((activity, index) => (
          <ActivityItem key={index} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;

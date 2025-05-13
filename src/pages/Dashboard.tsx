
import { Gavel, Users, Archive, Wallet } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import MetricCard from "@/components/dashboard/MetricCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">داشبورد</h1>
          <p className="text-gray-500">خوش آمدید، آخرین وضعیت مزایده‌ها را بررسی کنید</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <Gavel className="ml-2 h-4 w-4" />
          ایجاد مزایده جدید
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard
          icon={<Gavel className="h-6 w-6" />}
          title="کل مزایده‌ها"
          value={248}
          trend={{ value: 12, isPositive: true }}
          delay={1}
        />
        <MetricCard
          icon={<Gavel className="h-6 w-6" />}
          title="مزایده‌های فعال"
          value={56}
          trend={{ value: 8, isPositive: true }}
          delay={2}
        />
        <MetricCard
          icon={<Archive className="h-6 w-6" />}
          title="مزایده‌های بسته شده"
          value={192}
          trend={{ value: 0, isPositive: true }}
          delay={3}
        />
        <MetricCard
          icon={<Wallet className="h-6 w-6" />}
          title="مجموع سپرده‌ها (میلیون تومان)"
          value={1240}
          trend={{ value: 18, isPositive: true }}
          delay={4}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">نمودار مزایده‌های اخیر</h2>
            <div className="h-64 w-full flex items-center justify-center bg-gray-50 rounded-md">
              <p className="text-gray-400">نمودار مزایده‌های اخیر در اینجا نمایش داده می‌شود</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">آخرین مزایده‌ها</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-3 text-right">عنوان</th>
                    <th className="py-3 text-right">تاریخ شروع</th>
                    <th className="py-3 text-right">تاریخ پایان</th>
                    <th className="py-3 text-right">وضعیت</th>
                    <th className="py-3 text-right">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">ماشین‌آلات صنعتی</td>
                    <td className="py-3">۱۴۰۲/۰۲/۱۵</td>
                    <td className="py-3">۱۴۰۲/۰۳/۱۵</td>
                    <td className="py-3">
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        فعال
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-secondary hover:text-secondary/80 text-sm ml-2">
                        مشاهده
                      </button>
                      <button className="text-primary hover:text-primary/80 text-sm ml-2">
                        ویرایش
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">املاک تجاری منطقه ۳</td>
                    <td className="py-3">۱۴۰۲/۰۲/۱۰</td>
                    <td className="py-3">۱۴۰۲/۰۳/۱۰</td>
                    <td className="py-3">
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                        فعال
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-secondary hover:text-secondary/80 text-sm ml-2">
                        مشاهده
                      </button>
                      <button className="text-primary hover:text-primary/80 text-sm ml-2">
                        ویرایش
                      </button>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3">خودروهای سازمانی</td>
                    <td className="py-3">۱۴۰۲/۰۱/۲۰</td>
                    <td className="py-3">۱۴۰۲/۰۲/۲۰</td>
                    <td className="py-3">
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                        بسته شده
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-secondary hover:text-secondary/80 text-sm ml-2">
                        مشاهده
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3">تجهیزات پزشکی</td>
                    <td className="py-3">۱۴۰۲/۰۱/۰۵</td>
                    <td className="py-3">۱۴۰۲/۰۲/۰۵</td>
                    <td className="py-3">
                      <span className="inline-block px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                        بسته شده
                      </span>
                    </td>
                    <td className="py-3">
                      <button className="text-secondary hover:text-secondary/80 text-sm ml-2">
                        مشاهده
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <RecentActivity />
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold mb-4">آمار مشتریان</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span>مشتریان فعال</span>
                  <span>۷۵%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>مشتریان جدید</span>
                  <span>۲۵%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span>مشتریان غیرفعال</span>
                  <span>۳۰%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-400 h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;

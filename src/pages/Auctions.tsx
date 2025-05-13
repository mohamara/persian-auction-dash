
import { useState } from "react";
import { Gavel, Plus, Search, Filter, ArrowUpDown } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AuctionRow = ({ auction, onView, onEdit, onDelete }: any) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="py-4 px-4 text-right">{auction.title}</td>
      <td className="py-4 px-4 text-right">{auction.startDate}</td>
      <td className="py-4 px-4 text-right">{auction.endDate}</td>
      <td className="py-4 px-4 text-right">
        <span
          className={`inline-block px-2 py-1 text-xs rounded-full ${
            auction.status === "فعال"
              ? "bg-green-100 text-green-800"
              : auction.status === "در انتظار"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {auction.status}
        </span>
      </td>
      <td className="py-4 px-4 text-right">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onView(auction.id)}
          className="text-secondary hover:text-secondary/80 text-sm ml-2"
        >
          مشاهده
        </Button>
        {auction.status !== "بسته شده" && (
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onEdit(auction.id)}
              className="text-primary hover:text-primary/80 text-sm ml-2"
            >
              ویرایش
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onDelete(auction.id)}
              className="text-red-500 hover:text-red-600 text-sm"
            >
              حذف
            </Button>
          </>
        )}
      </td>
    </tr>
  );
};

const Auctions = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Mock auction data
  const auctions = [
    {
      id: 1,
      title: "ماشین‌آلات صنعتی",
      startDate: "۱۴۰۲/۰۲/۱۵",
      endDate: "۱۴۰۲/۰۳/۱۵",
      status: "فعال",
    },
    {
      id: 2,
      title: "املاک تجاری منطقه ۳",
      startDate: "۱۴۰۲/۰۲/۱۰",
      endDate: "۱۴۰۲/۰۳/۱۰",
      status: "فعال",
    },
    {
      id: 3,
      title: "تجهیزات اداری",
      startDate: "۱۴۰۲/۰۲/۲۵",
      endDate: "۱۴۰۲/۰۳/۲۵",
      status: "در انتظار",
    },
    {
      id: 4,
      title: "خودروهای سازمانی",
      startDate: "۱۴۰۲/۰۱/۲۰",
      endDate: "۱۴۰۲/۰۲/۲۰",
      status: "بسته شده",
    },
    {
      id: 5,
      title: "تجهیزات پزشکی",
      startDate: "۱۴۰۲/۰۱/۰۵",
      endDate: "۱۴۰۲/۰۲/۰۵",
      status: "بسته شده",
    },
    {
      id: 6,
      title: "زمین‌های کشاورزی",
      startDate: "۱۴۰۲/۰۲/۲۰",
      endDate: "۱۴۰۲/۰۳/۲۰",
      status: "فعال",
    },
    {
      id: 7,
      title: "مواد اولیه تولید",
      startDate: "۱۴۰۲/۰۲/۱۲",
      endDate: "۱۴۰۲/۰۳/۱۲",
      status: "در انتظار",
    },
    {
      id: 8,
      title: "انبارهای لجستیک",
      startDate: "۱۴۰۲/۰۱/۱۰",
      endDate: "۱۴۰۲/۰۲/۱۰",
      status: "بسته شده",
    },
  ];

  // Filter auctions based on search and status
  const filteredAuctions = auctions.filter(
    (auction) =>
      auction.title.includes(searchTerm) &&
      (statusFilter === "all" || auction.status === statusFilter)
  );

  // Mock handlers
  const handleView = (id: number) => console.log("View", id);
  const handleEdit = (id: number) => console.log("Edit", id);
  const handleDelete = (id: number) => console.log("Delete", id);

  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">مدیریت مزایده‌ها</h1>
          <p className="text-gray-500">مدیریت و بررسی تمامی مزایده‌های سیستم</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <Plus className="ml-2 h-4 w-4" />
          ایجاد مزایده جدید
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="p-6 border-b border-gray-100">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input
                type="text"
                placeholder="جستجو..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="w-full md:w-48">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="فیلتر وضعیت" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">همه</SelectItem>
                  <SelectItem value="فعال">فعال</SelectItem>
                  <SelectItem value="در انتظار">در انتظار</SelectItem>
                  <SelectItem value="بسته شده">بسته شده</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              فیلتر پیشرفته
            </Button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-4 px-4 text-right font-medium">
                  <div className="flex items-center gap-1">
                    عنوان مزایده
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="py-4 px-4 text-right font-medium">
                  <div className="flex items-center gap-1">
                    تاریخ شروع
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="py-4 px-4 text-right font-medium">
                  <div className="flex items-center gap-1">
                    تاریخ پایان
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="py-4 px-4 text-right font-medium">
                  <div className="flex items-center gap-1">
                    وضعیت
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="py-4 px-4 text-right font-medium">عملیات</th>
              </tr>
            </thead>
            <tbody>
              {filteredAuctions.map((auction) => (
                <AuctionRow
                  key={auction.id}
                  auction={auction}
                  onView={handleView}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            نمایش {filteredAuctions.length} از {auctions.length} مزایده
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" disabled>
              قبلی
            </Button>
            <Button variant="outline" size="sm" className="bg-secondary text-white">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              بعدی
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Auctions;

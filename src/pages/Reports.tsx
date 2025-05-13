
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">گزارش‌ها</h1>
          <p className="text-gray-500">مشاهده و استخراج گزارش‌های سیستم</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            خروجی CSV
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            خروجی PDF
          </Button>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64">
        <p className="text-gray-500">این صفحه در حال توسعه است</p>
      </div>
    </DashboardLayout>
  );
};

export default Reports;

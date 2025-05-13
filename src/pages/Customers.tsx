
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Customers = () => {
  return (
    <DashboardLayout>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">مدیریت مشتریان</h1>
          <p className="text-gray-500">مشاهده و مدیریت اطلاعات مشتریان</p>
        </div>
        <Button className="bg-accent hover:bg-accent/90">
          <Plus className="ml-2 h-4 w-4" />
          افزودن مشتری جدید
        </Button>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center h-64">
        <p className="text-gray-500">این صفحه در حال توسعه است</p>
      </div>
    </DashboardLayout>
  );
};

export default Customers;

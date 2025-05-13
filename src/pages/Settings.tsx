
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { User, Moon, Bell, Lock } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">تنظیمات</h1>
        <p className="text-gray-500">مدیریت تنظیمات حساب کاربری و سیستم</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <Tabs defaultValue="profile">
          <div className="p-6 border-b border-gray-100">
            <TabsList className="grid grid-cols-4 gap-4 w-full max-w-lg">
              <TabsTrigger value="profile" className="flex gap-2 items-center">
                <User className="h-4 w-4" />
                پروفایل
              </TabsTrigger>
              <TabsTrigger value="appearance" className="flex gap-2 items-center">
                <Moon className="h-4 w-4" />
                ظاهر
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex gap-2 items-center">
                <Bell className="h-4 w-4" />
                اعلان‌ها
              </TabsTrigger>
              <TabsTrigger value="security" className="flex gap-2 items-center">
                <Lock className="h-4 w-4" />
                امنیت
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-6">
            <TabsContent value="profile">
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl text-gray-400">
                        م
                      </div>
                      <Button size="sm" variant="secondary" className="absolute -bottom-2 -left-2 rounded-full">
                        تغییر
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">نام و نام خانوادگی</Label>
                        <Input id="name" defaultValue="محمد اکبری" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">ایمیل</Label>
                        <Input id="email" type="email" defaultValue="mohammad@example.com" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="position">سمت</Label>
                        <Input id="position" defaultValue="مدیر سیستم" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">شماره تماس</Label>
                        <Input id="phone" defaultValue="۰۹۱۲۳۴۵۶۷۸۹" />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-secondary hover:bg-secondary/90">ذخیره تغییرات</Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="appearance">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">حالت تاریک</h3>
                    <p className="text-gray-500 text-sm">تغییر تم برنامه به حالت تاریک یا روشن</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">فشرده‌سازی منو</h3>
                    <p className="text-gray-500 text-sm">نمایش منو به صورت آیکون‌های کوچک</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium">انیمیشن‌ها</h3>
                    <p className="text-gray-500 text-sm">فعال‌سازی انیمیشن‌های رابط کاربری</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex justify-end">
                  <Button className="bg-secondary hover:bg-secondary/90">ذخیره تغییرات</Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <div className="space-y-4">
                <p>این بخش در حال توسعه است</p>
              </div>
            </TabsContent>
            
            <TabsContent value="security">
              <div className="space-y-4">
                <p>این بخش در حال توسعه است</p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

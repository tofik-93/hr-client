import React from 'react';
// Import SidebarProvider and SidebarTrigger along with Sidebar
import { Sidebar, SidebarProvider, SidebarTrigger, SidebarContent } from '@/components/layout/sidebar';
import EmployeeList from '../modules/pages/EmployeeList';

export default function Page() {
  return (
    // 1. Wrap everything in the Provider
    <SidebarProvider>
      {/* 2. The Sidebar component itself */}
      <Sidebar>
        <SidebarContent>
           <div className="p-4">Sidebar Navigation Content</div>
        </SidebarContent>
      </Sidebar>

      <main className="flex-1 p-6">
        {/* 3. Add the Trigger so you can actually toggle it */}
        <SidebarTrigger />
        
        <h1 className="text-2xl font-bold mt-4">Welcome to the Page</h1>
        <EmployeeList />
      </main>
    </SidebarProvider>
  );
}
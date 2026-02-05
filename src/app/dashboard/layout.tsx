// src/app/layout.tsx
import { SidebarProvider, SidebarTrigger, Sidebar } from "@/components/layout/sidebar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 1. Wrap EVERYTHING in the Provider */}
        <SidebarProvider>
          
          {/* 2. Add the actual Sidebar component */}
          <Sidebar>
            {/* You can add SidebarHeader, SidebarContent, etc. here */}
            <div className="p-4">My Sidebar Content</div>
          </Sidebar>

          <main className="w-full">
            {/* 3. Add the Trigger so you can open/close it */}
            <SidebarTrigger />
            {children}
          </main>
          
        </SidebarProvider>
      </body>
    </html>
  )
}
// src/app/layout.tsx
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/layout/sidebar"
import { AppSidebar } from "@/components/appSidebar" // We'll create this next

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          {/* This stays constant across all pages */}
          <AppSidebar /> 
          
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
              <SidebarTrigger />
              <h2 className="text-sm font-semibold">BKG Human Resource System</h2>
            </header>
            
            {/* This is where your page.tsx content will inject */}
            <main className="p-4">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
"use client"

import * as React from "react"
import { 
  LayoutDashboard, 
  Users, 
  ArrowLeftRight, 
  Clock, 
  CalendarOff, 
  Banknote, 
  ChevronRight,
  Command,
  MoreHorizontal
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/layout/sidebar"

const sidebarItems = [
  {
    group: "Core HR",
    items: [
      { title: "Dashboard", url: "/", icon: LayoutDashboard },
      { title: "Employees", url: "/employees", icon: Users },
      { title: "Transfers", url: "/transfers", icon: ArrowLeftRight },
    ],
  },
  {
    group: "Time & Finance",
    items: [
      { title: "Attendance", url: "/attendance", icon: Clock },
      { title: "Leave Management", url: "/leave", icon: CalendarOff },
      { title: "Payroll", url: "/payroll", icon: Banknote },
    ],
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="border-r">
      {/* 1. Header with Company Branding */}
      <SidebarHeader className="h-16 border-b flex items-center justify-center">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Command className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">BKG HRMS</span>
                <span className="truncate text-xs text-muted-foreground">Internal System</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* 2. Main Navigation Content */}
      <SidebarContent>
        {sidebarItems.map((group) => (
          <SidebarGroup key={group.group}>
            <SidebarGroupLabel className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
              {group.group}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      tooltip={item.title}
                      className="transition-all hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    >
                      <a href={item.url} className="flex items-center gap-3">
                        <item.icon className="size-4 shrink-0" />
                        <span className="font-medium">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* 3. Footer with User Info or Version */}
      <SidebarFooter className="border-t p-2">
         <div className="flex items-center gap-2 px-2 py-1.5 text-left text-sm">
            <div className="size-8 rounded-full bg-muted flex items-center justify-center font-bold text-xs">Admin</div>
            <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
              <span className="truncate font-medium">HR Manager</span>
              <span className="truncate text-xs text-muted-foreground">admin@bkg.com</span>
            </div>
            <MoreHorizontal className="ml-auto size-4 text-muted-foreground group-data-[collapsible=icon]:hidden" />
         </div>
      </SidebarFooter>

      {/* 4. The Interactive Rail for resizing/collapsing */}
      <SidebarRail />
    </Sidebar>
  )
}
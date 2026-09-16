"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/config/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[240px] shrink-0 border-r border-border h-[calc(100vh-48px)] overflow-y-auto sticky top-[48px] bg-sidebar-bg">
      <nav className="py-4">
        {navigation.map((section) => (
          <div key={section.title} className="mb-4">
            <h3 className="px-4 mb-1 text-xs font-medium text-muted uppercase tracking-wider">
              {section.title}
            </h3>
            <ul>
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "text-foreground font-medium bg-hover"
                          : "text-muted hover:text-foreground hover:bg-hover"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}

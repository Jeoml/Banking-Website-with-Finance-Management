"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }) => {
    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
                <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                    <Image
                        src="/icons/logo.svg" // Corrected the path
                        width={34}
                        height={34}
                        alt="Logo"
                        className="size-[24px] max-xl:size-14" // Adjusted class names for TailwindCSS
                    />
                    <h1 className="sidebar-logo">Horizon</h1>
                </Link>

                {sidebarLinks.map((item) => {
                    const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                        <Link href={item.route} key={item.label} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                            <div className="relative size-5">
                                <Image
                                    src={item.imgURL}
                                    alt={item.label}
                                    fill
                                    className={
                                        cn({
                                            'brightness-[3] invert-0':isActive
                                        })
                                    }
                                    // width={24} // Specify width
                                    // height={24} // Specify height
                                />
                            </div>
                            <p className={cn('sidebar-label',{
                                '!textiwhite':isActive
                            })}>
                                {item.label}
                            </p>
                        </Link>
                    );
                })}
            </nav>
        </section>
    );
};

export default Sidebar;

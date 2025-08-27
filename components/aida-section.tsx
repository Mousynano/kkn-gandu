"use client";

import Image from "next/image";
import Link from "next/link";
import { AidaContent } from "@/lib/aida";

type Props = {
    content: AidaContent;
    className?: string;
};

export default function AidaSection({ content, className }: Props) {
    const themeClasses = content.theme === "dark"
        ? "bg-gray-900 text-white"
        : "bg-white text-gray-900";

    return (
        <section className={`${themeClasses} ${className ?? ""}`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                {/* Attention */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                    <div className="lg:col-span-7">
                        <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                            {content.audience}
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                            {content.attention.headline}
                        </h2>
                        {content.attention.subheadline && (
                            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
                                {content.attention.subheadline}
                            </p>
                        )}
                    </div>
                    {content.attention.mediaUrl && (
                        <div className="lg:col-span-5">
                            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800">
                                <Image
                                    src={content.attention.mediaUrl}
                                    alt={content.attention.mediaAlt ?? ""}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Interest */}
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <ul className="space-y-7">
                    {content.interest.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-4">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-2xl">
                            ✓
                        </span>
                        <span className="text-lg md:text-xl text-gray-700 dark:text-gray-200 flex items-center">
                            {bullet}
                        </span>
                        </li>
                    ))}
                    </ul>

                    {content.interest.supportingMediaUrl && (
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-800">
                            <Image
                                src={content.interest.supportingMediaUrl}
                                alt={content.interest.supportingMediaAlt ?? ""}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}



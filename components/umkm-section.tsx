"use client";

import Image from "next/image";
import Link from "next/link";
import { UmkmItem } from "@/lib/umkm";

type Props = {
    title?: string;
    description?: string;
    items: UmkmItem[];
    className?: string;
};

function ContactActions({ item }: { item: UmkmItem }) {
    const waHref = item.contact.whatsapp
        ? `https://wa.me/${item.contact.whatsapp.replace(/[^\d]/g, "")}`
        : undefined;
    return (
        <div className="mt-4 flex flex-wrap items-center gap-2">
            {waHref && (
                <Link
                    href={waHref}
                    target="_blank"
                    className="inline-flex items-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-700"
                >
                    WhatsApp
                </Link>
            )}
        </div>
    );
}

export default function UmkmSection({ title = "UMKM Desa", description, items, className }: Props) {
    return (
        <section className={className}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="sm:flex sm:items-end sm:justify-between">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
                        {description && (
                            <p className="mt-2 max-w-2xl text-gray-600">{description}</p>
                        )}
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <article key={item.id} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                            <div className="relative h-44 w-full overflow-hidden rounded-lg bg-gray-100">
                                {item.heroImageUrl ? (
                                    <Image src={item.heroImageUrl} alt={item.name} fill className="object-cover" />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center text-gray-400">No Image</div>
                                )}
                            </div>
                            <div className="mt-4">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">{item.category}</span>
                                </div>
                                <p className="mt-1 line-clamp-3 text-sm text-gray-600">{item.description}</p>
                                {item.products && item.products.length > 0 && (
                                    <div className="mt-3">
                                        <h4 className="text-sm font-medium text-gray-900">Produk</h4>
                                        <ul className="mt-1 space-y-1 text-sm">
                                            {item.products.slice(0, 3).map((p, idx) => (
                                                <li key={idx} className="flex items-center justify-between">
                                                    <span>{p.name}</span>
                                                    {p.price && <span className="text-gray-500">{p.price}</span>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {item.services && item.services.length > 0 && (
                                    <div className="mt-3">
                                        <h4 className="text-sm font-medium text-gray-900">Jasa</h4>
                                        <ul className="mt-1 space-y-1 text-sm">
                                            {item.services.slice(0, 3).map((s, idx) => (
                                                <li key={idx} className="flex items-center justify-between">
                                                    <span>{s.name}</span>
                                                    {s.price && <span className="text-gray-500">{s.price}</span>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                <ContactActions item={item} />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}



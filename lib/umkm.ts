export type UmkmContact = {
    ownerName: string;
    phone?: string;
    whatsapp?: string;
    instagram?: string;
    website?: string;
    address?: string;
};

export type UmkmItem = {
    id: string;
    name: string;
    category: string;
    description: string;
    products: Array<{
        name: string;
        price?: string;
    }>;
    services?: Array<{
        name: string;
        price?: string;
    }>;
    heroImageUrl?: string;
    gallery?: string[];
    contact: UmkmContact;
    tags?: string[];
    featured?: boolean;
};



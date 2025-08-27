export type AidaCta = {
    label: string;
    href: string;
    variant?: "primary" | "secondary" | "ghost";
    target?: "_self" | "_blank";
};

export type AidaContent = {
    audience: string;
    attention: {
        headline: string;
        subheadline?: string;
        mediaUrl?: string;
        mediaAlt?: string;
    };
    interest: {
        bullets: string[];
        supportingMediaUrl?: string;
        supportingMediaAlt?: string;
    };
    desire: {
        valueProps: string[];
        proof?: {
            quote?: string;
            author?: string;
            metrics?: Array<{ label: string; value: string }>
        };
    };
    action: {
        ctas: AidaCta[];
        disclaimer?: string;
    };
    theme?: "light" | "dark";
};



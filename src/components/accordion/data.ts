export interface AccordionItem {
    title: string;
    description: string;
    image: string;
}

export const accordionData: AccordionItem[] = [
    {
        title: "Lender",
        description:
            "Simplify the mortgage process for every closing with a powerful pair of products: our award-winning eClose platform and best-in-class eVault.",
        image: "/accordion/Lender-Accordion-eVault.webp",
    },
    {
        title: "Title & Escrow",
        description:
            "Accelerate every mortgage closing and connect instantly with over 140,000 notary signing agents & attorneys for mobile & RON eClosings.",
        image: "/accordion/Title-Escrow.png",
    },
    {
        title: "Signing Service",
        description:
            "Instantly source, vet, schedule, and pay for a qualified notary anywhere in the country.",
        image: "/accordion/Scheduling.png",
    },
    {
        title: "Notary Signing Agent",
        description:
            "Access over 250,000 mobile and RON loan signing opportunities each month, gain exposure to 100+ hiring companies, and efficiently manage your business online.",
        image: "/accordion/Notary-signing-Agents.png",
    },
];

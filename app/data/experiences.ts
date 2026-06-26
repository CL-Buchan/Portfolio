export const experiences: {
    name: string;
    content: string;
    dateFrom: string;
    dateTo: string;
    role: {
        roleName: string;
        responsibilities: string[];
    };
}[] = [
    {
        name: 'Instalments',
        content: '',
        dateFrom: 'March 2026',
        dateTo: 'June 2026',
        role: {
            roleName: 'Development Lead',
            responsibilities: [
                'Lead group development documentation, reviewed code quality, refactored existing code for increased performance, and enforced repository guidelines.',
                'Communicated technical architecture, Xero API integration, and project structure to a non-technical client, ensuring alignment throughout the development lifecycle.',
                'Implemented complex Xero authentication, invoicing, contact and accounting flow via various APIs.',
                'Created multiple pages with complex UI and state management.',
                'Collaborated via Git using branching, pull requests, and code reviews.',
            ],
        },
    },
    {
        name: 'Hismile',
        content: '',
        dateFrom: 'Feb 2026',
        dateTo: 'Apr 2026',
        role: {
            roleName: 'Junior Web Developer',
            responsibilities: [
                'Contributed to the consumer-facing Shopify storefront using Vue, SCSS, Liquid, and TypeScript.',
                'Supported new product launches and assisted with front-end feature development across the ecommerce platform.',
                'Implemented dynamic email campaigns and flows via Klaviyo across six international regions.',
                'Worked within existing codebases following established patterns and version control workflows.',
            ],
        },
    },
    {
        name: 'Yourkind',
        content: '',
        dateFrom: 'Dec 2025',
        dateTo: 'Feb 2026',
        role: {
            roleName: 'Software Developer',
            responsibilities: [
                'Built and maintained user-facing content pages using Next.js, React, and TailwindCSS.',
                'Implemented complex forms, validation, authentication flows, and UI state management.',
                'Contributed to feature development and UI improvements within a production codebase.',
                'Collaborated via Git using branching, pull requests, and code reviews.',
            ],
        },
    },
];

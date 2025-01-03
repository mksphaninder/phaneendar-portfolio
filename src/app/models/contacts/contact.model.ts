export interface Contact {
    contactId: string;
    contactLink: string;
    socialMedia: string;
}

export interface ContactResponseDto {
    portfolioContacts: Contact[];
}
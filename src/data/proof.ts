export type Testimonial = {
  quote: string;
  name: string;
  journey: string;
  permissionConfirmed: true;
};

export type AuthorizedPartner = {
  name: string;
  relationship: string;
  logo: string;
  displayAuthorized: true;
};

// Add entries only after Moon Glow confirms the wording and publication rights.
export const testimonials: Testimonial[] = [];
export const authorizedPartners: AuthorizedPartner[] = [];

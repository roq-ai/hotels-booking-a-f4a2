interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Travel Agent'],
  customerRoles: ['Customer'],
  tenantRoles: ['Travel Agent', 'Hotel Manager', 'Customer Service Representative'],
  tenantName: 'Provider',
  applicationName: 'Hotels Booking Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create and manage bookings',
    'View room details',
    'Write and manage reviews',
    'View hotel details',
  ],
  ownerAbilities: [
    'Manage bookings',
    'Create and read reviews',
    'Read hotel and room information',
    'Read user information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/4513d2a0-3fcf-4b31-b4e9-1bc43d6a5c84',
};

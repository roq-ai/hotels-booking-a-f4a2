const mapping: Record<string, string> = {
  bookings: 'booking',
  hotels: 'hotel',
  providers: 'provider',
  reviews: 'review',
  rooms: 'room',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

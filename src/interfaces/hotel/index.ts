import { ReviewInterface } from 'interfaces/review';
import { RoomInterface } from 'interfaces/room';
import { ProviderInterface } from 'interfaces/provider';
import { GetQueryInterface } from 'interfaces';

export interface HotelInterface {
  id?: string;
  name: string;
  address: string;
  city: string;
  country: string;
  provider_id: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  room?: RoomInterface[];
  provider?: ProviderInterface;
  _count?: {
    review?: number;
    room?: number;
  };
}

export interface HotelGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  address?: string;
  city?: string;
  country?: string;
  provider_id?: string;
}

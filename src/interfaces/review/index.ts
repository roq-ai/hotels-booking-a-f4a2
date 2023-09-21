import { UserInterface } from 'interfaces/user';
import { HotelInterface } from 'interfaces/hotel';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  user_id: string;
  hotel_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  hotel?: HotelInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  hotel_id?: string;
}

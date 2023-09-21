import { HotelInterface } from 'interfaces/hotel';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProviderInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  country?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  mobile?: string;
  hotel?: HotelInterface[];
  user?: UserInterface;
  _count?: {
    hotel?: number;
  };
}

export interface ProviderGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  country?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
  mobile?: string;
}

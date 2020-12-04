export default interface Trip {
  unid: string;
  start: number; // Datetime
  end: number; // Datetime
  startkm: number;
  endkm: number;
  startAddress?: string;
  endAddress?: string;
  category?: string;
  driver: string;
  car: string;
}

export interface Driver {
  unid: string;
  name: string;
  birthday: number;
}

export interface Car {
  unid: string;
  name: string;
}

export interface Category {
  unid: string;
  name: string;
  comment: string;
}

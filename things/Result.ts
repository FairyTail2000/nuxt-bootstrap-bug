export interface Result {
  subnet: number;
  ip: string;
  maskPattern: string;
  possibleAddresses: string;
  lowest: string;
  highest: string;
  lowestUsable: string;
  highestUsable: string;
}

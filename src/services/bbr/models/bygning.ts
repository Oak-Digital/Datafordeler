export type Status =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "13"
  | "14"
  | "15"
  | "16"
  | "17"
  | "18"
  | "19";

export interface BygningRequest {
  Id?: string | string[]; //can be array!
  VirkningFra?: Date;
  VirkningTil?: Date;
  Virkningsaktoer?: string;
  RegistreringFra?: Date;
  RegistreringTil?: Date;
  Registreringsaktoer?: string;
  Status?: Status | Status[]; //can be array of 1-19, see https://teknik.bbr.dk/kodelister/0/1/0/Livscyklus
  Forretningsproces?: string;
  Forretningsomraade?: string;
  Forretningshaendelse?: string;
  Husnummer?: string; //Dar HusnummerId
  Kommunekode?: string;
  MedDybde?: boolean;
  DAFTimestampFra?: Date;
  DAFTimestampTil?: Date;
  Etage?: string | string[]; //BBR etage ID, can be array of UUID
  Fordelingsareal?: string | string[]; //BBR fordelingsareal UUID
  Opgang?: string | string[]; //BBR opgang UUIDcan be array of UUID
  TekniskAnlaeg?: string | string[]; //BBR teknisk anlæg Id UUID
  Grund?: string; //BBR Grund UUID
  Jordstykke?: number; //MU Jordstykke ID
  Ejendomsrelation?: string; //BBR ejd.relation ID
  BFENummer?: number;
  Nord?: string; //Double
  Syd?: string; //Double
  Oest?: string; //Double
  Vest?: string; //Double
  PeriodeaendringFra?: Date;
  PeriodeaendringTil?: Date;
  KunNyesteIPeriode?: boolean;
}

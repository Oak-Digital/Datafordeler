export interface BBRSagRequest {
  Id?: string | string[]; //can be array!
  VirkningFra?: Date;
  VirkningTil?: Date;
  Virkningsaktoer?: string;
  RegistreringFra?: Date;
  RegistreringTil?: Date;
  Registreringsaktoer?: string;
  Status?: string; //can be array of 1-19, see https://teknik.bbr.dk/kodelister/0/1/0/Livscyklus
  Forretningsproces?: string;
  Forretningsomraade?: string;
  Forretningshaendelse?: string;
  Kommunekode?: string;
  MedDybde?: boolean;
  DAFTimestampFra?: Date;
  DAFTimestampTil?: Date;
  Bygningsnummer?: string;
  Enhed?: string;
  Etage?: string;
  Grund?: string;
  Opgang?: string;
  TekniskAnlaeg?: string;
  PeriodeaendringFra?: Date;
  PeriodeaendringTil?: Date;
  KunNyesteIPeriode?: boolean;
}

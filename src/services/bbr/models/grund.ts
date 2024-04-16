export interface GrundRequest {
  id?: string;
  VirkningFra?: Date;
  VirkningTil?: Date;
  Virkningsaktoer?: string;
  RegistreringFra?: Date;
  RegistreringTil?: Date;
  Registreringsaktoer?: string;
  Status?: string;
  Forretningsproces?: string;
  Forretningsomraade?: string;
  Forretningshaendelse?: string;
  Kommunekode?: string;
  MedDybde?: boolean;
  DAFTimestampFra?: Date;
  DAFTimestampTil?: Date;
  BFENummer?: number;
  Bygning?: string;
  TekniskAnlaeg?: string;
  Ejendomsrelation?: string;
  Jordstykke?: string;
  Husnummer?: string;
  PeriodeaendringFra?: Date;
  PeriodeaendringTil?: Date;
  KunNyesteIPeriode?: boolean;
}

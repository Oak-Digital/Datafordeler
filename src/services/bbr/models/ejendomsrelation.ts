export interface EjendomsrelationRequest {
  Id?: string; //can be array!
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
  BFENummer?: number; //SFE, BPFG (bygning på fremmed grund), ejerlejlighed
  BPFG?: number; //MU BygningPåFremmedGrund ID
  Ejerforholdskode?: string;
  Ejerlejlighed?: number; //MU Ejerlejlighed ID
  Ejendomsnummer?: number;
  SamletFastEjendom?: number; //MU SamletFastEjendom ID
  Vurderingsejendomsnummer?: number; //Vurderingsejendomsnummer
  PeriodeaendringFra?: Date;
  PeriodeaendringTil?: Date;
  KunNyesteIPeriode?: boolean;
}

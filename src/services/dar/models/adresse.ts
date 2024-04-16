export interface adresseRequest {
  Id?: string;
  Status?: string; // 2 | 3 | 4 | 5
  Husnummer?: string;
  Bygning?: string;
  NavngivenVej?: string;
  NavngivenVejKommunedel?: string;
  Kommunekode?: string;
  Vejkode?: string;
  Nord?: string;
  Syd?: string;
  Oest?: string;
  Vest?: string;
  VirkningFra?: string;
  VirkningTil?: string;
  RegistreringFra?: string;
  RegistreringTil?: string;
  DAFTimestampFra?: string;
  DAFTimestampTil?: string;
  Virkningsaktoer?: string;
  Registreringsaktoer?: string;
  Forretningsproces?: string;
  Forretningsomraade?: string;
  Forretningshaendelse?: string;
  MedDybde?: string;
}

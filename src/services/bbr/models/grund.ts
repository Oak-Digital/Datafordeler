export interface GrundRequest {
  id: string;
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

export interface Grund {
  datafordelerOpdateringstid: string;
  forretningshændelse: string | null;
  forretningsområde: string | null;
  forretningsproces: string | null;
  gru009Vandforsyning: string | null;
  gru010Afløbsforhold: string | null;
  gru021Udledningstilladelse: string | null;
  gru022MedlemskabAfSpildevandsforsyning: string | null;
  gru023PåbudVedrSpildevandsafledning: string | null;
  gru024FristVedrSpildevandsafledning: string | null;
  gru025TilladelseTilUdtræden: string | null;
  gru026DatoForTilladelseTilUdtræden: string | null;
  gru027TilladelseTilAlternativBortskaffelseEllerAfledning: string | null;
  gru028DatoForTilladelseTilAlternativBortskaffelseEllerAfledning:
    | string
    | null;
  gru029DispensationFritagelseIftKollektivVarmeforsyning: string | null;
  gru030DatoForDispensationFritagelseIftKollektivVarmeforsyning: string | null;
  gru500Notatlinjer: string | null;
  husnummer: string | null;
  id_lokalId: string | null;
  id_namespace: string | null;
  kommunekode: string | null;
  registreringFra: string | null;
  registreringsaktør: string | null;
  registreringTil: string | null;
  status: string | null;
  virkningFra: string | null;
  virkningsaktør: string | null;
  virkningTil: string | null;
  jordstykkeList: string | null;
  bestemtFastEjendom: {
    datafordelerOpdateringstid: string;
    bfeNummer: number;
    bygningPåFremmedGrund: string;
    ejendommensEjerforholdskode: string;
    ejendomsnummer: number;
    ejendomstype: string;
    ejerlejlighed: string;
    ejerlejlighedsnummer: string;
    forretningshændelse: string;
    forretningsområde: string;
    forretningsproces: string;
    id_lokalId: string;
    id_namespace: string;
    kommunekode: string;
    registreringFra: string;
    registreringsaktr: string;
    registreringTil: string;
    samletFastEjendom: string;
    status: string;
    tinglystAreal: string;
    virkningFra: string;
    virkningsaktr: string;
    virkningTil: string;
    vurderingsejendomsnummer: string;
  };
}

export type GrundResponse = Grund[];

import { EjerlejlighedList } from "./ejerlejlighed";
import { FordelingsarealList } from "./fordelingsareal";

export interface EnhedRequest {
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
  BFENummer?: number;
  Etage?: string; //BBR etage ID, can be array of UUID
  Fordelingsareal?: string; //BBR fordelingsareal UUID
  Opgang?: string; //BBR opgang UUIDcan be array of UUID
  TekniskAnlaeg?: string; //BBR teknisk anlæg Id UUID
  Ejendomsrelation?: string; //BBR ejd.relation ID
  AdresseIdentificerer?: string; //Dar adresse Id
  Bygning?: string; //BBR Bygning ID ARRAY
  PeriodeaendringFra?: Date;
  PeriodeaendringTil?: Date;
  KunNyesteIPeriode?: boolean;
}

import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import { BFEnrAdresse, EjendomsBeliggenhed } from "./models";

//To do: Make it possible to call EBR with a cert at https://certservices.datafordeler.dk/EBR/Ejendomsbeliggenhed
//https://services.datafordeler.dk/EBR/Ejendomsbeliggenhed/1/REST/BFEnrAdresse

export class EBR extends Service {
  static Register = "EBR";

  constructor(config: clientInit = {}) {
    super(config, "EBR", "rest");
  }

  async bfeNrAdresse(
    params: BFEnrAdresse.Request
  ): Promise<BFEnrAdresse.Response> {
    const methodInfo = EBR.Methods.BFEnrAdresse;
    if (!methodInfo) {
      throw new Error("Method information for 'BFEnrAdresse' is undefined.");
    }

    return await this.Request<BFEnrAdresse.Response>(methodInfo, params);
  }

  async ejendomsbeliggenhed(
    params: EjendomsBeliggenhed.Request
  ): Promise<EjendomsBeliggenhed.ResponseFull> {
    const methodInfo = EBR.Methods.Ejendomsbeliggenhed;
    if (!methodInfo) {
      throw new Error(
        "Method information for 'Ejendomsbeliggenhed' is undefined."
      );
    }
    return await this.Request<EjendomsBeliggenhed.ResponseFull>(
      methodInfo,
      params
    );
  }

  async ejendomsbeliggenhedSimpel(
    params: EjendomsBeliggenhed.Request
  ): Promise<EjendomsBeliggenhed.ResponseSimpel> {
    const methodInfo = EBR.Methods.EjendomsbeliggenhedSimpel;
    if (!methodInfo) {
      throw new Error(
        "Method information for 'EjendomsbeliggenhedSimpel' is undefined."
      );
    }
    return await this.Request<EjendomsBeliggenhed.ResponseSimpel>(
      methodInfo,
      params
    );
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      Ejendomsbeliggenhed: "Ejendomsbeliggenhed",
    });
  }

  static get Methods(): Readonly<MethodObject> {
    return {
      BFEnrAdresse: {
        zone: "public_protected",
        service: EBR.Services.Ejendomsbeliggenhed!,
        method: "BFEnrAdresse",
      } as const,
      Ejendomsbeliggenhed: {
        zone: "public_protected",
        service: EBR.Services.Ejendomsbeliggenhed!,
        method: "Ejendomsbeliggenhed",
      } as const,
      EjendomsbeliggenhedSimpel: {
        zone: "public_protected",
        service: EBR.Services.Ejendomsbeliggenhed!,
        method: "EjendomsbeliggenhedSimpel",
      } as const,
    } as const;
  }
}

import { Service } from "../../core";
import { clientInit, ServiceObject, MethodObject } from "../../core/types";
import {
  EjerskabMedStamoplysninger,
  Handelsoplysninger,
  Ejerskifte,
  Ejerskabsskifte,
} from "./models";

export class EJF extends Service {
  static Register = "EJERFORTEGNELSE";

  constructor(config: clientInit = {}) {
    super(config, "EJERFORTEGNELSE", "rest");
  }

  /**
   * Get an ejerSkabMedStamoplysninger object
   * @param {string} [Id] - the dar id for the address
   * @return {array} Returns array of addresses
   */
  async ejerskabMedStamoplysninger(
    params: EjerskabMedStamoplysninger.Request
  ): Promise<EjerskabMedStamoplysninger.Response> {
    const methodInfo = EJF.Methods.EjerskabMedStamoplysninger;
    if (!methodInfo) {
      throw new Error(
        "Method information for 'EjerskabMedStamoplysninger' is undefined."
      );
    }
    return await this.Request<EjerskabMedStamoplysninger.Response>(
      methodInfo,
      params
    );
  }

  async handelsoplysning(
    params: Handelsoplysninger.Request
  ): Promise<Handelsoplysninger.Response> {
    const methodInfo = EJF.Methods.Handelsoplysninger;
    if (!methodInfo) {
      throw new Error(
        "Method information for 'Handelsoplysninger' is undefined."
      );
    }

    return await this.Request<Handelsoplysninger.Response>(methodInfo, params);
  }

  async ejerskifte(params: Ejerskifte.Request): Promise<Ejerskifte.Response> {
    const methodInfo = EJF.Methods.Ejerskifte;
    if (!methodInfo) {
      throw new Error("Method information for 'Ejerskifte' is undefined.");
    }

    return await this.Request<Ejerskifte.Response>(methodInfo, params);
  }

  async ejerskabsskifte(
    params: Ejerskabsskifte.Request
  ): Promise<Ejerskabsskifte.Response> {
    const methodInfo = EJF.Methods.Ejerskabsskifte;
    if (!methodInfo) {
      throw new Error("Method information for 'Ejerskabsskifte' is undefined.");
    }

    return await this.Request<Ejerskabsskifte.Response>(methodInfo, params);
  }

  static get Services(): ServiceObject {
    return Object.freeze({
      Ejerfortegnelsen: "Ejerfortegnelsen",
      EjerfortegnelsenFortrolig: " EjerfortegnelsenFortrolig",
      EjerfortegnelsenFortroligBeskyttet: "EjerfortegnelsenFortroligBeskyttet",
    });
  }

  static get Methods(): Readonly<MethodObject> {
    return {
      EjerskabMedStamoplysninger: {
        zone: "cert5",
        service: EJF.Services.Ejerfortegnelsen!,
        method: "EjerskabMedStamoplysninger",
      },
      Handelsoplysninger: {
        zone: "cert5",
        service: EJF.Services.Ejerfortegnelsen!,
        method: "Handelsoplysning",
      },
      Ejerskifte: {
        zone: "cert5",
        service: EJF.Services.Ejerfortegnelsen!,
        method: "Ejerskifte",
        version: "2.0.0", // Added version manuallly as Ejerskifte uses 2.0.0 and other methods in EJF uses 1.
      },
      Ejerskabsskifte: {
        zone: "cert5",
        service: EJF.Services.Ejerfortegnelsen!,
        method: "Ejerskabsskifte",
      } as const,
    } as const;
  }
}

/**  Experimenting - not in use */
// interface DarServiceObject extends ServiceObject {
//   DAR: "DAR";
//   DAR_BFE_Public: "DAR_BFE_Public";
// }

// interface DarMethodObject extends MethodObject {
//   adresse: { zone: "public"; service: ""; method: "" };
// }

// import Buffer from "buffer"

import { Injectable } from "@angular/core";
import { CBCWebCrypto } from "@cambridge-blockchain/crypto-lib";

@Injectable({
  providedIn: "root",
})
export class NgxCryptoService {
  constructor(crypto: CBCWebCrypto) {}
}

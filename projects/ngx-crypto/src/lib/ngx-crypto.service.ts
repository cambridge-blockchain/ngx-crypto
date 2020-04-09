import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import {
  CBCWebCrypto,
  EncryptedData,
  Hash,
} from "@cambridge-blockchain/crypto-lib";

@Injectable({
  providedIn: "root",
})
export class NgxCryptoService {
  crypto: CBCWebCrypto;

  constructor() {
    this.crypto = new CBCWebCrypto();
  }

  publicKeyBase64(): Observable<string> {
    return this.crypto.publicKeyBase64();
  }

  async encryptAttribute(
    attributeValue: ArrayBuffer,
    encSymKey: string
  ): Promise<EncryptedData> {
    return this.crypto.encryptAttribute(attributeValue, encSymKey);
  }

  async decryptAttribute(
    encAttributeValue: ArrayBuffer,
    encSymKey: string,
    iv: Uint8Array
  ): Promise<ArrayBuffer> {
    return this.crypto.decryptAttribute(encAttributeValue, encSymKey, iv);
  }

  async decryptStringAttribute(
    encAttributeValue: string,
    encSymKey: string,
    iv: Uint8Array
  ): Promise<ArrayBuffer> {
    return this.crypto.decryptStringAttribute(encAttributeValue, encSymKey, iv);
  }

  async computeHash(attributeValue: ArrayBuffer): Promise<Hash> {
    return this.crypto.computeHash(attributeValue);
  }

  async verifyHash(hash: Hash, attributeValue: ArrayBuffer): Promise<boolean> {
    return this.crypto.verifyHash(hash, attributeValue);
  }
}

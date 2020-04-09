# Ngx Crypto Service

[![npm version](https://badge.fury.io/js/%40cambridge-blockchain%2Fngx-crypto.svg)](https://badge.fury.io/js/%40cambridge-blockchain%2Fngx-crypto)

## Getting Started

In order to use this library in your angular project install it as follows.

    $ npm install @cambridge-blockchain/crypto-lib
    $ npm install @cambridge-blockchain/ngx-crypto

Import the crypto service as follows

    import { NgxCryptoService } from "@cambridge-blockchain/ngx-crypto";

## NgxCryptoService Function Signatures

```typescript
  publicKeyBase64(): Observable<string>

  async encryptAttribute(
    attributeValue: ArrayBuffer,
    encSymKey: string
  ): Promise<EncryptedData>

  async decryptAttribute(
    encAttributeValue: ArrayBuffer,
    encSymKey: string,
    iv: Uint8Array
  ): Promise<ArrayBuffer>

  async decryptStringAttribute(
    encAttributeValue: string,
    encSymKey: string,
    iv: Uint8Array
  ): Promise<ArrayBuffer>

  async computeHash(attributeValue: ArrayBuffer): Promise<Hash>

  async verifyHash(hash: Hash, attributeValue: ArrayBuffer): Promise<boolean>
```

## Example Use

```typescript
import { Component, OnInit } from "@angular/core";
import { NgxCryptoService } from "@cambridge-blockchain/ngx-crypto";
import { Hash } from "@cambridge-blockchain/crypto-lib";

@Component({
  selector: "personal",
  templateUrl: "./personal.component.html",
})
export class PersonalComponent implements OnInit {
  constructor(crypto: NgxCryptoService) {
    console.log("crypto service", crypto);
  }

  ngOnInit() {
    const ab = new ArrayBuffer(1024);
    crypto.computeHash(ab).then((hash: Hash) => {
      console.log("computed hash", hash);

      crypto.verifyHash(hash, ab).then((valid) => {
        console.log("is hash valid?", valid);
      });
    });
  }
}
```

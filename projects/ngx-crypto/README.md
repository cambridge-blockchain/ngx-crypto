# Ngx Crypto Library

## Getting Started

In order to use this library in your angular project install it as follows.

    $ npm install @cambridge-blockchain/crypto-lib
    $ npm install @cambridge-blockchain/ngx-crypto

Import the crypto service as follows

    import { NgxCryptoService } from "@cambridge-blockchain/ngx-crypto";

Example use

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

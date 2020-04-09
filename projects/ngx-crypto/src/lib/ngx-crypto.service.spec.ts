import { TestBed } from "@angular/core/testing";

import { NgxCryptoService } from "./ngx-crypto.service";

describe("NgxCryptoService", () => {
  let service: NgxCryptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCryptoService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});

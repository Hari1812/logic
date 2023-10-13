import { Injectable } from '@angular/core';
import * as CryptoTS from 'crypto-js'
@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encryptionAES (msg:string) {
    // Encrypt
    const ciphertext = CryptoTS.AES.encrypt(msg, 'secret key 123');
    return ciphertext.toString();
  }

  decryptionAES (msg:string) {
    // Decrypt
    const bytes  = CryptoTS.AES.decrypt(msg, 'secret key 123');
    const plaintext = bytes.toString(CryptoTS.enc.Utf8);
    return plaintext;
  }
}

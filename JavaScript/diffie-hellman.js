//
// This is only a SKELETON file for the 'Diffie Hellman' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class DiffieHellman {
  constructor(p, g) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('Not a prime key');
    }
    this.p = p;
    this.g = g;
  }

  isPrime(n) {
    if (n <= 1) {
      return false;
    }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  getPublicKey(privateKey) {
    if(privateKey <= 1 || privateKey >= this.p) throw new Error('Not a valid private key'); 
    return this.g**privateKey % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return theirPublicKey**myPrivateKey % this.p;
  }
}

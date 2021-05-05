import * as bcrypt from 'bcrypt'

export class UtilsService {
  static generateHash(password: string, solt: string): string {
    return bcrypt.hash(password, solt)
  }

  static generateSalt(): string {
    return bcrypt.genSalt()
  }

  static validateHash(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash || '')
  }

  static generateRandomInteger(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max + 1 - min))
  }

  static generateRandomString(length: number): string {
    return Math.random()
      .toString(36)
      .replace(/[^a-zA-Z0-9]+/g, '')
      .toUpperCase()
      .substr(0, length)
  }

  static getAge(d1: Date, d2?: Date): number {
    d2 = d2 || new Date()
    const diff = d2.getTime() - d1.getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25))
  }
}

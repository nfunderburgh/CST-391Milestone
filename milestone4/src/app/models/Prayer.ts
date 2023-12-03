export class Prayer {
    prayerId: number = -1;
    name: string = "";
    anonymous: boolean = true;
    prayerRequest: string = "";

    constructor(prayerId: number, name: string, anonymous: boolean, prayerRequest: string){
      this.prayerId = prayerId;
      this.name = name;
      this.anonymous = anonymous;
      this.prayerRequest = prayerRequest;
    }

    get PrayerId(): number{
      return this.prayerId;
    }

    set PrayerId(prayerId: number) {
      this.prayerId = prayerId;
    }

    get Name(): string{
      return this.name;
    }

    set Name(name: string) {
      this.name = name;
    }

    get Anonymous(): boolean{
      return this.anonymous;
    }

    set Anonymous(anonymous: boolean) {
      this.anonymous = anonymous;
    }

    get PrayerRequest(): string{
      return this.prayerRequest;
    }

    set PrayerRequest(prayerRequest: string) {
      this.prayerRequest = prayerRequest;
    }
}

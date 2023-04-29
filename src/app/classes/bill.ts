interface bill{
   amount:number;
   billid: number;
   consumption: number;
   date: string;
   lateFees: number;
   paymentType: string;
   status: string;
}

export class electricityBill implements bill
{
    amount: number;
    billid: number;
    consumption: number;
    date: string;
    lateFees: number;
    paymentType: string;
    status: string;
    constructor(
        amount: number,
         billid: number,
         consumption: number,
         date: string,
         lateFees: number,
         paymentType: string,
         status: string
      ) {
        this.amount = amount;
        this.billid = billid;
        this.consumption = consumption;
        this.date = date;
        this.paymentType = paymentType;
        this.status = status;
        this.lateFees = lateFees;
      }
    

}
export class waterBill implements bill
{
    amount: number;
    billid: number;
    consumption: number;
    date: string;
    lateFees: number;
    paymentType: string;
    status: string;
    constructor(
        amount: number,
         billid: number,
         consumption: number,
         date: string,
         lateFees: number,
         paymentType: string,
         status: string
      ) {
        this.amount = amount;
        this.billid = billid;
        this.consumption = consumption;
        this.date = date;
        this.paymentType = paymentType;
        this.status = status;
        this.lateFees = lateFees;
      }
    

}
export class telephoneBills implements bill{
  amount: number;
  billid: number;
  consumption: number;
  date: string;
  minutes: number;
  serviceProvider: string;
  paymentType: string;
  status: string;
  lateFees: number;
  constructor(
      amount: number,
       billid: number,
       consumption: number,
       date: string,
       lateFees: number,
       paymentType: string,
       status: string,
       serviceProvider: string,
       minutes:number,
     
    ) {
      this.amount = amount;
      this.billid = billid;
      this.consumption = consumption;
      this.date = date;
      this.paymentType = paymentType;
      this.status = status;
      this.serviceProvider = serviceProvider;
      this.minutes = minutes;
      this.lateFees = lateFees;
}
}

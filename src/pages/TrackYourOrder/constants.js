import {
  IconsVariants,
  InstructionVariants,
} from "../../constants/VariantsOfComponents";

export const Payments = [
  {
    title: "Bitcoin",
    icon: IconsVariants.Bitcoin,
  },
  {
    title: "Crypto",
    icon: IconsVariants.Crypto,
  },
  {
    title: "PayOP",
    icon: IconsVariants.Payop,
  },
  {
    title: "Payeer",
    icon: IconsVariants.Payeer,
    instruction: InstructionVariants.Payeer,
  },
  {
    title: "Perfect Money",
    icon: IconsVariants.Perfect_money,
  },
];

export const PaymentDownloadColumn = [
  "ID",
  "Date",
  "Method",
  "Amount",
  "Download",
];

export const PaymentDownloadInfo = [
  {
    row: {
      id: "#1543",
      date: "2022-04-11 08:10:39",
      method: "Payeer",
      amount: 75,
    },
  },
];

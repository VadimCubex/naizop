import { ProfileInfo } from "../../constants/constants";

export const FilterOrders = [
  "All",
  "Pending",
  "In progress",
  "Completed",
  "Partial",
  "Processing",
  "Refunded",
];

export const OrderTable = [
  {
    row: {
      id: "#1524",
      service: "Instagram Followers [Permanent & Mixed]",
      date: "2022-04-11    08:10:39",
      username: ProfileInfo.usename,
      charge: "0.9435",
      status: "refunded",
      refill: { inProgress: false },
    },
    modal: [
      {
        row: { section: "Start Count", value: "1" },
      },
      {
        row: { section: "Quantity", value: "1000" },
      },
      {
        row: { section: "Remains", value: "0" },
      },
    ],
  },
  {
    row: {
      id: "#1524",
      service: "Instagram Followers [Cheapest - 3K Day]",
      date: "2022-04-11    08:10:39",
      username: ProfileInfo.usename,
      charge: "0.9435",
      status: "partial",
      refill: { inProgress: true, time: "18 hours 51 minutes" },
    },
    modal: [
      {
        row: { section: "Start Count", value: "2" },
      },
      {
        row: { section: "Quantity", value: "1000" },
      },
      {
        row: { section: "Remains", value: "0" },
      },
    ],
  },
  {
    row: {
      id: "#1524",
      service: "Instagram Likes [Permanent & Mixed]",
      date: "2022-04-11    08:10:39",
      username: ProfileInfo.usename,
      charge: "0.9435",
      status: "pending",
    },
    modal: [
      {
        row: { section: "Start Count", value: "3" },
      },
      {
        row: { section: "Quantity", value: "1000" },
      },
      {
        row: { section: "Remains", value: "0" },
      },
    ],
  },
  {
    row: {
      id: "#1524",
      service: "Instagram Followers [Permanent & Mixed]",
      date: "2022-04-11    08:10:39",
      username: ProfileInfo.usename,
      charge: "0.9435",
      status: "processing",
      refill: { inProgress: false },
    },
    modal: [
      {
        row: { section: "Start Count", value: "4" },
      },
      {
        row: { section: "Quantity", value: "1000" },
      },
      {
        row: { section: "Remains", value: "0" },
      },
    ],
  },
  {
    row: {
      id: "#1524",
      service: "Instagram Likes [Cheapest - 3K Day]",
      date: "2022-04-11    08:10:39",
      username: ProfileInfo.usename,
      charge: "0.9435",
      status: "in-progress",
    },
    modal: [
      {
        row: { section: "Start Count", value: "5" },
      },
      {
        row: { section: "Quantity", value: "1000" },
      },
      {
        row: { section: "Remains", value: "0" },
      },
    ],
  },
  {
    row: {
      id: "#1524",
      service: "Instagram Followers [Cheapest - 3K Day]",
      date: "2022-04-11    08:10:39",
      username: ProfileInfo.usename,
      charge: "0.9435",
      status: "completed",
      refill: { inProgress: true, time: "18 hours 51 minutes" },
    },
    modal: [
      {
        row: { section: "Start Count", value: "6" },
      },
      {
        row: { section: "Quantity", value: "1000" },
      },
      {
        row: { section: "Remains", value: "0" },
      },
    ],
  },
  {
    row: {
      id: "#1524",
      service: "Instagram Likes [Cheapest - 3K Day]",
      date: "2022-04-11    08:10:39",
      username: ProfileInfo.usename,
      charge: "0.9435",
      status: "refunded",
    },
    modal: [
      {
        row: { section: "Start Count", value: "7" },
      },
      {
        row: { section: "Quantity", value: "1000" },
      },
      {
        row: { section: "Remains", value: "0" },
      },
    ],
  },
];

export const OrdersModalColumnInfo = ["Section", "Value"];

export const OrdersColumnInfo = [
  "Order ID",
  "Service",
  "Date ",
  "Link",
  "Charge",
  "Status",
  "Action",
  "Reorder",
];

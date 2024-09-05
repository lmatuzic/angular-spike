import { App, Notification, Profile, Quicklink } from "./types";

export const profiles: Profile[] = [
  {
    id: 1,
    img: "wallet",
    color: "primary",
    title: "My Profile",
    subtitle: "Account Settings",
    link: "/",
  },
  {
    id: 2,
    img: "shield",
    color: "success",
    title: "My Inbox",
    subtitle: "Messages & Email",
    link: "/",
  },
  {
    id: 3,
    img: "credit-card",
    color: "error",
    title: "My Tasks",
    subtitle: "To-do and Daily Tasks",
    link: "/",
  },
];

export const quicklinks: Quicklink[] = [
  {
    id: 1,
    title: "Pricing Page",
    link: "/",
  },
  {
    id: 2,
    title: "Authentication Design",
    link: "/",
  },
  {
    id: 3,
    title: "Register Now",
    link: "/",
  },
  {
    id: 4,
    title: "404 Error Page",
    link: "/",
  },
  {
    id: 5,
    title: "Notes App",
    link: "/",
  },
  {
    id: 6,
    title: "Employee App",
    link: "/",
  },
  {
    id: 7,
    title: "Todo Application",
    link: "/",
  },
  {
    id: 8,
    title: "Treeview",
    link: "/",
  },
];

export const notifications: Notification[] = [
  {
    id: 1,
    img: "/assets/images/profile/user-1.jpg",
    title: "Roman Joined the Team!",
    subtitle: "Congratulate him",
  },
  {
    id: 2,
    img: "/assets/images/profile/user-2.jpg",
    title: "New message received",
    subtitle: "Salma sent you new message",
  },
  {
    id: 3,
    img: "/assets/images/profile/user-3.jpg",
    title: "New Payment received",
    subtitle: "Check your earnings",
  },
  {
    id: 4,
    img: "/assets/images/profile/user-4.jpg",
    title: "Jolly completed tasks",
    subtitle: "Assign her new tasks",
  },
  {
    id: 5,
    img: "/assets/images/profile/user-5.jpg",
    title: "Roman Joined the Team!",
    subtitle: "Congratulate him",
  },
];

export const apps: App[] = [
  {
    id: 1,
    img: "/assets/images/svgs/icon-dd-chat.svg",
    title: "Chat Application",
    subtitle: "Messages & Emails",
    link: "/",
  },
  {
    id: 2,
    img: "/assets/images/svgs/icon-dd-cart.svg",
    title: "Todo App",
    subtitle: "Completed task",
    link: "/",
  },
  {
    id: 3,
    img: "/assets/images/svgs/icon-dd-invoice.svg",
    title: "Invoice App",
    subtitle: "Get latest invoice",
    link: "/",
  },
  {
    id: 4,
    img: "/assets/images/svgs/icon-dd-date.svg",
    title: "Calendar App",
    subtitle: "Get Dates",
    link: "/",
  },
  {
    id: 5,
    img: "/assets/images/svgs/icon-dd-mobile.svg",
    title: "Contact Application",
    subtitle: "2 Unsaved Contacts",
    link: "/",
  },
  {
    id: 6,
    img: "/assets/images/svgs/icon-dd-lifebuoy.svg",
    title: "Tickets App",
    subtitle: "Create new ticket",
    link: "/",
  },
  {
    id: 7,
    img: "/assets/images/svgs/icon-dd-message-box.svg",
    title: "Email App",
    subtitle: "Get new emails",
    link: "/",
  },
  {
    id: 8,
    img: "/assets/images/svgs/icon-dd-application.svg",
    title: "Courses",
    subtitle: "Create new course",
    link: "/",
  },
];

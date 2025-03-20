// import { role } from "@/constants/role.constants";
import { ReactNode } from "react";
// import { IconType } from "react-icons";

export type TCommonProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

// export type TUserRole = (typeof role)[keyof typeof role];

// export type TSubLinkItem = {
//   subName: string;
//   subPath: string;
//   subIcon: IconType;
// };

// export type TSidebarItem = {
//   name: string;
//   path?: string;
//   rootPath?: string;
//   icon: IconType;
//   children?: TSubLinkItem[];
// };

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./SidebarNotes.module.css";

const tags = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

export default function SidebarNotes() {
  const pathname = usePathname();
  const currentTag = pathname?.split("/").pop() || "All";

  return (
    <ul className={css.menuList}>
      {tags.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link
            href={`/notes/filter/${tag}`}
            className={`${css.menuLink} ${currentTag === tag ? css.active : ""}`}
          >
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}

import MenuProvider from "../header/menu.data";
import { Link, usePathname } from "@/i18n/routing";
import cn from "clsx";

interface Props {
  menuActive?: boolean;
  setMenuActive?: (active: boolean) => void;
}

const Navigation = ({ menuActive = false, setMenuActive = () => {} }: Props) => {
  const menu = MenuProvider();
  const pathname = usePathname();

  return (
    <>
      {menu.map((item) => (
        <Link
          target={item.target}
          href={item.link}
          key={item.id}
          className={cn(
            "cursor-pointer bg-black text-[#AFAFAF] hover:border-orange-700 hover:text-white",
            pathname === item.link
              ? "text-white border-b-2 border-orange-700"
              : "text-[#AFAFAF]"
          )}
          onClick={() => {
            setMenuActive(!menuActive);
          }}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export default Navigation;

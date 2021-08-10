import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon

} from "@heroicons/react/outline"

function Header() {
  return (
    <header className="flex flex-col m-5  justify-between sm:flex-row items-center h-auto">

     <div className="flex flex-grow max-w-2xl justify-evenly ml-4" >
          <HeaderItem title="HOME" Icon = {HomeIcon} />
          <HeaderItem title="TRENDING" Icon = {LightningBoltIcon} />
          <HeaderItem title="VERIFIED" Icon = {BadgeCheckIcon} />
          <HeaderItem title="COLLECTION" Icon = {CollectionIcon} />
          <HeaderItem title="SEARCH" Icon = {SearchIcon} />
          <HeaderItem title="ACCOUNT" Icon = {UserIcon} />
     </div>

      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        height={80}
        width={100}
      />
    </header>
  );
}

export default Header;

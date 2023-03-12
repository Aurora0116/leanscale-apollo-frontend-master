import Header from "components/Header/LogistrationHeader";
import CommonHeader from "components/Header/CommonHeader";
import Link from "next/link";
import { Button } from "components/Button";
import { CartIcon, UserIcon } from "components/SvgIcons";
import Autocomplete from "components/Autocomplete";

export { Header, CommonHeader };

export default function HeaderCommon() {
  return (
    <header className="bg-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="">
            <Button
              icon={<CartIcon color="#fff" />}
              size="small"
              title="0"
              className="mr-2"
            />
            <Button
              icon={<UserIcon color="#595959" />}
              size="small"
              variant="plain"
              title="My Account"
              titleClass="text-dark-gray"
            />
          </div>
          <div className="">
            <Autocomplete />
          </div>
          <div className="">
            <Link href="/">
              <a>
                {/* eslint-disable-next-line */}
                <img src="/image/logo@text.svg" alt="" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

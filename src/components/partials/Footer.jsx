import React from "react";
import { Link } from "react-router-dom";
import IconBrandFacebook from "@tabler/icons-react/dist/esm/icons/IconBrandFacebookFilled.mjs";
import IconBrandTwiiter from "@tabler/icons-react/dist/esm/icons/IconBrandTwitterFilled.mjs";
import IconBrandYoutube from "@tabler/icons-react/dist/esm/icons/IconBrandYoutubeFilled.mjs";
import IconCopyrightFilled from "@tabler/icons-react/dist/esm/icons/IconCopyrightFilled.mjs";

import useCurrentYear from "../../hooks/shared/useCurrentYear";

const Footer = () => {
  const { currentYear } = useCurrentYear();

  return (
    <footer className="flex flex-col gap-6 bg-[var(--bg-neutral)] px-4 py-12">
      <div className="flex flex-col items-center gap-8">
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 lg:text-lg">
          <li>
            <a href="/about" className="hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/faq" className="hover:underline">
              FAQ
            </a>
          </li>
        </ul>
        <div>
          <ul className="flex gap-4">
            <li>
              <IconBrandFacebook className="h-8 w-8" />
            </li>
            <li>
              <IconBrandTwiiter className="h-8 w-8" />
            </li>
            <li>
              <IconBrandYoutube className="h-8 w-8" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Link to={"/"} className="flex w-full items-center font-bold">
          <p className="text-5xl text-[var(--brand-color-500)] lg:text-7xl">
            C
          </p>
          <p className="text-white lg:text-lg">INEVAULT</p>
        </Link>
        <p className="flex items-center gap-1 text-sm text-gray-400 lg:text-base">
          <IconCopyrightFilled className="h-4 w-4" />
          All rights reserved {currentYear}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

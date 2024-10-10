import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "../ui/icon";

interface IFooterItem {
  title: string;
  href: string;
}

interface IQuickLinks {
  product: IFooterItem[];
  solutions: IFooterItem[];
  support: IFooterItem[];
}

interface ISocialItem {
  icon: React.ReactNode;
  href: string;
}

const quickLinks: IQuickLinks = {
  product: [
    { title: "Pricing", href: "#" },
    { title: "Overview", href: "#" },
    { title: "Browse", href: "#" },
    { title: "Accessibility", href: "#" },
    { title: "Five", href: "#" },
  ],
  solutions: [
    { title: "Brainstorming", href: "#" },
    { title: "Ideation", href: "#" },
    { title: "Wireframing", href: "#" },
    { title: "Research", href: "#" },
    { title: "Design", href: "#" },
  ],
  support: [
    { title: "Contact Us", href: "#" },
    { title: "Developers", href: "#" },
    { title: "Documentation", href: "#" },
    { title: "Integrations", href: "#" },
    { title: "Reports", href: "#" },
  ],
};

const socialLinks: ISocialItem[] = [
  { icon: <Icon name="youtube" />, href: "#" },
  { icon: <Icon name="facebook" />, href: "#" },
  { icon: <Icon name="twitter" />, href: "#" },
  { icon: <Icon name="instagram" />, href: "#" },
  { icon: <Icon name="linkedIn" />, href: "#" },
];

const footerBottomLinks: IFooterItem[] = [
  { title: "Terms", href: "#" },
  { title: "Privacy", href: "#" },
  { title: "Contact", href: "#" },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary w-full text-white">
      <div className="max-w-screen-xl mx-auto px-4 lg:px-20">
        <div className="py-12 grid place-items-center lg:place-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(quickLinks).map(([category, items]) => (
            <div
              key={category}
              className="flex flex-col text-md text-center lg:text-start"
            >
              <h3 className="font-medium text-white py-3 capitalize">
                {category}
              </h3>
              <ul>
                {items.map((item: IFooterItem, idx: number) => (
                  <li key={idx} className="text-cream py-3">
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col items-center lg:items-start text-md space-y-2 h-full">
            <h3 className="font-medium text-white py-3">Get the app</h3>
            <div className="flex flex-col items-center lg:items-start justify-between space-y-2 h-full">
              <div className="flex flex-col items-center lg:items-start">
                <Link href="#">
                  <Image
                    src="/assets/logos/app-store.png"
                    width={120}
                    height={40}
                    alt="App Store Logo"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/assets/logos/google-play.png"
                    width={135}
                    height={40}
                    alt="Google Play Logo"
                    className="mt-2"
                  />
                </Link>
              </div>

              <div className="space-y-2 flex flex-col items-center lg:items-start">
                <h3 className="text-medium text-cream pt-12 lg:pt-0 pb-3">
                  Follow Us
                </h3>
                <div className="m-0">
                  <ul className="flex space-x-4 items-center">
                    {socialLinks.map((item: ISocialItem, _idx: number) => (
                      <li key={_idx}>
                        <Link href={item.href}>{item.icon}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-accent"></div>
        <div className="py-12 lg:py-6 space-y-6 lg:space-y-0 flex flex-col justify-between items-center lg:flex-row-reverse">
          <p className="text-sm text-cream">
            Collers © {new Date().getFullYear()}. All rights reserved.
          </p>
          <ul className="flex space-x-8">
            {footerBottomLinks.map((item: IFooterItem, idx: number) => (
              <li key={idx} className="text-cream py-3">
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
            <li className="text-cream py-3 flex items-center space-x-2">
              <Icon name="world" className="inline-block" />
              <span>EN</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

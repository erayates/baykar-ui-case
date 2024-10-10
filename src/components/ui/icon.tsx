import React from "react";
import { ArrowLeft } from "../icons/arrow-left";
import { ArrowRight } from "../icons/arrow-right";
import { Check } from "../icons/check";
import { Facebook } from "../icons/facebook";
import Instagram from "../icons/instagram";
import { LinkedIn } from "../icons/linkedin";
import { MenuScale } from "../icons/menu-scale";
import { PlayCircle } from "../icons/play-circle";
import { Play } from "../icons/play";
import { Podcast } from "../icons/podcast";
import { Rocket } from "../icons/rocket";
import { Screen } from "../icons/screen";
import { Search } from "../icons/search";
import { SettingsAlt } from "../icons/settings-alt";
import { ShieldCheck } from "../icons/shield-check";
import { ShoppingCart } from "../icons/shopping-cart";
import { Twitter } from "../icons/twitter";
import { World } from "../icons/world";
import { Youtube } from "../icons/youtube";
import { Trophy } from "../icons/trophy";
import { Tunnel } from "../icons/tunnel";
import { TV } from "../icons/tv";
import { TrophyShape } from "../icons/trophy-shape";
import { TunnelShape } from "../icons/tunnel-shape";
import { TVShape } from "../icons/tv-shape";

const Icons = {
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  check: Check,
  facebook: Facebook,
  instagram: Instagram,
  linkedIn: LinkedIn,
  menuScale: MenuScale,
  playCircle: PlayCircle,
  play: Play,
  podcast: Podcast,
  rocket: Rocket,
  screen: Screen,
  search: Search,
  settingsAlt: SettingsAlt,
  shieldCheck: ShieldCheck,
  shoppingCart: ShoppingCart,
  twitter: Twitter,
  world: World,
  youtube: Youtube,
  trophy: Trophy,
  tunnel: Tunnel,
  tv: TV,
  trophyShape: TrophyShape,
  tunnelShape: TunnelShape,
  tvShape: TVShape,
};

const Icon = ({
  name,
  className,
}: {
  name: keyof typeof Icons;
  className?: string;
}) => {
  const IconComponent = Icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return <IconComponent className={className} />;
};

export default Icon;

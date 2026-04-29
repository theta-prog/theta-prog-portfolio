import { FaYoutube, FaTiktok, FaGithub, FaMusic } from 'react-icons/fa';
import { SiNiconico } from 'react-icons/si';
import { IconType } from 'react-icons';

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export const devLinks: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/theta-prog', icon: FaGithub },
];

export const musicLinks: SocialLink[] = [
    { name: 'YouTube', url: 'https://youtube.com', icon: FaYoutube },
    { name: 'Niconico', url: 'https://www.nicovideo.jp', icon: SiNiconico },
    { name: 'TikTok', url: 'https://www.tiktok.com', icon: FaTiktok },
    { name: 'Piapro', url: 'https://piapro.jp', icon: FaMusic },
];

export const snsLinks: SocialLink[] = [...devLinks, ...musicLinks];

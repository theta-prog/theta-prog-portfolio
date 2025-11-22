import { FaYoutube, FaTiktok, FaGithub, FaMusic } from 'react-icons/fa';
import { SiNiconico } from 'react-icons/si';
import { IconType } from 'react-icons';

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export const snsLinks: SocialLink[] = [
    { name: 'YouTube', url: 'https://youtube.com', icon: FaYoutube },
    { name: 'Niconico', url: 'https://www.nicovideo.jp', icon: SiNiconico },
    { name: 'TikTok', url: 'https://www.tiktok.com', icon: FaTiktok },
    { name: 'Piapro', url: 'https://piapro.jp', icon: FaMusic },
    { name: 'GitHub', url: 'https://github.com', icon: FaGithub },
];

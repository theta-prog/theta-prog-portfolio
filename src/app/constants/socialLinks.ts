import { FaYoutube, FaTiktok, FaGithub, FaMusic } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiNiconico } from 'react-icons/si';
import { IconType } from 'react-icons';

export interface SocialLink {
    name: string;
    url: string;
    icon: IconType;
}

export const profileUrls = {
    github: 'https://github.com/theta-prog',
    x: 'https://x.com/theta223',
    youtube: 'https://www.youtube.com/@theta223',
    niconico: 'https://www.nicovideo.jp/user/90615984/video',
    tiktok: 'https://www.tiktok.com/@theta_d',
    piapro: 'https://piapro.jp/behigher',
} as const;

export const devLinks: SocialLink[] = [
    { name: 'GitHub', url: profileUrls.github, icon: FaGithub },
    { name: 'X', url: profileUrls.x, icon: FaXTwitter },
    { name: 'YouTube', url: profileUrls.youtube, icon: FaYoutube },
];

export const musicLinks: SocialLink[] = [
    { name: 'YouTube', url: profileUrls.youtube, icon: FaYoutube },
    { name: 'Niconico', url: profileUrls.niconico, icon: SiNiconico },
    { name: 'TikTok', url: profileUrls.tiktok, icon: FaTiktok },
    { name: 'Piapro', url: profileUrls.piapro, icon: FaMusic },
    { name: 'X', url: profileUrls.x, icon: FaXTwitter },
];

const seenLinkNames = new Set<string>();

export const snsLinks: SocialLink[] = [...devLinks, ...musicLinks].filter((link) => {
    if (seenLinkNames.has(link.name)) {
        return false;
    }

    seenLinkNames.add(link.name);
    return true;
});

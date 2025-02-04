import { PortableImage } from '@/components/PortableText/PortableImage/PortableImage';
import { PortableCode } from '@/components/PortableText/PortableCode/PortableCode';
import { PortableLink } from './PortableLink';

export const portableTextComponents = {
    types: {
        image: PortableImage,
        code: PortableCode,
    },
    marks: {
        link: PortableLink,
    }
};

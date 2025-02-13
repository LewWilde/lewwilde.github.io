import { PortableImage } from '@/components/PortableText/PortableImage/PortableImage';
import { PortableCode } from '@/components/PortableText/PortableCode/PortableCode';
import { PortableLink } from './PortableLink';
import { Heading } from '../Typography/Heading';

export const portableTextComponents = {
    block: {
        h1: ({ children }) => <Heading level={1}>{children}</Heading>,
        h2: ({ children }) => <Heading level={2}>{children}</Heading>,
        h3: ({ children }) => <Heading level={3}>{children}</Heading>,
        h4: ({ children }) => <Heading level={4}>{children}</Heading>,
        h5: ({ children }) => <Heading level={5}>{children}</Heading>,
        h6: ({ children }) => <Heading level={6}>{children}</Heading>,
    },
    types: {
        image: PortableImage,
        code: PortableCode,
    },
    marks: {
        link: PortableLink,
    }
};

import Link from '@/components/Link/Link';

export const PortableLink = ({ value, children }) => {

    const { href } = value;

    return (<Link href={href}>{children}</Link>)
}
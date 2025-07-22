export const resolveLink = ({ _type, slug }) => {

    const base = process.env.NEXT_PUBLIC_SITE_URL

    switch (_type) {
        case 'home-single': {
            return base;
        }
        case 'post': {
            return base + '/posts/' + slug.current;
        }
        case 'project': {
            return base + '/projects/' + slug.current;
        }
        default: {
            return base + '/' + slug.current;
        }

    }

}
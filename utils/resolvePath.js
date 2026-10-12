export const resolvePath = ({ _type }) => {

    switch (_type) {
        case 'project': {
            return 'projects'
        }
        case 'post': {
            return 'posts'
        }
        default:
            return ''
    }


}
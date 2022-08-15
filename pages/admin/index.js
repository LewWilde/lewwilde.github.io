import dynamic from 'next/dynamic';

const config = {

    cms_manual_init: true,
    load_config_file: false,
    local_backend: true,
    base_url: "https://lewwilde.co.uk",
    backend: {
        name: 'github',
        repo: 'LewWilde/lewwilde.github.io',
        branch: 'main',
        auth_endpoint: "api/auth"
    },
    publish_mode: 'editorial_workflow',
    media_folder: '/public/img',
    media_library: {
        name: 'cloudinary',
        output_filename_only: false,
        config: {
            cloud_name: 'lewwilde',
            api_key: '724134168536541',
        }
    },
    collections: [
        {
            name: "Posts",
            label: "Posts",
            editor: { preview: false },
            label_singular: "Post",
            folder: "content/posts",
            create: true,
            slug: "{{slug}}",
            extension: "md",
            format: "yaml-frontmatter",
            fields: [
                {
                    label: "Title",
                    name: "title",
                    widget: "string",
                    required: true
                },
                { label: "Publish Date", name: "date", widget: "datetime" },
                {
                    label: "Body", name: "body", widget: "markdown"
                },
                {
                    label: "Featured Image",
                    name: "thumbnail",
                    widget: "image",
                    choose_url: true
                }

            ],
        },
    ],

}

const NetlifyCMS = dynamic(
    () => {

        return import('netlify-cms-media-library-cloudinary').then((module) => {
            return import('netlify-cms-app').then((CMS) => {
                CMS.registerMediaLibrary(module.NetlifyCmsMediaLibraryCloudinary)
                return CMS.init({ config })
            })
        }
        )

    },
    { ssr: false }

)

const Admin = () => <>
    <NetlifyCMS />
</>

export default Admin
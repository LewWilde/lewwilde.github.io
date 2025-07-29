import { client } from "../../sanityclient";
import { NavClient } from "./NavClient"

const mainMenuGROQ = `*[_type == "navigation" && slug.current == "main-menu"][0]{
    ...,
    "items": items[]{
        ...,
        "internal": internal->{
            "slug": slug,
            "_type": _type
        }
    }
}`

const navFooterGROQ = `*[_type == "navigation" && slug.current == "nav-footer"][0]{
    ...,
    "items": items[]{
        ...,
        "internal": internal->{
            "slug": slug,
            "_type": _type
        }
    }
}`

const GROQ = `{
"mainMenu" : ${mainMenuGROQ},
"navFooter" : ${navFooterGROQ}
}`

export const Nav = async () => {

    const navData = await client.fetch(GROQ) ?? {}

    return (
        <NavClient navData={navData} />
    )

}
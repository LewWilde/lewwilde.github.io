import { client } from "../../sanityclient";
import { NavClient } from "./NavClient"

const NAV_GROQ = `*[_type == "navigation" && slug.current == "main-menu"][0]{
                        ...,
                        "items" : items[]{
                            ...,
                            "internal": internal->slug.current
                        }
                    }`

export const Nav = async () => {

    const navData = await client.fetch(NAV_GROQ) ?? {}

    return (
        <NavClient items={navData?.items} />
    )

}
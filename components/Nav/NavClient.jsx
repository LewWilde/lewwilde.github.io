"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import css from './Nav.module.scss'
import { Button } from "@/components/Buttons/Button"
import { Container } from "../Layout/Container"
import { useState } from "react";
import { NavLink } from "@/components/Nav/NavLink";
import { resolveLink } from "../../utils/resolveLink";
import { Header } from "@/components/Header/Header"

export const NavClient = ({ items }) => {

    const [open, setOpen] = useState(false)

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Button variant="outline" size="small" className={css.trigger} onClick={() => setOpen(!open)}>Menu</Button>
            <Dialog.Portal>
                <Dialog.Overlay className={css.overlay}>
                    <VisuallyHidden><Dialog.Title>Main Menu</Dialog.Title></VisuallyHidden>
                    <Dialog.Content className={css.content}>
                        <div className={css.head}>
                            <Header navButton={<Button
                                variant="outline"
                                size="small"
                                className={css.trigger}
                                onPointerDown={(e) => { e.stopPropagation(); }}
                                onClick={() => setOpen(false)}
                            >Close
                            </Button>} />
                        </div>
                        <Container>
                            <div className={css.grid}>
                                <div className={css.grid_left}
                                ></div>
                                <div className={css.grid_right}>
                                    <nav className={css.nav}>
                                        {items.map(item =>
                                            <NavLink key={item._key}
                                                href={item.internal ? resolveLink(item.internal) : item.external}
                                                isExternal={!!item.external}
                                                onNavigate={() => { setOpen(false) }}
                                            >{item.text}</NavLink>
                                        )}
                                    </nav>
                                </div>
                                <div className={css.grid_footer} >

                                </div>
                            </div>
                        </Container>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root >

    )
}
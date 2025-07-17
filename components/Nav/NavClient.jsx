"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import css from './Nav.module.scss'
import { Button } from "../Buttons/Button"
import { X } from "@phosphor-icons/react/dist/ssr"
import { Container } from "../Layout/Container"
import Link from "@/components/Link/Link";
import { useState } from "react";

export const NavClient = ({ items }) => {

    const [open, setOpen] = useState(false)

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild><Button variant="outline" size="small">Menu</Button></Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={css.overlay}>
                    <Dialog.Content className={css.content}>
                        <Container>
                            <VisuallyHidden><Dialog.Title>Main Menu</Dialog.Title></VisuallyHidden>
                            <div className={css.head}>
                                <Dialog.Close asChild>
                                    <Button variant="outline" size="small"><X size="1em" weight="bold" /></Button>
                                </Dialog.Close>
                            </div>
                            <div className={css.main}>
                                {items.map(item =>
                                    <Link key={item._key}
                                        href={item.internal ? item.internal : item.external}
                                        isExternal={!!item.external}
                                    >{item.text}</Link>
                                )}
                            </div>
                        </Container>
                    </Dialog.Content>
                </Dialog.Overlay>
            </Dialog.Portal>
        </Dialog.Root >

    )

}
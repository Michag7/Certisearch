'use client'

import { Input } from "@nextui-org/react";
import ButtonSearch from "./button-search";
import { useRouter } from 'next/navigation'

export default function Seeaker() {
    const router = useRouter()

    return (
        <form  className="flex justify-center flex-wrap w-full px-4 py-4 space-y-2 bg-white md:flex-nowrap lg:flex-nowrap rounded-3xl md:rounded-full lg:rounded-full md:space-y-0 lg:space-y-0">
            <Input
                className="mx-4 md:w-2/3 lg:w-2/3 w-fit"
                type="text"
                labelPlacement={"outside"}
                placeholder="Certificación"
                variant="underlined"
                size={"lg"}
                radius="full"
            />
            <ButtonSearch />
        </form>
    )

}
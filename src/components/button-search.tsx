'use client'

import { SearchIcon } from "../assets/icons";


export default function ButtonSearch() {

    return <button type="submit" className="flex items-center justify-center px-4 py-2 lg:px-4 space-x-2 font-bold rounded-full bg-seagull-500 text-seagull-50 w-fit md:w-1/3 lg:w-1/3"><SearchIcon className={"mr-2"} size={20} /> Buscar</button>


}
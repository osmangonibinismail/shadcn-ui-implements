'use client'

import { Button } from "@/components/ui/button"

const ChaiPage = () => {
    return (
        <main className="h-full flex flex-col justify-center items-center">
            <div>
                ChaiPage
            </div>
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded my-3">Text Button</button>
            <Button variant='chai' size='lg'>Shadcn ui button test</Button>
        </main>
    )
}

export default ChaiPage

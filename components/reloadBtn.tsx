"use client"

import { Button } from "./ui/button";

export default function ReloadBtn() {
    return (<Button variant="outline" className="mt-4" onClick={() => window.location.reload()}>
                Try Again
            </Button>
            )
}


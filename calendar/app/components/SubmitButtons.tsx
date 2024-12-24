import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import GoogleLogo from "@/public/google.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export function GoogleAuthButton() {
    const {pending} = useFormStatus()

    return (
        <>
        {pending ? (
            <Button disabled>
                <Loader2 className="size-4 mr-2 animate-spin" /> Please wait...
            </Button>
        ): (
            <Button>
                <Image src={GoogleLogo} alt="Google Logo" className="size-4 mr-2" />
                Sign in with Google
            </Button>
        )}
        </>
    )
}
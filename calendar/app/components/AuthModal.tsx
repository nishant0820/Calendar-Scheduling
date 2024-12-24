import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import Logo from "@/public/logo.png";
import { signIn } from "../lib/auth";

export function AuthModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Try For Free</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[360px]">
                <DialogHeader className="flex flex-row justify-center items-center gap-2">
                    <Image src={Logo} alt="Logo" className="size-10" />
                    <h4 className="text-3xl font-semibold">Cal<span className="text-primary">endar</span></h4>
                </DialogHeader>
                <div className="flex flex-col mt-5 gap-3">
                    <form action={async()=>{
                        "use server"
                        await signIn("google");
                    }} className="w-full">
                        <Button className="w-full">Sign in with Google</Button>
                    </form>
                    <Button>Sign in with Github</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
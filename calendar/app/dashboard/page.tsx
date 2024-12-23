import { requireUser } from "../lib/hooks";

export default async function DashboardPage() {
    const session = await requireUser();
    return (
        <div>
            <h1>Hello from DashboardPage</h1>
        </div>
    );
}
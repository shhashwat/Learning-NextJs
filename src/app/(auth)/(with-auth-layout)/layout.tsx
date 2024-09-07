export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <h2>Inner layout</h2>
        </>
    );
}
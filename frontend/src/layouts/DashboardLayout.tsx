import Header from "../components/header/Header";


type Props = {
    children: React.ReactNode;
};

export default function DashboardLayout({
    children,
}: Props) {
    return (
        <>
            <Header />

            <main>
                {children}
            </main>
        </>
    ); 
}
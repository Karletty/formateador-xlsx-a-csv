import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import "./styles.scss"

type Props = {
    children: ReactNode;
    title: string;
}

const Layout: FC<Props> = ({ children, title }) => {
    return (<>
        <Header title={title} />
        <Main>{children}</Main>
        <Footer />
    </>);
}

export { Layout };
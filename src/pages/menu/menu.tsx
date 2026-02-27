import Menu from "../../components/Menu/Menu";
import { Header, Sidebar } from "../../components";
import './menu.scss'

export const MenuPage = () => {
  return (
    <section className={'menu-page'}>
      <Header />
      
      <main>
        <Sidebar />
        <Menu />
      </main>
    </section>
  );
}

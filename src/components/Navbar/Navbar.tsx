import Title from "./Title";
import ToggleThemeButton from "./ToggleThemeButton";

export const Navbar = ({ title }: { title: string }) => {
  return (
    <nav className="flex justify-between items-center px-4 pt-6 pb-4 border-b border-b-gray-200 dark:border-b-gray-200/5">
      <Title title={title} />
      <ToggleThemeButton />
    </nav>
  );
};

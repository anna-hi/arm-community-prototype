function NavigationItem({
  sectionId,
  title,
  activeSection,
  onClick,
}: {
  sectionId: string;
  title: string;
  activeSection: string;
  onClick?: () => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    onClick?.();
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      // Get the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - 100;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <a
      href={`#${sectionId}`}
      onClick={handleClick}
      className={`pb-2 whitespace-nowrap transition-colors ${
        activeSection === sectionId
          ? "text-gray-950 border-b-2 border-armYellow"
          : "text-gray-600 hover:text-gray-950"
      }`}
    >
      {title}
    </a>
  );
}

export default NavigationItem;

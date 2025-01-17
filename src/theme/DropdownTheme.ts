export const DropdownTheme = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1 focus:outline-none",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-neutral-900 dark:bg-neutral-700",
        light: "bg-white",
        auto: "bg-white dark:bg-neutral-700",
      },
      placement: "-4px",
    },
    base: "z-10 w-fit divide-y divide-neutral-100 rounded shadow focus:outline-none",
    content: "py-1 text-sm text-neutral-700 dark:text-neutral-200",
    divider: "my-1 h-px bg-neutral-100 dark:bg-neutral-600",
    header: "block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200",
    hidden: "invisible opacity-0",
    item: {
      container: "",
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-600 dark:hover:text-white dark:focus:bg-neutral-600 dark:focus:text-white",
      icon: "mr-2 h-4 w-4",
    },
    style: {
      dark: "bg-neutral-900 text-white dark:bg-neutral-700",
      light: "border border-neutral-200 bg-white text-neutral-900",
      auto: "border border-neutral-200 bg-white text-neutral-900 dark:border-none dark:bg-neutral-700 dark:text-white",
    },
    target: "w-fit",
  },
  inlineWrapper: "flex items-center",
};

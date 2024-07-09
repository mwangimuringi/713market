import clsx from "clsx";

const Title = ({ title, className, ...props }) => {
  return (
    <h2
      className={clsx("font-medium tracking-tight text-gray-800", className)}
      {...props}
    >
      {title}
    </h2>
  );
};

export default Title;
